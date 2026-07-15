// api/cron-reminders.js — Se ejecuta diariamente
// Revisa usuarios inactivos y manda emails de recordatorio

const RESEND_KEY = "re_4KaRWV9k_BLPj29ZqfgjiQdNrQnEUbRWJ";

const PROJECTS = [
  {
    url: "https://xvxmiorluyzoropjnvbm.supabase.co",
    key: "sb_publishable_YHkiS2RYbZkhozxvjZnuyA_0fJQKNzk",
    app: "pipa-akd",
    appUrl: "https://pipa-akd.vercel.app",
    color: "#0EA5E9"
  },
  {
    url: "https://hgvwdoxmzdnmhoucdhbd.supabase.co",
    key: "sb_publishable_fmpC1-ucmGLXuoIxsXKLWg_bdMABgIA",
    app: "portugues-brasil",
    appUrl: "https://portugues-brasil-app.vercel.app",
    color: "#1D9E75"
  }
];

async function getUsersInactive(proj, days) {
  const from = new Date(Date.now() - (days + 1) * 86400000).toISOString();
  const to   = new Date(Date.now() - days * 86400000).toISOString();
  
  const res = await fetch(
    `${proj.url}/rest/v1/profiles?select=id,email,app&last_active=gte.${from}&last_active=lte.${to}&email=not.is.null`,
    { headers: { "apikey": proj.key, "Authorization": `Bearer ${proj.key}` } }
  );
  return await res.json();
}

async function getStreak(proj, userId) {
  const res = await fetch(
    `${proj.url}/rest/v1/progress?select=streak_count&user_id=eq.${userId}`,
    { headers: { "apikey": proj.key, "Authorization": `Bearer ${proj.key}` } }
  );
  const data = await res.json();
  return data[0]?.streak_count || 0;
}

async function sendReminderEmail(email, app, days, streak, appUrl, color) {
  const isES = app === "pipa-akd";
  
  const subject = isES
    ? `Llevas ${days} días sin practicar — ¿todo bien? 👀`
    : `Faz ${days} dias que você não pratica — tudo bem? 👀`;

  const cta = isES ? "▶ Retomar mi práctica" : "▶ Retomar minha prática";
  const body1 = isES
    ? `Llevas <strong>${days} días</strong> sin practicar español.`
    : `Faz <strong>${days} dias</strong> que você não pratica português.`;
  const body2 = isES
    ? "El español se aprende todos los días — aunque sean 10 minutos."
    : "O português se aprende todo dia — mesmo que sejam 10 minutos.";
  const streakMsg = isES
    ? `🔥 Tenías una racha de <strong>${streak} días</strong> — no la pierdas.`
    : `🔥 Você tinha uma sequência de <strong>${streak} dias</strong> — não perca.`;

  const html = `
    <div style="font-family:Inter,sans-serif;max-width:560px;margin:0 auto;padding:32px 24px;background:#F7F7F5;">
      <div style="background:#fff;border-radius:16px;padding:32px;border:1px solid rgba(0,0,0,0.08);">
        <p style="font-size:40px;text-align:center;margin:0 0 16px;">⏰</p>
        <h1 style="font-size:20px;font-weight:700;color:#0B0B0A;text-align:center;margin:0 0 8px;">${body1}</h1>
        <p style="font-size:15px;color:#52514E;text-align:center;margin:0 0 24px;">${body2}</p>
        ${streak > 0 ? `<div style="background:#FFF7ED;border-radius:12px;padding:16px;text-align:center;margin-bottom:24px;"><p style="font-size:14px;color:#C2410C;margin:0;">${streakMsg}</p></div>` : ""}
        <a href="${appUrl}" style="display:block;background:${color};color:#fff;text-align:center;padding:14px;border-radius:10px;font-size:15px;font-weight:700;text-decoration:none;margin-bottom:20px;">${cta}</a>
        <p style="font-size:12px;color:#898781;text-align:center;margin:0;">
          <a href="${appUrl}" style="color:#898781;">Ir a la app</a>
        </p>
      </div>
    </div>`;

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${RESEND_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: "Pipa Akd <onboarding@resend.dev>",
      to: [email],
      subject,
      html
    })
  });
}

export default async function handler(req, res) {
  // Verificar que viene de Vercel Cron
  if (req.headers.authorization !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  let sent = 0;

  for (const proj of PROJECTS) {
    try {
      // Usuarios inactivos 3 días
      const inactive3 = await getUsersInactive(proj, 3);
      for (const user of (Array.isArray(inactive3) ? inactive3 : [])) {
        if (!user.email) continue;
        const streak = await getStreak(proj, user.id);
        await sendReminderEmail(user.email, proj.app, 3, streak, proj.appUrl, proj.color);
        sent++;
      }

      // Usuarios inactivos 7 días
      const inactive7 = await getUsersInactive(proj, 7);
      for (const user of (Array.isArray(inactive7) ? inactive7 : [])) {
        if (!user.email) continue;
        const streak = await getStreak(proj, user.id);
        await sendReminderEmail(user.email, proj.app, 7, streak, proj.appUrl, proj.color);
        sent++;
      }
    } catch(e) {
      console.error(`Error en ${proj.app}:`, e.message);
    }
  }

  return res.status(200).json({ ok: true, sent });
}
