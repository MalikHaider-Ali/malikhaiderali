"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: {
  from_name: string;
  from_email: string;
  subject: string;
  service: string;
  budget: string;
  message: string;
}) {
  const { from_name, from_email, subject, service, budget, message } = formData;

  if (!from_name || !from_email || !message) {
    return { error: "Please fill in all required fields." };
  }

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.RESEND_TO_EMAIL!,
      replyTo: from_email,
      subject: `New Contact: ${subject || "No Subject"}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #12121f; color: #e3e0f4; border-radius: 12px;">
          <h2 style="color: #ffb2b7; margin-bottom: 24px;">New Message from ${from_name}</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #2A2A4A; color: #8888AA; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; width: 140px;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #2A2A4A;">${from_name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #2A2A4A; color: #8888AA; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #2A2A4A;"><a href="mailto:${from_email}" style="color: #41eec2;">${from_email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #2A2A4A; color: #8888AA; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Subject</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #2A2A4A;">${subject || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #2A2A4A; color: #8888AA; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Service</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #2A2A4A;">${service || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #2A2A4A; color: #8888AA; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Budget</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #2A2A4A;">${budget || "—"}</td>
            </tr>
          </table>

          <div style="margin-top: 24px;">
            <p style="color: #8888AA; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">Message</p>
            <p style="background: #1e1e2c; padding: 16px; border-radius: 8px; border: 1px solid #2A2A4A; line-height: 1.6;">${message}</p>
          </div>

          <p style="margin-top: 24px; color: #8888AA; font-size: 12px; text-align: center;">
            Sent from Malik Haider Ali Portfolio — <a href="mailto:${from_email}" style="color: #41eec2;">Reply directly to ${from_email}</a>
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return { error: "Failed to send email. Please try again." };
    }

    return { success: true };
  } catch (err) {
    console.error("Unexpected error:", err);
    return { error: "Something went wrong. Please try again." };
  }
}