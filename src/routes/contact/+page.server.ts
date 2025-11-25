import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    await resend.emails.send({
      from: `${name} <homepage@lordimmaculate.dev>`,
      to: "emil.dhauwe@gmail.com",
      reply_to: email,
      subject,
      text: message
    });

    return {
      success: true,
      message: "Your message has been sent successfully."
    };
  }
};
