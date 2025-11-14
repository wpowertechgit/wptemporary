import React, { useRef, useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
const ContactForm = () => {
    const formRef = useRef();
    const [status, setStatus] = useState(null);

    // Strong email regex
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    const sendEmail = async (e) => {
        e.preventDefault();
        setStatus(null);

        const email = formRef.current.user_email.value.trim();
        const message = formRef.current.message.value.trim();
        const name = formRef.current.user_name.value.trim();

        // -------- VALIDATION --------
        if (!emailRegex.test(email)) {
            setStatus("invalid");
            return;
        }
        if (!message || message.length < 5) {
            setStatus("empty");
            return;
        }

        // -------- ANTI-SPAM --------
        const now = Date.now();
        const cooldownMs = 60000; // 1 minute
        const lastSend = localStorage.getItem("last_send_time");
        const sentCount = Number(localStorage.getItem("hourly_count")) || 0;

        const hourAgo = now - 3600 * 1000;
        if (!lastSend || lastSend < hourAgo) {
            localStorage.setItem("hourly_count", 0);
        }

        if (lastSend && now - lastSend < cooldownMs) {
            setStatus("cooldown");
            return;
        }

        if (sentCount >= 5) {
            setStatus("limit");
            return;
        }

        // -------- SEND EMAIL via Netlify Function --------
        try {
            const res = await fetch("https://67wptechdeploy.netlify.app/.netlify/functions/sendEmail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                    bot: formRef.current.bot_field.value // <- honeypot
                })
            });
            if (res.ok) {
                setStatus("success");
                localStorage.setItem("last_send_time", now);
                localStorage.setItem("hourly_count", sentCount + 1);
                formRef.current.reset();
            } else {
                setStatus("error");
            }

        } catch (error) {
            console.error("Netlify function error:", error);
            setStatus("error");
        }
    };

    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: "600px",
                backgroundColor: "var(--contact-box-bg)",
                color: "var(--contact-box-text)",
                padding: "2rem",
                borderRadius: "10px",
                boxShadow: "0 0 20px rgba(0,0,0,0.1)",
                marginTop: "2rem",
            }}
        >
            <Typography
                variant="h4"
                sx={{ mb: 2, fontWeight: 700, color: "var(--contact-box-text)" }}
            >
                Contact Form
            </Typography>

            <form ref={formRef} onSubmit={sendEmail}>
                <input
                    type="text"
                    name="bot_field"
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                />
                <TextField
                    fullWidth
                    label="Your Name"
                    name="user_name"
                    variant="outlined"
                    sx={{ mb: 2 }}
                    InputProps={{
                        style: { color: "var(--contact-box-text)" },
                    }}
                />

                <TextField
                    fullWidth
                    label="Your Email"
                    name="user_email"
                    type="email"
                    required
                    variant="outlined"
                    sx={{ mb: 2 }}
                    InputProps={{
                        style: { color: "var(--contact-box-text)" },
                    }}
                />

                <TextField
                    fullWidth
                    label="Your Message"
                    name="message"
                    multiline
                    rows={5}
                    required
                    variant="outlined"
                    sx={{ mb: 2 }}
                    InputProps={{
                        style: { color: "var(--contact-box-text)" },
                    }}
                />

                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                        backgroundColor: "var(--contact-accent)",
                        color: "white",
                        "&:hover": {
                            backgroundColor: "#006b0f",
                        },
                    }}
                >
                    Send Message
                </Button>
            </form>

            {/* ---------- STATUS MESSAGES ---------- */}
            <AnimatePresence mode="wait">
                {status === "success" && (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.6 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            marginTop: "15px",
                            color: "green",
                            fontWeight: "600",
                            fontSize: "1.1rem"
                        }}
                    >
                        ✅ Message sent successfully!
                    </motion.div>
                )}

                {status === "error" && (
                    <motion.div
                        key="error"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            marginTop: "15px",
                            color: "red",
                            fontWeight: "600",
                        }}
                    >
                        ❌ Something went wrong. Try again later.
                    </motion.div>
                )}

                {status === "invalid" && (
                    <motion.div
                        key="invalid"
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ marginTop: "15px", color: "red" }}
                    >
                        ⚠️ Please enter a valid email.
                    </motion.div>
                )}

                {status === "empty" && (
                    <motion.div
                        key="empty"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ marginTop: "15px", color: "red" }}
                    >
                        ⚠️ Message cannot be empty.
                    </motion.div>
                )}

                {status === "cooldown" && (
                    <motion.div
                        key="cooldown"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ marginTop: "15px", color: "orange" }}
                    >
                        ⏳ Cool down! You can send a message every 60 seconds.
                    </motion.div>
                )}

                {status === "limit" && (
                    <motion.div
                        key="limit"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ marginTop: "15px", color: "orange" }}
                    >
                        🚫 You reached the hourly limit (5 messages). Try again later.
                    </motion.div>
                )}
            </AnimatePresence>

        </Box>
    );
};

export default ContactForm;
