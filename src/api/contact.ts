import type { VercelRequest, VercelResponse } from "@vercel/node";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const sesClient = new SESClient({
  region: process.env.AWS_REGION,
  // Vercel에서는 process.env에 이미 들어있음
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
});

export const handler = async (req: VercelRequest, res: VercelResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body as {
      name?: string;
      email?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const fromEmail = process.env.SES_FROM_EMAIL;
    const toEmail = process.env.SES_TO_EMAIL;

    if (!fromEmail || !toEmail) {
      console.error("SES_FROM_EMAIL or SES_TO_EMAIL is not set");
      return res.status(500).json({ error: "Email config missing" });
    }

    const params = new SendEmailCommand({
      Source: fromEmail,
      Destination: {
        ToAddresses: [toEmail],
      },
      ReplyToAddresses: [email],
      Message: {
        Subject: {
          Data: `New portfolio contact from ${name}`,
          Charset: "UTF-8",
        },
        Body: {
          Text: {
            Data: `
You have a new message from your portfolio site.

Name: ${name}
Email: ${email}

Message:
${message}
            `.trim(),
            Charset: "UTF-8",
          },
          Html: {
            Data: `
              <h2>New message from your portfolio</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <p>${message.replace(/\n/g, "<br />")}</p>
            `,
            Charset: "UTF-8",
          },
        },
      },
    });
    await sesClient.send(params);

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("SES send error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
};
