import prisma from "../config/prisma.js";

export const getRecentActivity = async (req, res) => {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: { createdAt: "desc" },
      take: 5,
    });

    const contacts = await prisma.contact.findMany({
      orderBy: { createdAt: "desc" },
      take: 5,
    });

    const users = await prisma.user.findMany({
      orderBy: { createdAt: "desc" },
      take: 5,
    });

    const newsletters = await prisma.newsletter.findMany({
      orderBy: { createdAt: "desc" },
      take: 5,
    });

    const activity = [
      ...blogs.map(b => ({
        type: "blog",
        message: `New blog published: ${b.title}`,
        createdAt: b.createdAt,
      })),

      ...contacts.map(c => ({
        type: "contact",
        message: `New contact from ${c.name}`,
        createdAt: c.createdAt,
      })),

      ...users.map(u => ({
        type: "user",
        message: `New user registered`,
        createdAt: u.createdAt,
      })),

      ...newsletters.map(n => ({
        type: "newsletter",
        message: `Newsletter subscriber added`,
        createdAt: n.createdAt,
      })),
    ];

    activity.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    res.json(activity.slice(0, 5));

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
