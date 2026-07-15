// api/send-reminder.js — Email de recordatorio (3 días sin actividad)
const RESEND_KEY = "re_4KaRWV9k_BLPj29ZqfgjiQdNrQnEUbRWJ";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  
  const { email, app, days, streak } = req.body;
  if (!email) return res.status(400).json({ error: "Email requerido" });

  const isES = app === "pipa-akd";
  const appUrl = isES ? "https://pipa-akd.vercel.app" : "https://portugues-brasil-app.vercel.app";
  
  const subject = isES
    ? `Llevas ${days} días sin practicar — ¿todo bien? 👀`
    : `Faz ${days} dias que você não pratica — tudo bem? 👀`;

  const html = isES ? `
    <div style="font-family:Inter,sans-serif;max-width:560px;margin:0 auto;padding:32px 24px;background:#F7F7F5;">
      <div style="background:#fff;border-radius:16px;padding:32px;border:1px solid rgba(0,0,0,0.08);">
        <p style="font-size:40px;text-align:center;margin:0 0 16px;">⏰</p>
        <h1 style="font-size:20px;font-weight:700;color:#0B0B0A;text-align:center;margin:0 0 8px;">Llevas ${days} días sin practicar</h1>
        <p style="font-size:15px;color:#52514E;text-align:center;margin:0 0 24px;">El español se aprende todos los días — aunque sean 10 minutos.</p>
        ${streak > 0 ? `<div style="background:#FFF7ED;border-radius:12px;padding:16px;text-align:center;margin-bottom:24px;"><p style="font-size:14px;color:#C2410C;margin:0;">🔥 Tenías una racha de <strong>${streak} días</strong> — no la pierdas.</p></div>` : ''}
        <a href="${appUrl}" style="display:block;background:#0EA5E9;color:#fff;text-align:center;padding:14px;border-radius:10px;font-size:15px;font-weight:700;text-decoration:none;margin-bottom:20px;">▶ Retomar mi práctica</a>
        <p style="font-size:12px;color:#898781;text-align:center;margin:0;">Pipa Akd · <a href="${appUrl}" style="color:#898781;">Ir a la app</a></p>
      </div>
    </div>`
  : `
    <div style="font-family:Inter,sans-serif;max-width:560px;margin:0 auto;padding:32px 24px;background:#F7F7F5;">
      <div style="background:#fff;border-radius:16px;padding:32px;border:1px solid rgba(0,0,0,0.08);">
        <p style="font-size:40px;text-align:center;margin:0 0 16px;">⏰</p>
        <h1 style="font-size:20px;font-weight:700;color:#0B0B0A;text-align:center;margin:0 0 8px;">Faz ${days} dias que você não pratica</h1>
        <p style="font-size:15px;color:#52514E;text-align:center;margin:0 0 24px;">O português se aprende todo dia — mesmo que sejam 10 minutos.</p>
        ${streak > 0 ? `<div style="background:#FFF7ED;border-radius:12px;padding:16px;text-align:center;margin-bottom:24px;"><p style="font-size:14px;color:#C2410C;margin:0;">🔥 Você tinha uma sequência de <strong>${streak} dias</strong> — não perca.</p></div>` : ''}
        <a href="${appUrl}" style="display:block;background:#1D9E75;color:#fff;text-align:center;padding:14px;border-radius:10px;font-size:15px;font-weight:700;text-decoration:none;margin-bottom:20px;">▶ Retomar minha prática</a>
        <p style="font-size:12px;color:#898781;text-align:center;margin:0;">Português do Brasil · <a href="${appUrl}" style="color:#898781;">Ir ao app</a></p>
      </div>
    </div>`;

  try {
    const response = await fetch("https://api.resend.com/emails", {
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
    const data = await response.json();
    if (data.id) return res.status(200).json({ ok: true });
    return res.status(500).json({ error: data });
  } catch(e) {
    return res.status(500).json({ error: e.message });
  }
}
