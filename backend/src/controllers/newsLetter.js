

import prisma from "../config/prisma.js";

export const newsLetter = async (req, res) => {
    try {
        const { email } = req.body;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            return res.status(400).json({ error: "Email required" })
        }
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: "Invalid email format" });
        }


        // if email is already 

        const existingEmail = await prisma.newsletter.findUnique({
            where: {
                email
            }
        });

        if (existingEmail) {
            return res.status(400).json({ error: "Email already registered" })
        }


        await prisma.newsletter.create({
            data: { email }
        });

        return res.status(201).json({ message: "Subscribed successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server error" });
    }
}


export const getAllSubscribers = async (req, res) => {
    try {
        const subscribers = await prisma.newsletter.findMany({
            orderBy: { createdAt: "desc" },
        });

        return res.status(200).json({ subscribers });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server error" });
    }
};

export const deleteSubscriber = async (req, res) => {
    try {
        const { id } = req.params;

        await prisma.newsletter.delete({
            where: { id: Number(id) },
        });

        return res.json({ message: "Subscriber removed successfully" });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server error" });
    }
};
