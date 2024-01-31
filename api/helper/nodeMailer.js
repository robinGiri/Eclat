const nodemailer = require("nodemailer");
const fs = require("fs");
const Handlebars = require("handlebars");

const nodeMailer = (username) => {
  // Read the HTML template file
  fs.readFile("./templates/index.html", "utf8", (err, templateSource) => {
    if (err) {
      console.error("Error reading template file:", err);
      return;
    }

    // Compile the template
    const compiledTemplate = Handlebars.compile(templateSource);

    // Execute the compiled template with data
    const emailHtml = compiledTemplate({
      userName: userName,
      companyName: "Eclat",
    });

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Set this to true if using port 465
      auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD,
      },
    });

    // Verify the transporter
    transporter
      .verify()
      .then(() => {
        console.log("Transporter verified.");

        // Send the email
        transporter
          .sendMail({
            from: `"ECLATE" <${process.env.USER}>`,
            to: "ksandresh1@gmail.com",
            subject: "Hey, I am here",
            text: "There is a new article. It's about sending emails, check it out!",
            html: emailHtml, // Attach the compiled HTML template
          })
          .then((info) => {
            console.log("Email sent:", info.response);
          })
          .catch((error) => {
            console.error("Error sending email:", error);
          });
      })
      .catch((error) => {
        console.error("Transporter verification failed:", error);
      });
  });
};

module.exports = nodeMailer;
