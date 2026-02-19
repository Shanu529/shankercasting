// import nodemailer from "nodemailer";

// export const createTransporter = () => {
//     return nodemailer.createTransport({
//         host: process.env.MAIL_HOST,        // e.g. mail.patterwal.com
//         port: Number(process.env.MAIL_PORT),// 465 or 587
//         secure: process.env.MAIL_PORT == "465", // SSL = true, TLS = false
//         auth: {
//             user: process.env.MAIL_USER,
//             pass: process.env.MAIL_PASS,
//         },
//         tls: {
//             rejectUnauthorized: false, // IMPORTANT for hosting servers
//         },

//         logger: true,   //  shows logs
//         debug: true,    //  shows SMTP errors
//     });
// };

// export const verifySMTP = async () => {
//     const transporter = createTransporter();
//     try {
//         await transporter.verify();
//         console.log("SMTP LOGIN SUCCESS");
//     } catch (err) {
//         console.error("SMTP LOGIN FAILED", err);
//     }
// };


// import nodemailer from "nodemailer";

// export const transporter = nodemailer.createTransport({
//     host: process.env.MAIL_HOST,
//     port: Number(process.env.MAIL_PORT),
//     secure: false, // TLS (587)
//     auth: {
//         user: process.env.MAIL_USER,
//         pass: process.env.MAIL_PASS,
//     },
// });



// import nodemailer from "nodemailer";

// export const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.MAIL_USER,
//     pass: process.env.MAIL_PASS,
//   },
// });

import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});
