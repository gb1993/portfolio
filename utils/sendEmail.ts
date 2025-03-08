import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API);

resend.emails.send({
  from: "onboarding@resend.dev",
  to: "gbanco1993@gmail.com",
  subject: "Hello World",
  html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
});
