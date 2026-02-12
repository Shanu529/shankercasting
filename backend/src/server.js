

import express from "express"
import cors from "cors"
import "dotenv/config";
import contactRoutes from "./routes/contactRoutes.js"
import authRoutes from "./routes/authRoutes.js";

import newsLetterRoutes from "./routes/newsLetterRoutes.js";


const app = express();

app.use(cors());
app.use(express.json());

// // verifySMTP();
// console.log("MAIL_USER:", process.env.MAIL_USER);
// console.log("MAIL_TO:", process.env.MAIL_TO);


const PORT = process.env.PORT || 3000;

// api endpoint
app.use("/api/contact", contactRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/newsletter", newsLetterRoutes);

app.listen(PORT, (req, res) => {
    console.log("server is running");
})

