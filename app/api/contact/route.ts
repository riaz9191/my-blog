import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Luminous Global" <${process.env.EMAIL_USER}>`,
      to: "mdshan1620@gmail.com",
      subject: `New Inquiry from ${name} | Luminous Global`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
<body style="background-color: #f4f4f4; margin: 0 !important; padding: 0 !important;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <!-- LOGO -->
        <tr>
            <td bgcolor="#0056b3" align="center">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                    <tr>
                        <td align="center" valign="top" style="padding: 40px 10px 40px 10px;">
                            <h1 style="color: #ffffff; font-family: 'Arial', sans-serif; font-size: 48px; font-weight: 700; line-height: 48px; margin: 0;">Luminous Global</h1>
                         </td>
                    </tr>
                </table>
            </td>
        </tr>
        <!-- HERO -->
        <tr>
            <td bgcolor="#0056b3" align="center" style="padding: 0px 10px 0px 10px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                    <tr>
                        <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: 'Arial', sans-serif; font-size: 48px; font-weight: 400; letter-spacing: 4px; line-height: 48px;">
                          <h2 style="font-size: 32px; font-weight: 600; margin: 2;">New Contact Inquiry</h2>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <!-- COPY BLOCK -->
        <tr>
            <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                  <!-- COPY -->
                  <tr>
                    <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: 'Arial', sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
                      <p style="margin: 0;">You have received a new message from the contact form on your website. Here are the details:</p>
                    </td>
                  </tr>
                  <!-- Form Data -->
                  <tr>
                    <td bgcolor="#ffffff" align="left" style="padding: 0px 30px 40px 30px; border-radius: 0px 0px 4px 4px;">
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td style="padding: 15px; background-color: #f8f8f8; border: 1px solid #ddd;">
                            <p style="margin: 0; font-family: 'Arial', sans-serif; font-size: 16px;"><strong>Name:</strong> ${name}</p>
                            <p style="margin: 10px 0; font-family: 'Arial', sans-serif; font-size: 16px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #0056b3; text-decoration: none;">${email}</a></p>
                            <p style="margin: 0; font-family: 'Arial', sans-serif; font-size: 16px; line-height: 22px;"><strong>Message:</strong><br/>${message}</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
            </td>
        </tr>
        <!-- FOOTER -->
        <tr>
            <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                  <tr>
                    <td bgcolor="#f4f4f4" align="center" style="padding: 30px 30px 30px 30px; color: #666666; font-family: 'Arial', sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
                      <p style="margin: 0;">This is an automated email from your website. You do not need to reply to this email.</p>
                    </td>
                  </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error(error);
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { success: false, message: "Invalid JSON in request body" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: error.message || "An unknown error occurred" },
      { status: 500 }
    );
  }
}
