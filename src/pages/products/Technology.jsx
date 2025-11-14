import React from 'react';
import { Box, Typography, Grid, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import images from '../../images/Imageholder';
import FFooter from '../FFooter';
import ReactModalImage from 'react-modal-image';
import SectionShapes from '../../components/SectionShapes';

const Technology = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('md'));

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const renderShapes = () => (
    <SectionShapes />
  );

  return (
    <Box sx={{ backgroundColor: 'var(--page-bg)', overflowX: 'hidden' }}>
      {/* ===== HERO SECTION ===== */}
      <Box
        sx={{
          position: 'relative',
          backgroundImage: 'url("/bg-tech-hero.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '95vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        <motion.img
          src={images.wpnewblack}
          alt="Logo"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ width: isSmall ? '60%' : '22%', marginBottom: '2rem', zIndex: 2 }}
        />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: isSmall ? '2.4rem' : '3.8rem',
            color: '#f5deb3',
            fontWeight: 700,
            textShadow: '0 4px 8px rgba(0,0,0,0.4)',
            zIndex: 2,
          }}
        >
          {t('technology')}
        </motion.h1>
      </Box>

      {/* ===== VIDEO SECTION ===== */}
      <Box
        component={motion.div}
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        sx={{
          position: 'relative',
          py: { xs: '6vh', md: '10vh' },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'var(--section-bg-1)',
          overflow: 'hidden',
        }}
      >
        {renderShapes()}
        <Box
          sx={{
            position: 'relative',
            width: isSmall ? '95%' : '70%',
            aspectRatio: '16/9',
            borderRadius: '1rem',
            overflow: 'hidden',
            boxShadow: '0 0 25px rgba(0,0,0,0.4)',
            zIndex: 2,

          }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/4vWkYQgP3D8?si=V66Cd2OhiW3CaU_i"
            title="Technology Overview"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ display: 'block' }}
          ></iframe>
        </Box>
      </Box>

      {/* ===== CONTENT SECTION 1 ===== */}
      <Box sx={{ position: 'relative', py: { xs: '6vh', md: '10vh' }, px: { xs: '5%', md: '10%' }, overflow: 'hidden', backgroundColor: 'var(--section-bg-1)', }}>
        {renderShapes()}
        <Grid
          container
          spacing={6}
          alignItems="center"
          justifyContent="center"
          direction={isSmall ? 'column' : 'row'}
          sx={{ position: 'relative', zIndex: 2 }}
        >
          <Grid item xs={12} md={6}>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Typography variant="h2" sx={{ fontWeight: 700, mb: 3, color: 'var(--heading-color)' }}>
                {t('how_it_works')}
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <ReactModalImage
                small={images.HowItWorks}
                large={images.HowItWorks}
                alt="How It Works"
                hideDownload={true}
                style={{
                  width: isSmall ? '85vw' : '100%',
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '1rem',
                  boxShadow: '0 0 15px rgba(0,0,0,0.3)',
                  zIndex: 2,
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Box>

      {/* ===== CONTENT SECTION 2 ===== */}
      <Box sx={{ position: 'relative', py: { xs: '6vh', md: '10vh' }, px: { xs: '5%', md: '10%' }, backgroundColor: 'var(--section-bg-1)', overflow: 'hidden' }}>
        {renderShapes()}
        <Grid
          container
          spacing={6}
          alignItems="center"
          justifyContent="center"
          direction={isSmall ? 'column-reverse' : 'row-reverse'}
          sx={{ position: 'relative', zIndex: 2 }}
        >
          <Grid item xs={12} md={6}>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <ReactModalImage
                small={images.slide4}
                large={images.slide4}
                alt="Product Presentation"
                hideDownload={true}
                style={{
                  width: isSmall ? '85vw' : '100%',
                  height: 'auto',
                  borderRadius: '1rem',
                  boxShadow: '0 0 15px rgba(0,0,0,0.3)',
                }}
              />
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'var(--card-text)' }}>
                <p>{t('molecular_disintegration')}</p>
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Box>

      {/* ===== CONTENT SECTION 3 ===== */}
      <Box sx={{ position: 'relative', py: { xs: '6vh', md: '10vh' }, px: { xs: '5%', md: '10%' }, overflow: 'hidden', backgroundColor: 'var(--section-bg-1)', }}>
        {renderShapes()}
        <Grid
          container
          spacing={6}
          alignItems="center"
          justifyContent="center"
          direction={isSmall ? 'column' : 'row'}
          sx={{ position: 'relative', zIndex: 2 }}
        >
          <Grid item xs={12} md={6}>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'var(--card-text)' }}>
                {t('high_temp_thermal_decomposition')}
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'var(--card-text)' }}>
                {t('benefits')}
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <ReactModalImage
                small={images.slide17}
                large={images.slide17}
                alt="The Process"
                hideDownload={true}
                style={{
                  width: isSmall ? '85vw' : '100%',
                  height: 'auto',
                  borderRadius: '1rem',
                  boxShadow: '0 0 15px rgba(0,0,0,0.3)',
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Box>

      {/* ===== FOOTER ===== */}
      <FFooter />
    </Box>
  );
};

export default Technology;
