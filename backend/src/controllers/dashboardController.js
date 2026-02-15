
import prisma from "../config/prisma.js";

export const getDashboardStats = async (req, res) => {
    try {


        const totalContacts = await prisma.contact.count();
        const totalUsers = await prisma.user.count();
        const totalSubscribersNewsletters = await prisma.newsletter.count();
        const totalBlogs = await prisma.blog?.count() || 0;

        res.json({
            totalBlogs,
            totalContacts,
            totalUsers,
            totalSubscribersNewsletters
        })


    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
}