import nodemailer from "nodemailer";

export async function POST(req) {
   try {
      const { name, email, phone, message } = await req.json();

      if (!name || !email || !phone || !message) {
         return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
      }

      // Configure Nodemailer transporter
      const transporter = nodemailer.createTransport({
         service: "gmail",
         auth: {
            user: process.env.GMAIL_ID,
            pass: process.env.GMAIL_APP_API_SECRET,
         },
      });

      // Mail to the business owner
      const mailToOwner = {
         from: process.env.GMAIL_ID,
         to: "beyondlitigation@gmail.com",
         subject: `New Contact Form Submission from ${name}`,
         html: `
            <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; background-color: #ffffff;">
               <div style="background-color: #050505; padding: 24px; text-align: center;">
                  <h2 style="color: #E8C45F; margin: 0; font-size: 24px; font-weight: normal; letter-spacing: 2px; text-transform: uppercase;">Beyond Litigation</h2>
               </div>
               <div style="padding: 32px; color: #333333;">
                  <h3 style="margin-top: 0; color: #111111; font-size: 20px; border-bottom: 2px solid #E8C45F; padding-bottom: 10px; display: inline-block;">New Contact Inquiry</h3>
                  <p style="font-size: 16px; line-height: 1.6;">You have received a new message from the website contact form.</p>
                  
                  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 6px; margin: 24px 0;">
                     <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                           <td style="padding: 8px 0; color: #666; width: 100px; font-weight: bold;">Name:</td>
                           <td style="padding: 8px 0; color: #111;">${name}</td>
                        </tr>
                        <tr>
                           <td style="padding: 8px 0; color: #666; font-weight: bold;">Email:</td>
                           <td style="padding: 8px 0; color: #111;">
                              <a href="mailto:${email}" style="color: #E8C45F; text-decoration: none;">${email}</a>
                           </td>
                        </tr>
                        <tr>
                           <td style="padding: 8px 0; color: #666; font-weight: bold;">Phone:</td>
                           <td style="padding: 8px 0; color: #111;">${phone}</td>
                        </tr>
                     </table>
                  </div>
                  
                  <h4 style="color: #666; margin-bottom: 10px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Message Content:</h4>
                  <div style="background-color: #f4f4f4; padding: 20px; border-left: 4px solid #E8C45F; font-size: 15px; line-height: 1.6; color: #444; border-radius: 0 4px 4px 0;">
                     ${message.replace(/\n/g, '<br>')}
                  </div>
               </div>
               <div style="background-color: #f9f9f9; padding: 16px; text-align: center; color: #888; font-size: 12px; border-top: 1px solid #eee;">
                  This email was automatically generated from your website's contact form.
               </div>
            </div>
         `,
      };

      // Mail back to the user
      const mailToUser = {
         from: process.env.GMAIL_ID,
         to: email,
         subject: "Thank you for contacting Beyond Litigation",
         html: `
            <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; background-color: #ffffff;">
               <div style="background-color: #050505; padding: 30px; text-align: center;">
                  <h2 style="color: #E8C45F; margin: 0; font-size: 26px; font-weight: normal; letter-spacing: 2px; text-transform: uppercase;">Beyond Litigation</h2>
               </div>
               <div style="padding: 40px 32px; color: #333333;">
                  <h3 style="margin-top: 0; color: #111111; font-size: 22px;">Dear ${name},</h3>
                  <p style="font-size: 16px; line-height: 1.7; color: #444;">
                     Thank you for reaching out to <strong>Beyond Litigation</strong>. We have successfully received your inquiry and our team is currently reviewing your message.
                  </p>
                  <p style="font-size: 16px; line-height: 1.7; color: #444;">
                     One of our experienced legal professionals will get back to you as soon as possible at the phone number or email address you provided.
                  </p>
                  
                  <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                     <p style="font-size: 14px; color: #666; margin-bottom: 10px;">For your records, here is a copy of your message:</p>
                     <div style="background-color: #f9f9f9; padding: 20px; border-left: 3px solid #E8C45F; font-size: 15px; font-style: italic; color: #555;">
                        ${message.replace(/\n/g, '<br>')}
                     </div>
                  </div>
                  
                  <p style="font-size: 16px; line-height: 1.7; color: #444; margin-top: 30px;">
                     Best Regards,<br>
                     <strong style="color: #111;">The Beyond Litigation Team</strong>
                  </p>
               </div>
               <div style="background-color: #f4f4f4; padding: 20px; text-align: center; color: #777; font-size: 13px; border-top: 1px solid #ddd;">
                  <p style="margin: 0 0 10px 0;">Connaught Place, New Delhi, Delhi-110001, India</p>
                  <p style="margin: 0;"><a href="mailto:beyondlitigation@gmail.com" style="color: #E8C45F; text-decoration: none;">beyondlitigation@gmail.com</a> | +91 74994 43178</p>
               </div>
            </div>
         `,
      };

      // Send both emails
      await transporter.sendMail(mailToOwner);
      await transporter.sendMail(mailToUser);

      return new Response(JSON.stringify({ success: true, message: "Email sent successfully" }), { status: 200 });
   } catch (error) {
      console.error("Email sending failed:", error);
      return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
   }
}
