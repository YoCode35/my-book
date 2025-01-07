import nodemailer from 'nodemailer';
import { NextRequest } from 'next/server'; // Importer le type NextRequest

export async function POST(req: NextRequest) {  // Définir explicitement le type de req
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return new Response('Tous les champs sont obligatoires', { status: 400 });
  }

  // Créer un transporteur Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Utiliser Gmail ou ton service d'email
    auth: {
      user: process.env.EMAIL_USER,  // Ton email (dans .env.local)
      pass: process.env.EMAIL_PASS,  // Ton mot de passe ou mot de passe d'application
    },
  });

  // Configurer l'email
  const mailOptions = {
    from: email,  // Email de l'utilisateur
    to: process.env.EMAIL_USER,  // Ton email
    subject: `Message de ${name}`,
    text: `De: ${name} <${email}>\n\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response('Message envoyé avec succès', { status: 200 });
  } catch (error: unknown) {  // Ajouter un type pour l'erreur
    console.error(error);  // Afficher l'erreur dans la console pour le débogage
    return new Response('Erreur lors de l\'envoi du message', { status: 500 });
  }
}