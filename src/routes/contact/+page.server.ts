import { Resend } from "resend";
import { RESEND_API_KEY } from "$env/static/private";

const resend = new Resend(RESEND_API_KEY);

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    await resend.emails.send({
      from: `${name} <homepage@lordimmaculate.dev>`,
      to: "emil.dhauwe@gmail.com",
      replyTo: email,
      subject,
      text: message
    });

    return {
      success: true,
      message: "Your message has been sent successfully."
    };
  }
};
