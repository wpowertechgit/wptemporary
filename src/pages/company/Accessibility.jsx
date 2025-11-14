import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { IoAccessibility } from "react-icons/io5";
import images from "../../images/Imageholder";
import FFooter from "../FFooter";
import SectionShapes from "../../components/SectionShapes";
const Accessibility = () => {
  const { t } = useTranslation();

  const renderShapes = () => (
    <SectionShapes />
  );
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f9f9f9",
        overflow: "hidden",
      }}
    >
      {/* Main content section */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          flexGrow: 1,
          pt: { xs: "8rem", md: "12rem" }, //  extra top padding for spacing under navbar
          pb: { xs: "7rem", md: "15rem" }, // enough room before footer
          backgroundColor: 'var(--section-bg-1)',
          textAlign: "center",
          boxShadow: "0 0 30px rgba(0,0,0,0.1)",
        }}
      >
        {renderShapes()}

        {/* Icon + logo */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            mb: 3,
          }}
        >
          <IoAccessibility size={'5rem'} color='var(--heading-color)' />
          <img
            src={images.wpnewcolor}
            alt="Waste Powertech Logo"
            style={{
              height: "8rem",
              width: "auto",
              display: "block",
            }}
          />
        </Box>

        {/* Text */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 2,
            color: "var(--heading-color)",
          }}
        >
          {t("accessibility_title")}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            opacity: 0.9,
            color: "var(--card-text)",
            maxWidth: "700px",
            margin: "0 auto",
            fontSize: "1.1rem",
            lineHeight: 1.6,
          }}
        >
          {t("accessibility_text")}
        </Typography>
      </Box>

      {/* Footer */}
      <FFooter />
    </Box>
  );
};

export default Accessibility;
