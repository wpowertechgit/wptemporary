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
        sx={{
          maxWidth: '1200px',
          width: '100%',
          margin: 'auto',
          px: { xs: 2, md: 0 },
          '@media (min-width:2300px)': {
            maxWidth: '2160px',
          },
        }}
      >
        {/* Left: Contact info */}
        <Grid2
          size={{ xs: 12, md: 4 }}
          sx={{
            pl: { xs: 0, md: 20 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            textAlign: { xs: 'center', md: 'left' },
            '@media (min-width:2000px)': {
              fontSize: '2rem',
            },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: 'var(--footer-text)', fontWeight: 'bold', mb: '0.5rem', '@media (min-width:2000px)': {
                fontSize: '3rem',
              },
            }}
          >
            {t('contact_us')}
          </Typography>
          <Typography sx={{
            color: 'var(--footer-text)', mt: '0.25rem', '@media (min-width:2000px)': {
              fontSize: '3rem',
            },
          }}>
            SC Waste Powertech SRL
          </Typography>
          <Typography sx={{
            color: 'var(--footer-text)', mt: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', '@media (min-width:2000px)': {
              fontSize: '3rem',
            },
          }}>
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
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              '&:hover': { opacity: 1, color: 'var(--footer-link-hover)' }, '@media (min-width:2000px)': {
                fontSize: '3rem',
              },
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
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              '&:hover': { opacity: 1, color: 'var(--footer-link-hover)' }, '@media (min-width:2000px)': {
                fontSize: '3rem',
              },
            }}
          >
            <FaYoutube /> Waste Powertech
          </Link>
        </Grid2>

        {/* Center: Map */}
        <Grid2
          size={{ xs: 12, md: 4 }}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <PrivacyMap />
        </Grid2>

        {/* Right: Links */}
        <Grid2
          size={{ xs: 12, md: 4 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-end' },
            pr: { xs: 0, md: 8 },
            gap: '0.5rem',
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
              wordBreak: 'break-word',
              '@media (min-width:2000px)': {
                fontSize: '3rem',
              },
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
              opacity: 'var(--footer-opacity)',
              '&:hover': { opacity: 1, color: 'var(--footer-link-hover)' },
              wordBreak: 'break-word',
              '@media (min-width:2000px)': {
                fontSize: '3rem',
              },
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
              opacity: 'var(--footer-opacity)',
              '&:hover': { opacity: 1, color: 'var(--footer-link-hover)' },
              wordBreak: 'break-word',
              '@media (min-width:2000px)': {
                fontSize: '3rem',
              },
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
          maxWidth: '1200px',
          '@media (min-width:2000px)': {
            maxWidth: '2000px',
            fontSize: '2.4rem',
          },
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
          '@media (min-width:2000px)': {
            fontSize: '3rem',
          },
        }}
      >
        All rights reserved © 2026 Waste Powertech
      </Typography>
    </Box>
  );
};

export default FFooter;