import React from 'react';
import { Box, Typography, Grid2, Link } from '@mui/material';
import { FaEnvelope, FaFacebook, FaYoutube } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import PrivacyMap from '../components/PrivacyMap';

const FFooter = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        backgroundColor: 'var(--footer-bg)',
        color: 'var(--footer-text)',
        width: '100%',
        py: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid2
        container
        spacing={4}
        justifyContent={{ xs: 'center', md: 'space-between' }}
        alignItems="center"
        sx={{
          maxWidth: '1200px',
          width: '100%',
          margin: 'auto',
          px: { xs: 2, md: 0 },
          textAlign: { xs: 'center', md: 'left' },
          flexDirection: { xs: 'column', md: 'row' }, //
        }}
      >
        {/* Left: Contact info */}
        <Grid2
          item
          xs={12}
          md={4}
          sx={{
            pl: { xs: 0, md: 20 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            textAlign: { xs: 'center', md: 'left' },
            mb: { xs: 2, md: 0 },
          }}
        >
          <Typography
            variant="h5"
            sx={{ color: 'var(--footer-text)', fontWeight: 'bold', mb: '0.5rem' }}
          >
            {t('contact_us')}
          </Typography>
          <Typography sx={{ color: 'var(--footer-text)', mt: '0.25rem' }}>
            SC Waste Powertech SRL
          </Typography>
          <Typography sx={{ color: 'var(--footer-text)', mt: '0.25rem' }}>
            <FaEnvelope /> office@wpowertech.ro
          </Typography>
          <Link
            href="https://www.facebook.com/profile.php?id=61559358922953"
            sx={{
              color: 'var(--footer-text)',
              mt: '0.25rem',
              fontSize: '1rem',
              textDecoration: 'none',
              opacity: 'var(--footer-opacity)',
              '&:hover': { opacity: 1, color: 'var(--footer-link-hover)' },
            }}
          >
            <FaFacebook /> Waste Powertech SRL
          </Link>
          <Link
            href="https://www.youtube.com/@wastepowertech4213"
            sx={{
              color: 'var(--footer-text)',
              mt: '0.25rem',
              fontSize: '1rem',
              textDecoration: 'none',
              opacity: 'var(--footer-opacity)',
              '&:hover': { opacity: 1, color: 'var(--footer-link-hover)' },
            }}
          >
            <FaYoutube /> Waste Powertech
          </Link>
        </Grid2>

        {/* Center: Map */}
        <Grid2
          item
          xs={12}
          md={4}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mb: { xs: 2, md: 0 },
          }}
        >
          <PrivacyMap />
        </Grid2>

        {/* Right: Links */}
        <Grid2
          item
          xs={12}
          md={4}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-end' },
            pr: { xs: 0, md: 8 },
          }}
        >
          <Link
            href="/accessibility"
            sx={{
              color: 'var(--footer-text)',
              fontSize: '1rem',
              textAlign: { xs: 'center', md: 'right' },
              textDecoration: 'none',
              opacity: 'var(--footer-opacity)',
              '&:hover': { opacity: 1, color: 'var(--footer-link-hover)' },
            }}
          >
            {t('accessibility_title')}
          </Link>

          <Link
            href="/privacy"
            sx={{
              color: 'var(--footer-text)',
              fontSize: '1rem',
              textAlign: { xs: 'center', md: 'right' },
              textDecoration: 'none',
              mt: 0.5,
              opacity: 'var(--footer-opacity)',
              '&:hover': { opacity: 1, color: 'var(--footer-link-hover)' },
            }}
          >
            {t('privacy_policy_title')}
          </Link>

          <Link
            href="/terms"
            sx={{
              color: 'var(--footer-text)',
              textAlign: { xs: 'center', md: 'right' },
              fontSize: '1rem',
              textDecoration: 'none',
              mt: 0.5,
              opacity: 'var(--footer-opacity)',
              '&:hover': { opacity: 1, color: 'var(--footer-link-hover)' },
            }}
          >
            {t('terms_of_use_title')}
          </Link>
        </Grid2>
      </Grid2>

      {/* Cookie disclaimer */}
      <Typography
        variant="caption"
        sx={{
          color: 'var(--footer-text)',
          textAlign: 'center',
          opacity: 'var(--footer-opacity)',
          mt: 2,
          fontSize: '0.85rem',
          px: 2,
        }}
      >
        {t('cookies')}
      </Typography>
      <Typography
        variant="caption"
        sx={{
          color: 'var(--footer-text)',
          textAlign: 'center',
          opacity: 'var(--footer-opacity)',
          mt: 2,
          fontSize: '0.85rem',
          px: 2,
        }}
      >
        All rights reserved © 2025 Waste Powertech
      </Typography>
    </Box>
  );
};

export default FFooter;
