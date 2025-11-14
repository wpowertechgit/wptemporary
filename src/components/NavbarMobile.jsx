import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  IconButton,
} from '@mui/material';

import { IoMdClose } from 'react-icons/io';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { IoLanguage } from 'react-icons/io5';
import { MdLanguage } from 'react-icons/md';

import { BsBuildingsFill } from "react-icons/bs";
import { BiSolidFactory } from "react-icons/bi";
import { FaUsers, FaPhone, FaChevronUp, FaChevronDown, FaFilePdf } from "react-icons/fa";

import { useTranslation } from 'react-i18next';
import images from '../images/Imageholder';

const NavbarMobile = () => {
  const { t, i18n } = useTranslation();

  // ===== STATE =====
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageDrawerOpen, setLanguageDrawerOpen] = useState(false);
  const [themeDrawerOpen, setThemeDrawerOpen] = useState(false);
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "default");

  // ===== THEME PALETTE (INLINE ONLY) =====
  const themePalette = {
    default: {
      navbarBg: "#013d01",
      drawerBg: "#018a13",
      text: "#ffffff",
      divider: "rgba(255,255,255,0.3)",
      icon: "#ffffff",
      buttonBg: "#007a33",
      buttonHover: "#00a645",
    },
    light: {
      navbarBg: "#ffffff",
      drawerBg: "#f5f5f5",
      text: "#111111",
      divider: "rgba(0,0,0,0.2)",
      icon: "#000000",
      buttonBg: "#e0e0e0",
      buttonHover: "#d0d0d0",
    },
    dark: {
      navbarBg: "#000000",
      drawerBg: "#111111",
      text: "#ffffff",
      divider: "rgba(255,255,255,0.2)",
      icon: "#ffffff",
      buttonBg: "#222222",
      buttonHover: "#444444",
    }
  };

  // ===== APPLY THEME =====
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // ===== HANDLERS =====
  const toggleDrawer = () => setMenuOpen(!menuOpen);
  const toggleLanguageDrawer = () => setLanguageDrawerOpen(!languageDrawerOpen);
  const toggleThemeDrawer = () => setThemeDrawerOpen(!themeDrawerOpen);
  const toggleNavbarCollapse = () => setIsNavbarCollapsed(!isNavbarCollapsed);

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    setLanguageDrawerOpen(false);
  };

  const handlePresentationClick = () => {
    const lang = i18n.language || 'en';
    const supported = ['de', 'fr', 'pl', 'ro', 'sp', 'tr'];
    const langKey = supported.includes(lang) ? lang : 'eng';
    const url = `/docs/prez_${langKey}.pdf`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* ===== TOP BAR ===== */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: themePalette[theme].navbarBg,
          color: themePalette[theme].text,
          padding: '1rem 1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          transform: isNavbarCollapsed ? 'translateY(-100%)' : 'translateY(0)',
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        {/* Logo */}
        <Link to="/">
          <img
            src={theme === "light" ? images.wpnewblack : images.wpnewwhite}
            alt="Logo"
            style={{ height: '60px' }}
          />
        </Link>

        {/* Language Button */}
        <IconButton onClick={toggleLanguageDrawer} sx={{ color: themePalette[theme].icon }}>
          <IoLanguage />
          <MdLanguage />
        </IconButton>

        {/* Theme Button */}
        <IconButton onClick={toggleThemeDrawer} sx={{ color: themePalette[theme].icon }}>
          <Box sx={{
            width: 26,
            height: 26,
            borderRadius: "50%",
            border: `2px solid ${themePalette[theme].icon}`,
            background:
              theme === "default"
                ? "linear-gradient(90deg, #013d01 50%, #018a13 50%)"
                : theme === "light"
                  ? "linear-gradient(90deg, #ffffff 50%, #dcdcdc 50%)"
                  : "linear-gradient(90deg, #000000 50%, #333333 50%)"
          }} />
        </IconButton>

        {/* Menu Button */}
        <IconButton color="inherit" edge="end" onClick={toggleDrawer}>
          {menuOpen ? <IoMdClose /> : <HiOutlineBars3 />}
        </IconButton>
      </Box>

      {/* ===== COLLAPSE TOGGLE ===== */}
      <IconButton
        onClick={toggleNavbarCollapse}
        sx={{
          position: 'fixed',
          top: isNavbarCollapsed ? '10px' : '80px',
          right: '10px',
          zIndex: 1001,
          backgroundColor: themePalette[theme].drawerBg,
          color: themePalette[theme].text,
          width: '40px',
          height: '40px',
          transition: 'top 0.3s ease-in-out',
          '&:hover': { backgroundColor: themePalette[theme].buttonHover }
        }}
      >
        {isNavbarCollapsed ? <FaChevronDown /> : <FaChevronUp />}
      </IconButton>

      {/* ===== LANGUAGE DRAWER ===== */}
      <Drawer anchor="left" open={languageDrawerOpen} onClose={toggleLanguageDrawer}
        PaperProps={{
          sx: {
            height: "100%",
            background: themePalette[theme].drawerBg
          }
        }}>
        <Box sx={{ width: "250px", padding: "1rem" }}>
          <List>
            {[
              ['en', images.us, 'English'],
              ['ro', images.ro, 'Română'],
              ['hu', images.hu, 'Magyar'],
              ['de', images.de, 'Deutsch'],
              ['fr', images.fr, 'Français'],
              ['it', images.it, 'Italiano'],
              ['gr', images.gr, 'Ελληνικά'],
              ['tr', images.tr, 'Türkçe'],
              ['zh', images.zh, '中文'],
              ['es', images.es, 'Español'],
              ['pl', images.pl, 'Polska']
            ].map(([code, flag, label], i) => (
              <React.Fragment key={code}>
                <ListItem button onClick={() => handleLanguageChange(code)}>
                  <ListItemButton sx={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src={flag}
                      alt={label}
                      style={{
                        width: '10vw',
                        height: 'auto',
                        marginRight: '10px'
                      }}
                    />
                    <span style={{ color: themePalette[theme].text }}>{label}</span>
                  </ListItemButton>
                </ListItem>

                {/* Divider except for last item */}
                {i !== 10 && <Divider sx={{ borderColor: themePalette[theme].divider, marginBottom: '8px' }} />}
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* ===== THEME DRAWER ===== */}
      <Drawer
        anchor="left"
        open={themeDrawerOpen}
        onClose={toggleThemeDrawer}
        PaperProps={{
          sx: {
            height: "100%",
            background: themePalette[theme].drawerBg
          }
        }}
      >
        <Box sx={{ width: "250px", padding: "1rem" }}>
          <List>

            {/* Default */}
            <ListItem button onClick={() => { setTheme("default"); toggleThemeDrawer(); }}>
              <ListItemButton sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  background: "linear-gradient(90deg, #013d01 50%, #018a13 50%)",
                  marginRight: "12px"
                }} />
                <ListItemText primary="Default" sx={{ color: themePalette[theme].text }} />
              </ListItemButton>
            </ListItem>
            <Divider sx={{ borderColor: themePalette[theme].divider, marginBottom: '8px' }} />

            {/* Light */}
            <ListItem button onClick={() => { setTheme("light"); toggleThemeDrawer(); }}>
              <ListItemButton sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  background: "linear-gradient(90deg, #ffffff 50%, #cccccc 50%)",
                  marginRight: "12px"
                }} />
                <ListItemText primary="Light" sx={{ color: themePalette[theme].text }} />
              </ListItemButton>
            </ListItem>
            <Divider sx={{ borderColor: themePalette[theme].divider, marginBottom: '8px' }} />

            {/* Dark */}
            <ListItem button onClick={() => { setTheme("dark"); toggleThemeDrawer(); }}>
              <ListItemButton sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  background: "linear-gradient(90deg, #000000 50%, #333333 50%)",
                  marginRight: "12px"
                }} />
                <ListItemText primary="Dark" sx={{ color: themePalette[theme].text }} />
              </ListItemButton>
            </ListItem>

          </List>
        </Box>
      </Drawer>

      {/* ===== MAIN MENU DRAWER ===== */}
      <Drawer anchor="right" open={menuOpen} onClose={toggleDrawer} PaperProps={{
        sx: {
          height: "100%",
          background: themePalette[theme].drawerBg
        }
      }}>
        <Box sx={{ width: "250px", padding: "1rem", color: themePalette[theme].text }}>
          <List>

            {/* Sustainability */}
            <ListItem component={Link} to="/company/sustainability" sx={{ textDecoration: 'none', color: themePalette[theme].text }}>
              <ListItemButton sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <BsBuildingsFill />
                <ListItemText primary={t("sustainability")} />
              </ListItemButton>
            </ListItem>
            <Divider sx={{ borderColor: themePalette[theme].divider, marginBottom: '8px' }} />

            {/* Certificates */}
            <ListItem component={Link} to="/company/certificates" sx={{ textDecoration: 'none', color: themePalette[theme].text }}>
              <ListItemButton>
                <ListItemText primary={t("certificates")} />
              </ListItemButton>
            </ListItem>

            <Divider sx={{ borderColor: themePalette[theme].divider, marginBottom: '8px' }} />

            {/* Technology */}
            <ListItem component={Link} to="/products/technology" sx={{ textDecoration: 'none', color: themePalette[theme].text }}>
              <ListItemButton sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <BiSolidFactory />
                <ListItemText primary={t("technology")} />
              </ListItemButton>
            </ListItem>

            <Divider sx={{ borderColor: themePalette[theme].divider, marginBottom: '8px' }} />

            {/* References */}
            <ListItem component={Link} to="/products/references" sx={{ textDecoration: 'none', color: themePalette[theme].text }}>
              <ListItemButton>
                <ListItemText primary={t("references")} />
              </ListItemButton>
            </ListItem>

            <Divider sx={{ borderColor: themePalette[theme].divider, marginBottom: '8px' }} />

            {/* News */}
            <ListItem component={Link} to="/about/news" sx={{ textDecoration: 'none', color: themePalette[theme].text }}>
              <ListItemButton sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FaUsers />
                <ListItemText primary={t("news")} />
              </ListItemButton>
            </ListItem>

            <Divider sx={{ borderColor: themePalette[theme].divider, marginBottom: '8px' }} />

            {/* History */}
            <ListItem component={Link} to="/about/history" sx={{ textDecoration: 'none', color: themePalette[theme].text }}>
              <ListItemButton>
                <ListItemText primary={t("history")} />
              </ListItemButton>
            </ListItem>

            <Divider sx={{ borderColor: themePalette[theme].divider, marginBottom: '8px' }} />

            {/* Team */}
            <ListItem component={Link} to="/about/team" sx={{ textDecoration: 'none', color: themePalette[theme].text }}>
              <ListItemButton>
                <ListItemText primary={t("team")} />
              </ListItemButton>
            </ListItem>

            <Divider sx={{ borderColor: themePalette[theme].divider, marginBottom: '8px' }} />

            {/* Contact */}
            <ListItem component={Link} to="/contact" sx={{ textDecoration: 'none', color: themePalette[theme].text }}>
              <ListItemButton sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FaPhone />
                <ListItemText primary={t("contact")} />
              </ListItemButton>
            </ListItem>

            <Divider sx={{ borderColor: themePalette[theme].divider, margin: '12px 0' }} />

            {/* Presentation Button */}
            <ListItem sx={{ paddingLeft: 0 }}>
              <ListItemButton
                onClick={handlePresentationClick}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: themePalette[theme].buttonBg,
                  color: themePalette[theme].text,
                  borderRadius: '6px',
                  '&:hover': { backgroundColor: themePalette[theme].buttonHover },
                }}
              >
                <FaFilePdf />
                <ListItemText primary={t("presentation")} />
              </ListItemButton>
            </ListItem>

          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default NavbarMobile;
