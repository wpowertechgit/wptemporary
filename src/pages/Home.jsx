/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n';
import { motion } from 'framer-motion';
import { Box, Typography, Button, Grid2 } from '@mui/material';
import FFooter from './FFooter';
import images from '../images/Imageholder';
import { useNewsData } from '../data/newsData';
import MainVideo from '../components/MainVideo';
import SectionShapes from '../components/SectionShapes';
const Home = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const allNews = useNewsData();
  const newsArray = allNews.slice(0, 3);

  return (
    <div style={{ width: '100%', overflowX: 'hidden', backgroundColor: 'var(--page-bg)' }}>
      {/* ---------- HERO SECTION ---------- */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '60vh', md: '100vh' },
          backgroundImage: `url(${images.wpstatie})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: { xs: 'center', md: 'space-between' },
          padding: { xs: '30vh 5%', md: '0 10%' },
          color: 'white',
          overflow: 'hidden',
        }}
      >
        {/* Dark gradient overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.8) 100%)',
            zIndex: 0,
          }}
        />

        {/* Mobile-first: Logo first, text after */}
        <motion.img
          src={images.wpnewcolor}
          alt={t('homepage_logo_alt')}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          style={{
            width: isMobile ? '70vw' : '45vw',
            maxWidth: 'none',
            height: 'auto',
            zIndex: 1,
            objectFit: 'contain',
            order: isMobile ? -1 : 1,
          }}
        />

        {/* Left text block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          style={{
            flex: 1,
            zIndex: 2,
            backgroundColor: 'rgba(0,0,0,0.5)',
            padding: isMobile ? '4vw' : '3rem',
            borderRadius: '1rem',
            maxWidth: '35rem',
            order: isMobile ? 2 : 0,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              lineHeight: 1.2,
              fontSize: { xs: '2rem', md: '2.8rem' },
              '@media (min-width:2160px)': {
                fontSize: '1.8rem',

              }, maxWidth: { xs: '100%', md: '35rem', xl: '32rem' },
            }}
          >
            {t('homepage_title')}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              marginTop: '1rem',
              color: '#ddd',
              lineHeight: 1.5,
              fontWeight: 300,
              fontSize: { xs: '1rem', md: '1.2rem' }, '@media (min-width:2160px)': {
                fontSize: '0.95rem',
              },
            }}
          >
            {t('homepage_subtitle')}
          </Typography>
        </motion.div>
      </Box>

      {/* ---------- INTRO VIDEO SECTION ---------- */}
      <Box
        sx={{
          backgroundColor: 'var(--section-bg-1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: { xs: '8vh 5%', md: '10vh 10%' },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <SectionShapes />

        <Typography
          component={motion.h3}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          variant="h3"
          sx={{
            fontWeight: 700,
            color: 'var(--heading-color)',
            marginBottom: '2rem',
            textAlign: 'center',
            zIndex: 1,
          }}
        >
          {t('homepage_intro')}
        </Typography>

        <MainVideo />
      </Box>

      {/* ---------- TECHNOLOGY SECTION ---------- */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          minHeight: { xs: '45vh', md: '55vh' },
          backgroundColor: 'var(--tech-bg)',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: { xs: '6vh 5%', md: '6vh 10%' },
          overflow: 'hidden',
        }}
      >
        <SectionShapes />

        {/* --- Content --- */}
        <Box
          sx={{
            flex: 1,
            zIndex: 2,
            padding: { xs: 0, md: '3rem' }, // no padding on mobile, same 3rem on desktop
            maxWidth: { xs: '100%', md: '25rem' },
            textAlign: { xs: 'center', md: 'left' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            justifyContent: 'center',
          }}
        >
          <Typography
            component={motion.h3}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            variant="h3"
            sx={{
              fontWeight: 700,
              color: 'var(--tech-title)',
              marginBottom: '1rem',
              fontSize: { xs: '2rem', md: '2.6rem' },
              px: { xs: '1rem', md: 0 }, // small horizontal padding for mobile text
            }}
          >
            {t('technology')}
          </Typography>

          <Typography
            component={motion.p}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            variant="body1"
            sx={{
              color: 'var(--tech-text)',
              fontSize: { xs: '1rem', md: '1.2rem' },
              lineHeight: 1.7,
              maxWidth: { xs: '90%', md: '38rem' },
              px: { xs: '1rem', md: 0 },
            }}
          >
            {t('learn_more_desc')}
          </Typography>

          <Button
            variant="contained"
            color="primary"
            href="/products/technology"
            sx={{
              marginTop: '2rem',
              padding: '1rem 2rem',
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: '0.5rem',
              backgroundColor: 'var(--tech-btn-bg)',
              '&:hover': { backgroundColor: 'var(--tech-btn-bg-hover)' },
            }}
          >
            {t('learn_more')}
          </Button>
        </Box>

        {/* --- Centered Video --- */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: { xs: '120%', md: '45rem' },
          }}
        >
          <Box
            sx={{
              width: { xs: '100%', md: '45rem' },
              aspectRatio: '16/9',
              borderRadius: '1rem',
              overflow: 'hidden',
              background: 'var(--page-bg)',
              boxShadow: '0 0 20px rgba(255,255,255,0.2), 0 0 40px rgba(0,0,0,0.4)',
              zIndex: 2,
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube-nocookie.com/embed/p8VD26dwU14?si=LXVS9aIcTAND8aRg"
              title="Technology Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{
                borderRadius: '0.75rem',
                display: 'block',
              }}
            ></iframe>
          </Box>
        </motion.div>
      </Box>
      {/* ---------- LATEST NEWS SECTION ---------- */}
      <Box
        sx={{
          padding: { xs: '8vh 5%', md: '10vh 10%' },
          backgroundColor: 'var(--card-bg)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          zIndex: 0, // keep base layer low
        }}
      >
        <SectionShapes />

        {/* --- CONTENT WRAPPER (forces stacking order) --- */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 5, // ensures everything inside is above triangles
          }}
        >
          <Typography
            variant="h3"
            sx={{
              padding: '3rem',
              fontWeight: 700,
              marginBottom: '3rem',
              color: 'var(--heading-color)',
            }}
          >
            {t('latest_news')}
          </Typography>

          <Grid2 container spacing={4} justifyContent="center" sx={{
            marginBottom: '4rem', '@media (min-width:2560px)': {
              gap: '2rem',
            },
          }}>
            {newsArray.map((newsItem, index) => (
              <Grid2
                key={index}
                component={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true, amount: 0.3 }}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: 'var(--card-bg)',
                  padding: '1rem',
                  border: `1px solid var(--card-border)`,
                  borderRadius: '0.8rem',
                  boxShadow: `0 0.5rem 1rem var(--card-shadow)`,
                  maxWidth: '22rem',
                  '@media (min-width:1920px)': {
                    maxWidth: '20rem',
                  },
                  '@media (min-width:2560px)': {
                    maxWidth: '18rem', // fits 3 in a row perfectly
                    padding: '0.8rem',
                  },
                  '&:hover': { transform: `scale(var(--card-hover-scale))` },
                  transition: 'all 0.3s ease',
                }}
              >
                <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', color: 'var(--card-text)' }}>
                    {newsItem.title}
                  </Typography>
                  <Box
                    sx={{
                      width: '100%',
                      borderBottom: '0.2rem solid var(--btn-primary-bg)',
                      margin: '1rem 0',
                    }}
                  />
                  <Typography variant="body1" sx={{ textAlign: 'center', color: 'var(--card-text)' }}>
                    {newsItem.paragraph}
                  </Typography>
                  <Box
                    component="img"
                    src={newsItem.image}
                    alt="News Image"
                    sx={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '0.8rem',
                      marginTop: '1rem',
                    }}
                  />
                </Box>

                <Button
                  variant="contained"
                  color="primary"
                  href={newsItem.link}
                  sx={{
                    marginTop: 'auto',
                    marginBottom: '0.5rem',
                    width: '100%',
                    borderRadius: '0.5rem',
                    backgroundColor: 'var(--btn-primary-bg)',
                    '&:hover': {
                      backgroundColor: 'var(--btn-primary-bg-hover)',
                      boxShadow: `0 0.7rem 1.4rem var(--btn-primary-shadow-hover)`,
                    },
                  }}
                >
                  {t('learn_more')}
                </Button>
              </Grid2>
            ))}
          </Grid2>
          <Button
            variant="contained"
            color="primary"
            href="/about/news"
            sx={{
              padding: '1rem 2.5rem',
              fontWeight: 600,
              fontSize: '1rem',
              borderRadius: '0.5rem',
              backgroundColor: 'var(--btn-primary-bg)',
              color: 'var(--btn-primary-text)',
              textTransform: 'none',
              boxShadow: `0 0.5rem 1.2rem var(--btn-primary-shadow)`,
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'var(--btn-primary-bg-hover)',
                boxShadow: `0 0.7rem 1.4rem var(--btn-primary-shadow-hover)`,
              },
            }}
          >
            {t('more_news')}
          </Button>
        </Box>
      </Box>

      {/* ---------- FOOTER ---------- */}
      <FFooter />
    </div>
  );
};

export default Home;
