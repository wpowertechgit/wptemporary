import React, { useEffect, useState } from 'react';
import NavbarDesktop from '../components/NavbarDesktop';
import NavbarMobile from '../components/NavbarMobile';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import CookieNotice from '../components/CookieNotice';
const Layout = ({ children }) => {
    const isMobile = useMediaQuery('(max-width: 900px)');
    return (
        <div className="layout">
            <header>
                {isMobile ? <NavbarMobile /> : <NavbarDesktop />}
            </header>

            <main>{children}</main>
            {/* <CookieNotice /> */}
        </div>
    );
};

export default Layout;
