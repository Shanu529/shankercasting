

import prisma from "../config/prisma.js"
// import { createTransporter } from "../utils/mail.js";
import { transporter } from "../utils/mail.js";


// export const createContact = async (req, res) => {
//     try {
//         const { name, email, message } = req.body;

//         if (!name || !email) {
//             return res.status(400).json({ error: "Name and Email required" });
//         }

//         // save in DB
//         await prisma.contact.create({
//             data: { name, email, message },
//         });

//         // rrespond immediately
//         res.status(201).json({
//             success: true,
//             message: "Contact saved",
//         });

//         // end email in background
//         transporter.sendMail({
//             from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_USER}>`,
//             to: process.env.MAIL_TO,
//             replyTo: email,
//             subject: "New Contact Message",
//             html: `
//         <h3>New Contact</h3>
//         <p><b>Name:</b> ${name}</p>
//         <p><b>Email:</b> ${email}</p>
//         <p><b>Message:</b> ${message || "-"}</p>
//       `,
//         }).then(() => {
//             console.log("Email sent");
//         }).catch(err => {
//             console.error("Email error:", err);
//         });

//     } catch (err) {
//         console.error(err);
//         return res.status(500).json({ error: "Server error" });
//     }
// };

export const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "Name and Email required" });
    }

    // Save to DB
    await prisma.contact.create({
      data: { name, email, message },
    });

    // Send email FIRST
    await transporter.sendMail({
      from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: "New Contact Message",
      html: `
        <h3>New Contact</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message || "-"}</p>
      `,
    });

    // Then send response
    return res.status(201).json({
      success: true,
      message: "Contact saved and email sent",
    });

  } catch (err) {
    console.error("Contact error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};


/**
 * get all contacts
 * GET /api/contact
 */
export const getAllContacts = async (req, res) => {

    try {
        const contacts = await prisma.contact.findMany({
            orderBy: { createdAt: "desc" }
        })

        return res.status(200).json({
            success: true,
            contacts
        })
    } catch (error) {
        return res.status(500).json({
            error: "Internal errror "
        })
    }
}


export const deleteContact = async (req, res) => {

    try {
        const { id } = req.params;
        await prisma.contact.delete({
            where: {
                id: Number(id)
            }
        })

        return res.status(200).json({
            success: true,
            message: "Contact deleted successfully",
        });
    } catch (error) {
        console.error("Delete contact error:", error);
        return res.status(500).json({
            error: "Internal server error",
        });
    }
}