const nodemailer = require("nodemailer");
const headers = {
    "Access-Control-Allow-Origin": "https://wpowertech.ro",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
};
let rateLimitCache = {};
exports.handler = async (event) => {
    if (event.httpMethod === "OPTIONS") {
        return {
            statusCode: 200,
            headers,
            body: "OK"
        };
    }
    try {
        const ip = event.headers["x-nf-client-connection-ip"];
        const now = Date.now();
        const body = JSON.parse(event.body);
        const { name, email, message, bot } = body;

        // ------ HONEYPOT ------
        if (bot) {
            return {
                statusCode: 400,
                headers,
                body: "Bot detected"
            };
        }

        // ------ SERVER RATE LIMIT (100 seconds / IP) ------
        if (rateLimitCache[ip] && now - rateLimitCache[ip] < 100000) {
            return {
                statusCode: 429,
                body: "Too many requests"
            };
        }
        rateLimitCache[ip] = now;

        // ------ MESSAGE CHECK ------
        if (!message || message.length < 5) {
            return {
                statusCode: 400,
                body: "Message too short"
            };
        }

        // ------ BAD WORDS CHECK ------
        const badWords = ["viagra", "casino", "porn", "sex", "nigger", "kys", "faggot", "xxx", "cazino", "pula", "sugeti"
        ];
        if (badWords.some(w => message.toLowerCase().includes(w))) {
            return {
                statusCode: 400,
                body: "Spam rejected"
            };
        }

        // ------ SEND EMAIL ------
        const transporter = nodemailer.createTransport({
            host: "mail.wpowertech.ro",
            port: 465,
            secure: true,
            auth: {
                user: "noreply@wpowertech.ro",
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: "noreply@wpowertech.ro",
            to: "office@wpowertech.ro",
            subject: `Contact form: ${email}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            replyTo: email,
        });

        return { statusCode: 200, headers, body: "Email sent" };

    } catch (err) {
        return { statusCode: 500, headers, body: "Error: " + err.message };
    }
};