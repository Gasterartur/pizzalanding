import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, phone, message } = await req.json();

    // Настройка "почтальона" (замени на свои данные)
    const transporter = nodemailer.createTransport({
      service: 'gmail', // или другой сервис
      auth: {
        user: process.env.EMAIL_USER, // Твоя рабочая почта
        pass: process.env.EMAIL_PASS,   // Пароль приложения (не обычный пароль!)
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Куда должны приходить заказы
      subject: `🍕 New order from ${name}`,
      text: `Name: ${name}\nPhone: ${phone}\nMessage: ${message}`,
      html: `
        <div style="font-family: sans-serif; border: 2px solid #ea580c; padding: 20px; border-radius: 15px;">
          <h2 style="color: #ea580c;">🍕 New order!</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #fff7ed; padding: 15px; border-radius: 10px;">${message}</div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error' }, { status: 500 });
  }
}