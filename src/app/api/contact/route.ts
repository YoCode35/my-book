import nodemailer from 'nodemailer';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return new Response('Tous les champs sont obligatoires', { status: 400 });
  }

  // Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  //Email
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Message de ${name}`,
    text: `De: ${name} <${email}>\n\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response('Message envoyé avec succès', { status: 200 });
  } catch (error: unknown) {
    console.error(error);
    return new Response('Erreur lors de l\'envoi du message', { status: 500 });
  }
}