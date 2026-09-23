import express from "express";
import { client } from "@repo/db/config";

const app = express();
const PORT = Number(process.env.PORT || 3003);

app.use(express.json());

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await client.user.create({
        data: {
            username,
            password,
        },
    });

    res.json({
        message: "you have signup",
        id: user.id,
    });
});

app.get("/test", (req, res) => {
    res.send("hello");
});

app.listen(PORT, () => {
    console.log(`HTTP server running on http://localhost:${PORT}`);
});