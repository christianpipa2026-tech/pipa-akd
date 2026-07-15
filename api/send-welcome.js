// api/send-welcome.js — Email de bienvenida
const RESEND_KEY = "re_4KaRWV9k_BLPj29ZqfgjiQdNrQnEUbRWJ";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  
  const { email, app } = req.body;
  if (!email) return res.status(400).json({ error: "Email requerido" });

  const isES = app === "pipa-akd";
  const subject = isES 
    ? "¡Bienvenido a Pipa Akd! Tu primera lección te espera 🇧🇷"
    : "Bem-vindo ao Português do Brasil! Sua primeira aula espera 🇧🇷";
  const appUrl = isES 
    ? "https://pipa-akd.vercel.app"
    : "https://portugues-brasil-app.vercel.app";
  const appName = isES ? "Pipa Akd" : "Português do Brasil";

  const html = isES ? `
    <div style="font-family:Inter,sans-serif;max-width:560px;margin:0 auto;padding:32px 24px;background:#F7F7F5;">
      <div style="background:#fff;border-radius:16px;padding:32px;border:1px solid rgba(0,0,0,0.08);">
        <div style="width:56px;height:56px;border-radius:14px;background:linear-gradient(135deg,#0EA5E9,#0369A1);display:flex;align-items:center;justify-content:center;margin:0 auto 20px;text-align:center;font-size:28px;line-height:56px;">🇧🇷</div>
        <h1 style="font-size:22px;font-weight:700;color:#0B0B0A;text-align:center;margin:0 0 8px;">¡Bienvenido a Pipa Akd!</h1>
        <p style="font-size:15px;color:#52514E;text-align:center;margin:0 0 28px;">Tu viaje del A1 al Master en español empieza hoy.</p>
        <div style="background:#F0F9FF;border-radius:12px;padding:20px;margin-bottom:24px;">
          <p style="font-size:14px;color:#0369A1;margin:0 0 12px;font-weight:600;">¿Qué tenés para aprender?</p>
          <ul style="font-size:14px;color:#52514E;margin:0;padding-left:20px;line-height:2;">
            <li>255 lecciones de A1 a Master</li>
            <li>Aulas Teóricas antes de cada unidad</li>
            <li>Ejercicios de escritura, traducción y producción oral</li>
            <li>Referência completa de gramática</li>
          </ul>
        </div>
        <a href="${appUrl}" style="display:block;background:#0EA5E9;color:#fff;text-align:center;padding:14px;border-radius:10px;font-size:15px;font-weight:700;text-decoration:none;margin-bottom:20px;">▶ Empezar mi primera lección</a>
        <p style="font-size:12px;color:#898781;text-align:center;margin:0;">Pipa Akd · Gratuito, sin publicidad</p>
      </div>
    </div>` 
  : `
    <div style="font-family:Inter,sans-serif;max-width:560px;margin:0 auto;padding:32px 24px;background:#F7F7F5;">
      <div style="background:#fff;border-radius:16px;padding:32px;border:1px solid rgba(0,0,0,0.08);">
        <div style="width:56px;height:56px;border-radius:14px;background:linear-gradient(135deg,#1D9E75,#0F6E56);display:flex;align-items:center;justify-content:center;margin:0 auto 20px;text-align:center;font-size:28px;line-height:56px;">🇧🇷</div>
        <h1 style="font-size:22px;font-weight:700;color:#0B0B0A;text-align:center;margin:0 0 8px;">Bem-vindo ao Português do Brasil!</h1>
        <p style="font-size:15px;color:#52514E;text-align:center;margin:0 0 28px;">Sua jornada do A1 ao Master começa hoje.</p>
        <div style="background:#F0FFF4;border-radius:12px;padding:20px;margin-bottom:24px;">
          <p style="font-size:14px;color:#0F6E56;margin:0 0 12px;font-weight:600;">O que você vai aprender?</p>
          <ul style="font-size:14px;color:#52514E;margin:0;padding-left:20px;line-height:2;">
            <li>303 lições do A1 ao Master</li>
            <li>Aulas Teóricas antes de cada unidade</li>
            <li>Exercícios de escrita, tradução e produção oral</li>
            <li>Referência completa de gramática</li>
          </ul>
        </div>
        <a href="${appUrl}" style="display:block;background:#1D9E75;color:#fff;text-align:center;padding:14px;border-radius:10px;font-size:15px;font-weight:700;text-decoration:none;margin-bottom:20px;">▶ Começar minha primeira aula</a>
        <p style="font-size:12px;color:#898781;text-align:center;margin:0;">Português do Brasil · Gratuito, sem anúncios</p>
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
