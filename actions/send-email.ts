"use server";

import { getErrorMessage, validateSting } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

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

  let data;

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "mohamet.almeari@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail as string, // because we validated it above we know it's a string
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
