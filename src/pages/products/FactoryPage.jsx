import React, { useState } from 'react';
import { Container, Typography, Paper, Box, IconButton, Grid } from '@mui/material';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import images from '../../images/Imageholder';
import { useTranslation } from 'react-i18next';

// Lightbox
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const imageSources = [images.cj1, images.cj2, images.cj3];

const FactoryPage = () => {
  const { t } = useTranslation();

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleImageClick = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const createCarouselItems = (imageArray) =>
    imageArray.map((src, index) => (
      <Box key={index} sx={{ px: 1 }}>
        <img
          src={src}
          alt={`Factory ${index}`}
          onClick={() => handleImageClick(index)}
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
            borderRadius: '5px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
            cursor: 'pointer',
          }}
        />
      </Box>
    ));

  const CustomPrevButton = ({ onClick }) => (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: '50%',
        left: 8,
        transform: 'translateY(-50%)',
        backgroundColor: 'white',
        boxShadow: 1,
        zIndex: 2,
        '&:hover': { backgroundColor: '#f0f0f0' },
      }}
    >
      <IoIosArrowBack size={20} />
    </IconButton>
  );

  const CustomNextButton = ({ onClick }) => (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: '50%',
        right: 8,
        transform: 'translateY(-50%)',
        backgroundColor: 'white',
        boxShadow: 1,
        zIndex: 2,
        '&:hover': { backgroundColor: '#f0f0f0' },
      }}
    >
      <IoIosArrowForward size={20} />
    </IconButton>
  );

  return (
    <>
      <Box
        sx={{
          backgroundImage: 'url(/bg-factory.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            backgroundColor: '#0d47a1',
            color: '#f5f5dc',
            py: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            pt: 10,
          }}
        >
          <Box
            component="img"
            src={images.wpnewblack}
            alt="Factory Logo"
            sx={{
              width: {
                xs: '70vw',
                sm: '30vw',
              },
              mb: 2,
            }}
          />
          <Typography
            variant="h2"
            sx={{
              fontWeight: 600,
              color: 'wheat',
              pb: 4,
            }}
          >
            {t('factory_page_title')}
          </Typography>
        </Box>

        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Grid container spacing={4} alignItems="stretch">
            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: {
                    xs: 'auto',
                    md: '60vh',
                  },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Box sx={{ position: 'relative', width: '100%', flex: 1 }}>
                  <AliceCarousel
                    mouseTracking
                    infinite
                    disableDotsControls
                    items={createCarouselItems(imageSources)}
                    renderPrevButton={() => (
                      <CustomPrevButton
                        onClick={() =>
                          document.querySelector('.alice-carousel__prev-btn')?.click()
                        }
                      />
                    )}
                    renderNextButton={() => (
                      <CustomNextButton
                        onClick={() =>
                          document.querySelector('.alice-carousel__next-btn')?.click()
                        }
                      />
                    )}
                  />
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: {
                    xs: 'auto',
                    md: '60vh',
                  },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="h6" gutterBottom>
                  {t('about_factory_title')}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {t('about_factory_description')}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={imageSources.map((src) => ({ src }))}
        styles={{
          container: { backgroundColor: 'rgba(0, 0, 0, 0.7)' }  // More transparent background
        }}
      />
    </>
  );
};

export default FactoryPage;
