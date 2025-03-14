"use server";
import { FormData } from "@/app/contato/page";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API);

const sendResendEmail = async (formData: FormData) => {
  try {
    const response = await resend.batch.send([
      {
        from: "Acme <onboarding@resend.dev>",
        to: ["gbanco1993@gmail.com"],
        subject: formData.title,
        html: `
          <h1>EMAIL VIA PORTFÓLIO</h1>
          <p>Email: ${formData.email}<p>
          <p>Nome: ${formData.name}<p>
          <p>Mensagem: ${formData.message}<p>
        `,
      },
    ]);
    return { status: 200, message: response.data };
  } catch (error) {
    return { status: 500, message: error };
  }
};

export default sendResendEmail;
