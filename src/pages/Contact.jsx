import React from "react";
import { Box, Typography, Stack, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FaEnvelope, FaFacebook, FaYoutube } from "react-icons/fa";
import { TbTournament } from "react-icons/tb";
import { HiBuildingOffice2 } from "react-icons/hi2";
import images from "../images/Imageholder";
import ContactForm from "../components/ContactForm";
const Contact = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        paddingTop: "6vh",
        paddingBottom: "6vh",
        backgroundColor: "var(--contact-page-bg-color)",
        backgroundImage: "var(--contact-page-bg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* CONTAINER */}
      <Paper
        elevation={6}
        sx={{
          width: "95%",
          maxWidth: "1300px",
          padding: "3rem",
          borderRadius: "16px",
          backgroundColor: "var(--contact-box-bg)",
          color: "var(--contact-box-text)",
        }}
      >

        {/* LOGO CENTERED */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <img
            src={images.wpnewcolor}
            alt="WP Waste Powertech"
            style={{ width: "25rem", height: "auto" }}
          />
        </Box>

        {/* MAIN LAYOUT: STACK ON SM, ROW ON MD */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          sx={{
            columnGap: "3rem", // spacing between left & right
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >

          {/* LEFT SIDE -------------------------------- */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",     // center horizontally
              textAlign: "center",      // center text
            }}
          >
            {/* Title */}
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: "var(--contact-box-text)",
              }}
            >
              {t("contact")}
            </Typography>

            {/* Company Info */}
            <Stack spacing={2} sx={{ mb: 3, alignItems: "center" }}>
              <Typography sx={{ fontSize: "1.2rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <TbTournament /> SC Waste Powertech SRL
              </Typography>

              <Typography sx={{ fontSize: "1.2rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <HiBuildingOffice2 /> Ungheni 161/J, jud. Mureș
              </Typography>
            </Stack>

            {/* ISO Icons */}
            <Stack direction="row" spacing={2} sx={{ mb: 3, justifyContent: "center" }}>
              <img src={images.ISO_14001} alt="ISO 14001" style={{ width: "90px" }} />
              <img src={images.ISO_9001} alt="ISO 9001" style={{ width: "90px" }} />
            </Stack>

            {/* Contact Links */}
            <Stack spacing={1} sx={{ mb: 4, alignItems: "center" }}>
              <Typography sx={{ fontSize: "1.2rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <FaEnvelope /> office@wpowertech.ro
              </Typography>

              <a
                href="https://www.facebook.com/profile.php?id=61559358922953"
                style={{
                  color: "var(--contact-link)",
                  textDecoration: "none",
                  fontSize: "1.2rem",
                }}
              >
                <FaFacebook /> Waste Powertech SRL
              </a>

              <a
                href="https://www.youtube.com/@wastepowertech4213"
                style={{
                  color: "var(--contact-link)",
                  textDecoration: "none",
                  fontSize: "1.2rem",
                }}
              >
                <FaYoutube /> Waste Powertech
              </a>
            </Stack>
            {/* Contact Form Component */}
            <ContactForm />
          </Box>

          {/* RIGHT SIDE -------------------------------- */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 3,
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            {/* Office Image */}
            <img
              src={images.office}
              alt="Office"
              style={{ width: "100%", borderRadius: "12px" }}
            />

            {/* Google Maps */}
            <iframe
              title="office-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.446641685806!2d24.447727009582213!3d46.4751227644953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474bc71d28039119%3A0xd4ce147438af6822!2sWaste%20Powertech!5e0!3m2!1sen!2sro!4v1760514229976!5m2!1sen!2sro"
              loading="lazy"
              style={{
                width: "100%",
                height: "300px",
                border: 0,
                borderRadius: "12px",
              }}
            ></iframe>
          </Box>

        </Stack>
      </Paper>
    </Box>
  );
};

export default Contact;
