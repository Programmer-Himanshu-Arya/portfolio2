'use server';

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: true,
  port: 465,
  auth: {
    user: 'techlyft.official@gmail.com',
    pass: process.env.NODEMAILER_AUTH_PASS,
  },
});

type SendEmailProps = {
  email: string;
  subject: string;
  name: string;
  company: string;
  message: string;
  reason: string;
};

export const SendEmail = async ({
  email,
  subject,
  name,
  company,
  message,
  reason,
}: SendEmailProps) => {
  try {
    // const htmlContent = renderToStaticMarkup(template);

    let info = await transporter.sendMail({
      from: '"TechLyft" <techlyft.official@gmail.com>',
      to: 'techlyft.official@gmail.com',
      subject: 'Portfolio Inquiry - AryaDevs',
      html: `from email: ${email}<br><br>subject: ${subject}<br><br>reason: ${reason}<br><br>name: ${name}<br><br>company: ${company}<br><br>message: ${message}`,
    });

    return true;
  } catch (error) {
    console.error('Error sending email: ', error);
    return false;
  }
};
