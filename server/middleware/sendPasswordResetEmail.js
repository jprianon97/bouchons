import nodemailer from "nodemailer";

export const sendPasswordResetEmail = (token, email, name) => {
  const html = `
    <html>
        <body>
          <h3>Dear ${name}</h3>
             <p>Veuillez cliquer sur le lien ci-dessous pour réinitialiser votre mot de passe.</p>
             <a href="http://localhost:3000/password-reset/${token}">Click here!</a>
        </body>
    </html>`;

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
    subject: "Dim Sum Snack: Réinitialisez votre demande de mot de passe.",
    html: html,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log(`Envoyer par email à ${email}`);
      console.log(info.response);
    }
  });
};
