import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await req.json();
  const {nombre, email, mensaje } = body;

  console.log("Datos recibidos en el servidor:", body);
  await resend.emails.send({
     from: "onboarding@resend.dev",
      to: "mabermudez.dev@gmail.com",
      subject: "Nuevo mensaje de contacto",
      html: `
        <h2>Nuevo mensaje</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,});
  return NextResponse.json({ ok: true });
}