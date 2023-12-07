import nodemailer from "nodemailer";
// ltee yzvm ghjp syxr
// pimentsiave974@gmail.com
export const sendVerificationEmail = (token, email, name) => {
  const html = `
    <html>
        <body>
            <h3>Cher ${name}</h3>
            <p>Merci de vous être inscrit à Dim Sum Snack!</p>
            <p>Utilisez le lien ci-dessous pour vérifier votre email</p>
            <a href="http://localhost:3000/email-verify/${token}">Cliquez ici!</a>
        </body>
    </html>
    `;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "pimentsiave974@gmail.com",
      pass: "ltee yzvm ghjp syxr",
    },
  });

  const mailOptions = {
    from: "pimentsiave974@gmail.com",
    to: email,
    subject: "Verify your email address",
    html: html,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email send to ${email}`);
      console.log(info.response);
    }
  });
};
