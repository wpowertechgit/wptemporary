import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import FFooter from '../FFooter';
import images from '../../images/Imageholder';
import SectionShapes from '../../components/SectionShapes';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

// ✅ your shapes exactly as before
const renderShapes = () => (
  <SectionShapes />
);

const Sustainability = () => {
  const { t } = useTranslation();

  // Alternating compact sections
  const sections = [
    {
      key: 'sust-new-1',
      side: 'left',
      image: images.sustainillustration1,
      title: t('sust-15'),
      paragraphs: [t('sust-new-1'), t('sust-16'), t('sust-new-2')],
    },
    {
      key: 'sust-17',
      side: 'right',
      image: images.sustainillustration2,
      title: t('sust-17'),
      paragraphs: [t('sust-18')],
    },
    {
      key: 'sust-19',
      side: 'left',
      image: images.sustainillustration3,
      title: t('sust-19'),
      paragraphs: [t('sust-20')],
    },
    {
      key: 'sust-21',
      side: 'right',
      image: images.sustainillustration4,
      title: t('sust-21'),
      paragraphs: [t('sust-22')],
    },
    {
      key: 'sust-23-26',
      side: 'left', // text left, image right
      image: images.sustainillustration5,
      composite: true,
      blocks: [
        { title: t('sust-23'), text: t('sust-24') },
        { title: t('sust-25'), text: t('sust-26') },
      ],
    },
    {
      key: 'sust-new-3',
      side: 'right',
      image: images.sustainillustration6,
      title: t('sust-new-3'),
      paragraphs: [t('sust-new-4')],
    },
  ];

  return (
    <Box sx={{ width: '100%', backgroundColor: 'var(--page-bg)' }}>
      {/* Hero */}
      <Box
        sx={{
          position: 'relative',
          minHeight: '90vh',
          backgroundImage: 'url("/bg-sust.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          py: { xs: 8, md: 10 },
        }}
      >
        <motion.img
          src={images.wpnewblack}
          alt="WP Logo"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{ width: '50vw', maxWidth: 420, height: 'auto' }}
        />
        <motion.h1
          style={{
            color: 'wheat',
            fontSize: '6vw',
            maxWidth: '90vw',
            textAlign: 'center',
            textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
            margin: 0,
          }}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 1 }}
        >
          {t('sustainability')}
        </motion.h1>
      </Box>

      {/* Alternating, compact sections */}
      {sections.map((section, index) => (
        <Box
          key={section.key}
          sx={{
            position: 'relative',
            overflow: 'hidden',
            py:
              section.key === 'sust-new-1'
                ? { xs: 15, md: 30 } // tallest
                : section.key === 'sust-23-26'
                  ? { xs: 8, md: 26 } // medium tall
                  : { xs: 5, md: 8 }, // default for all others
            px: { xs: 2, md: 8 },
            display: 'flex',
            flexDirection: {
              xs: 'column',
              md: section.side === 'left' ? 'row' : 'row-reverse',
            },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: { xs: 3, md: 6 },
            backgroundColor: index % 2 === 0 ? 'var(--section-bg-1)' : 'var(--section-bg-1)',
          }}
        >
          {renderShapes()}

          {/* TEXT */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            style={{ flex: 1, zIndex: 2 }}
          >
            {/* composite (sust-23..26) vs normal */}
            {!section.composite ? (
              <>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1.5, color: 'var(--heading-color)' }}>
                  {section.title}
                </Typography>
                {section.paragraphs?.map((p, i) => (
                  <Typography key={i} variant="body1" sx={{ mb: 1.5, fontSize: '1.08rem', color: 'var(--card-text)' }}>
                    {p}
                  </Typography>
                ))}
              </>
            ) : (
              <>
                {section.blocks.map((b, i) => (
                  <Box key={i} sx={{ mb: i === section.blocks.length - 1 ? 0 : 2.5 }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: 'var(--heading-color)' }}>
                      {b.title}
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '1.08rem', color: 'var(--card-text)' }}>
                      {b.text}
                    </Typography>
                  </Box>
                ))}
              </>
            )}
          </motion.div>

          {/* IMAGE */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.15 }}
            style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2 }}
          >
            <img
              src={section.image}
              alt={section.key}
              style={{
                width: '82%',
                height: 'auto',
                borderRadius: 12,
                boxShadow: '0 14px 28px rgba(0,0,0,0.25)',
              }}
            />
          </motion.div>
        </Box>
      ))}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          px: { xs: 2, md: 8 },
          backgroundColor: 'var(--section-bg-1)',
          borderTop: '10px solid var(--card-border)', // distinct separator
          boxShadow: '0 -4px 10px rgba(0,0,0,0.05)', // subtle smoothness
        }}
      >
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 2,
              textAlign: 'center',
              color: 'var(--heading-color)', // optional: echoes the separator color
            }}
          >
            {t('sust-27') || ''}
          </Typography>
        </motion.div>
      </Box>


      <FFooter />
    </Box>
  );
};

export default Sustainability;
