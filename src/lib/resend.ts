"use server";

import { FinalFormDataType } from "@/app/apply/types";
import EmailTemplate from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (subject: string, firstName: string, data: FinalFormDataType) => {
  const result = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: "mo.zaqout@gmail.com",
    subject: subject,
    react: EmailTemplate({ firstName, data }),
  });

  console.log(result);
};
