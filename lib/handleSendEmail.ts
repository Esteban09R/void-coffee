"use server";
import { Resend } from "resend";

export const sendEmail = async (formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not defined");
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: process.env.EMAIL!,
    subject: `V0ID COFFEE CONTACT: Message from ${name}`,
    html: `
    <div style="background-color: #000; padding: 1rem; color: #fff; border-radius: 1rem; font-family: sans-serif;">
      <h1 style="font-size: 2rem; font-weight: bold; font-family: monospace;">New message from <span style="color: #04ff00;">V0ID</span> COFFEE</h1>
      <div style="border: 1px solid #fff; border-radius: 1rem; padding: 1rem; margin: 1rem 0; background-color: rgba(255, 255, 255, 0.2);">

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      </div>
    </div>
    `,
  });
};
