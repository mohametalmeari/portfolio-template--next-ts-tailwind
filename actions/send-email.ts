"use server";

import { validateSting } from "@/lib/utils";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateSting(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateSting(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "mohamet.almeari@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail as string, // because we validated it above we know it's a string
      text: message as string, // because we validated it above we know it's a string
    });
  } catch (error) {
    console.log(error);
  }
};
