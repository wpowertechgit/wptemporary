import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowDropdown } from 'react-icons/io';
import { IoLanguage } from 'react-icons/io5';
import { MdLanguage } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import images from '../images/Imageholder';
import { Box, Stack, IconButton, Typography, Paper, MenuItem, Menu } from "@mui/material";
import './NavbarDesktop.css';

const NavbarDesktop = () => {
    const { t, i18n } = useTranslation();
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const [isHidden, setIsHidden] = useState(false);
    const [themeOpen, setThemeOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "default");
    const [themeAnchor, setThemeAnchor] = useState(null);

    const handleThemeClick = (event) => {
        setThemeAnchor(event.currentTarget);
    };

    const handleThemeClose = () => {
        setThemeAnchor(null);
    };
    const themeMenuOpen = Boolean(themeAnchor);

    // Apply theme attribute to <html>
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleDropdown = (index) => {
        setDropdownOpen(dropdownOpen === index ? null : index);
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    useEffect(() => {
        let lastScrollY = window.scrollY;
        const handleScroll = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 100) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }
            lastScrollY = window.scrollY;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handlePresentationClick = () => {
        const lang = i18n.language || 'en';
        const supported = ['de', 'fr', 'pl', 'ro', 'sp', 'tr'];
        const langKey = supported.includes(lang) ? lang : 'eng';
        const url = `/docs/prez_${langKey}.pdf`; // ✅ now points to public/docs/
        window.open(url, '_blank');
    };

    return (
        <nav className={`navbar ${isHidden ? 'hide' : ''}`}>
            <div className="logo">
                <Link to="/">
                    <img src={images.wpnewblack} alt="Logo" className='logo-black' />
                    <img src={images.wpnewwhite} alt="Logo" className='logo-white' />
                </Link>
            </div>

            <ul className="nav-links">
                <li className="dropdown" onClick={() => toggleDropdown(0)}>
                    <button type="button">{t('company')}<IoMdArrowDropdown style={{ width: '25px', height: '25px', flexShrink: 0 }} /></button>
                    <div className={`dropdown-content ${dropdownOpen === 0 ? 'show' : ''}`}>
                        <Link to="/company/sustainability"><button type="button">{t('sustainability')}</button></Link>
                        <Link to="/company/certificates"><button type="button">{t('certificates')}</button></Link>
                    </div>
                </li>

                <li className="dropdown" onClick={() => toggleDropdown(1)}>
                    <button type="button">{t('products')}<IoMdArrowDropdown style={{ width: '25px', height: '25px', flexShrink: 0 }} /></button>
                    <div className={`dropdown-content ${dropdownOpen === 1 ? 'show' : ''}`}>
                        <Link to="/products/technology"><button type="button">{t('technology')}</button></Link>
                        <Link to="/products/references"><button type="button">{t('references')}</button></Link>
                    </div>
                </li>

                <li className="dropdown" onClick={() => toggleDropdown(2)}>
                    <button type="button">{t('about-us')}<IoMdArrowDropdown style={{ width: '25px', height: '25px', flexShrink: 0 }} /></button>
                    <div className={`dropdown-content ${dropdownOpen === 2 ? 'show' : ''}`}>
                        <Link to="/about/news"><button type="button">{t('news')}</button></Link>
                        <Link to="/about/history"><button type="button">{t('history')}</button></Link>
                        <Link to="/about/team"><button type="button">{t('team')}</button></Link>
                    </div>
                </li>

                {/* ✅ Presentation Tab */}
                <li>
                    <button type="button" onClick={handlePresentationClick}>
                        {t('presentation')}
                    </button>
                </li>

                <li><Link to="/contact"><button type="button">{t('contact')}</button></Link></li>
            </ul>

            {/* Language Selector */}
            <div className="lang-container">
                <button type="button">
                    <IoLanguage /><MdLanguage />
                </button>
                <div className="lang-dropdown">
                    <button type="button" onClick={() => changeLanguage('en')}>
                        <img src={images.us} alt="English" />
                    </button>
                    <button type="button" onClick={() => changeLanguage('ro')}>
                        <img src={images.ro} alt="Romanian" />
                    </button>
                    <button type="button" onClick={() => changeLanguage('hu')}>
                        <img src={images.hu} alt="Hungarian" />
                    </button>
                    <button type="button" onClick={() => changeLanguage('de')}>
                        <img src={images.de} alt="German" />
                    </button>
                    <button type="button" onClick={() => changeLanguage('fr')}>
                        <img src={images.fr} alt="French" />
                    </button>
                    <button type="button" onClick={() => changeLanguage('it')}>
                        <img src={images.it} alt="Italian" />
                    </button>
                    <button type="button" onClick={() => changeLanguage('gr')}>
                        <img src={images.gr} alt="Greek" />
                    </button>
                    <button type="button" onClick={() => changeLanguage('tr')}>
                        <img src={images.tr} alt="Turkish" />
                    </button>
                    <button type="button" onClick={() => changeLanguage('zh')}>
                        <img src={images.zh} alt="Chinese" />
                    </button>
                    <button type="button" onClick={() => changeLanguage('es')}>
                        <img src={images.es} alt="Spanish" />
                    </button>
                    <button type="button" onClick={() => changeLanguage('pl')}>
                        <img src={images.pl} alt="Polish" />
                    </button>
                </div>
            </div>
            {/* Theme Selector */}
            <Box sx={{ ml: 2 }}>
                {/* CURRENT THEME BUTTON (click to open menu) */}
                <IconButton onClick={handleThemeClick}>
                    <Box sx={{
                        width: 26,
                        height: 26,
                        borderRadius: "50%",
                        border: "2px solid white",
                        background:
                            theme === "default"
                                ? "linear-gradient(90deg, #013d01 50%, #018a13 50%)"
                                : theme === "light"
                                    ? "linear-gradient(90deg, #ffffff 50%, #dcdcdc 50%)"
                                    : "linear-gradient(90deg, #000000 50%, #333333 50%)"
                    }} />
                </IconButton>

                {/* THEME MENU */}
                <Menu
                    anchorEl={themeAnchor}
                    open={themeMenuOpen}
                    onClose={handleThemeClose}
                    PaperProps={{
                        elevation: 6,
                        sx: {
                            backgroundColor: "var(--dropdown-bg)",
                            borderRadius: 2,
                            padding: "8px 12px"
                        }
                    }}
                    MenuListProps={{
                        sx: {
                            padding: 0
                        }
                    }}
                >

                    {/* Default */}
                    <MenuItem onClick={() => { setTheme("default"); handleThemeClose(); }}>
                        <Box sx={{
                            width: 20,
                            height: 20,
                            borderRadius: "50%",
                            background: "linear-gradient(90deg, #013d01 50%, #018a13 50%)",
                            mr: 1
                        }} />
                        <Typography sx={{ color: "var(--text-color)" }}>Default</Typography>
                    </MenuItem>

                    {/* Light */}
                    <MenuItem onClick={() => { setTheme("light"); handleThemeClose(); }}>
                        <Box sx={{
                            width: 20,
                            height: 20,
                            borderRadius: "50%",
                            background: "linear-gradient(90deg, #ffffff 50%, #cccccc 50%)",
                            mr: 1
                        }} />
                        <Typography sx={{ color: "var(--text-color)" }}>Light</Typography>
                    </MenuItem>

                    {/* Dark */}
                    <MenuItem onClick={() => { setTheme("dark"); handleThemeClose(); }}>
                        <Box sx={{
                            width: 20,
                            height: 20,
                            borderRadius: "50%",
                            background: "linear-gradient(90deg, #000000 50%, #333333 50%)",
                            mr: 1
                        }} />
                        <Typography sx={{ color: "var(--text-color)" }}>Dark</Typography>
                    </MenuItem>

                </Menu>
            </Box>
        </nav>
    );
};

export default NavbarDesktop;
