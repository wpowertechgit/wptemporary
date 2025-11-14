// src/components/CookieNotice.jsx
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const CookieNotice = () => {
    const { t } = useTranslation();
    const [showCookie, setShowCookie] = useState(false);

    useEffect(() => {
        const accepted = localStorage.getItem('cookieConsent');
        if (!accepted) {
            setShowCookie(true);
            const timer = setTimeout(() => setShowCookie(false), 10000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleChoice = (choice) => {
        localStorage.setItem('cookieConsent', choice);
        setShowCookie(false);
    };

    if (!showCookie) return null;

    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '9999px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                boxShadow: '0 0 10px rgba(0,0,0,0.3)',
                zIndex: 9999,
                fontSize: '0.9rem',
            }}
        >
            <Typography variant="body2" sx={{ color: 'white' }}>
                {t('cookie_message')}
            </Typography>
            <Button
                size="small"
                variant="contained"
                sx={{
                    backgroundColor: '#00c46b',
                    color: 'white',
                    '&:hover': { backgroundColor: '#00a85c' },
                    textTransform: 'none',
                }}
                onClick={() => handleChoice('accepted')}
            >
                {t('cookie_accept')}
            </Button>
            <Button
                size="small"
                variant="outlined"
                sx={{
                    color: 'white',
                    borderColor: 'white',
                    textTransform: 'none',
                    '&:hover': { borderColor: '#ccc', backgroundColor: 'rgba(255,255,255,0.1)' },
                }}
                onClick={() => handleChoice('rejected')}
            >
                {t('cookie_reject')}
            </Button>
        </Box>
    );
};

export default CookieNotice;
