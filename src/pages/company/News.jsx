import React from 'react';
import { Grid2, Button, Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import images from '../../images/Imageholder';
import FFooter from '../FFooter';
import './News.css';
import { useNewsData } from '../../data/newsData';
const News = () => {
    const { t } = useTranslation();
    const newsArray = useNewsData();
    return (
        <div>
            <Box
                sx={{
                    backgroundImage: 'url("/bg-out-news.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh',
                }}
            >
                { }
                <Box
                    sx={{
                        backgroundImage: 'url("/bg-news.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                    }}
                >
                    <Box
                        sx={{
                            textAlign: 'center',
                            color: 'white',
                            zIndex: 10,
                            maxWidth: '80%',
                            padding: '0 1rem',
                        }}
                    >
                        <img
                            src={images.wpnewblack}
                            alt="WP Logo"
                            className="wp-logo"
                        />
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: '12vw', sm: '9vw', md: '7vw' },
                                fontWeight: 'bold',
                                marginTop: '1rem',
                            }}
                        >
                            {t('about-us')}
                        </Typography>
                    </Box>
                </Box>
                { }
                <Box
                    sx={{
                        clipPath: 'polygon(0 0, 7% 0, 0 10%, 0 100%, 100% 100%, 100% 0)',
                        backgroundColor: 'var(--section-bg-1)',
                        padding: '5rem 2rem',
                        position: 'relative',
                        top: '-60px',
                        zIndex: 1,
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: '2rem',
                            marginBottom: '1rem',
                            color: 'var(--heading-color)',
                            fontWeight: 'bold',
                            padding: '0 1rem',
                        }}
                    >
                        {t('sust-1')}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: '1.2rem',
                            marginBottom: '1rem',
                            color: 'var(--card-text)',
                            padding: '0 1rem',
                        }}
                    >
                        {t('sust-2')}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: '1.2rem',
                            marginBottom: '1rem',
                            color: 'var(--card-text)',
                            padding: '0 1rem',
                        }}
                    >
                        {t('plusmission1')}
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: '1.8rem',
                            marginBottom: '0.5rem',
                            color: 'var(--heading-color)',
                            fontWeight: 'bold',
                            padding: '0 1rem',
                        }}
                    >
                        {t('plusmission2')}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: '1.2rem',
                            marginBottom: '1rem',
                            color: 'var(--card-text)',
                            padding: '0 1rem',
                        }}
                    >
                        {t('plusmission3')}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: '1.2rem',
                            marginBottom: '1rem',
                            color: 'var(--card-text)',
                            padding: '0 1rem',
                        }}
                    >
                        {t('plusmission4')}
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: '1.8rem',
                            marginBottom: '0.5rem',
                            color: 'green',
                            fontWeight: 'bold',
                            padding: '0 1rem',
                        }}
                    >
                        {t('plusmission5')}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: '1.2rem',
                            marginBottom: '1rem',
                            color: 'var(--card-text)',
                            padding: '0 1rem',
                        }}
                    >
                        {t('plusmission6')}
                    </Typography>
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: '2rem',
                            marginBottom: '1rem',
                            color: 'var(--heading-color)',
                            fontWeight: 'bold',
                            padding: '0 1rem',
                        }}
                    >
                        {t('sust-3')}
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: '1.8rem',
                            marginBottom: '0.5rem',
                            color: 'var(--heading-color)',
                            fontWeight: 'bold',
                            padding: '0 1rem',
                        }}
                    >
                        {t('sust-5')}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: '1.2rem',
                            marginBottom: '1rem',
                            color: 'var(--card-text)',
                            padding: '0 1rem',
                        }}
                    >
                        {t('sust-6')}
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: '1.8rem',
                            marginBottom: '0.5rem',
                            color: 'var(--heading-color)',
                            fontWeight: 'bold',
                            padding: '0 1rem',
                        }}
                    >
                        {t('sust-7')}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: '1.2rem',
                            marginBottom: '1rem',
                            color: 'var(--card-text)',
                            padding: '0 1rem',
                        }}
                    >
                        {t('sust-8')}
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: '1.8rem',
                            marginBottom: '0.5rem',
                            color: 'var(--heading-color)',
                            fontWeight: 'bold',
                            padding: '0 1rem',
                        }}
                    >
                        {t('sust-9')}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: '1.2rem',
                            marginBottom: '1rem',
                            color: 'var(--card-text)',
                            padding: '0 1rem',
                        }}
                    >
                        {t('sust-10')}
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: '1.8rem',
                            marginBottom: '0.5rem',
                            color: 'var(--heading-color)',
                            fontWeight: 'bold',
                            padding: '0 1rem',
                        }}
                    >
                        {t('sust-11')}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: '1.2rem',
                            marginBottom: '1rem',
                            color: 'var(--card-text)',
                            padding: '0 1rem',
                        }}
                    >
                        {t('sust-12')}
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: '1.8rem',
                            marginBottom: '0.5rem',
                            color: 'var(--heading-color)',
                            fontWeight: 'bold',
                            padding: '0 1rem',
                        }}
                    >
                        {t('sust-13')}
                    </Typography>
                </Box>
                { }
                <div className="separator-banner">
                    <Typography variant="h2">{t('news')}</Typography>
                </div>
                { }
                <Box
                    sx={{
                        backgroundColor: 'var(--section-bg-1)',
                        padding: '2rem',
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        gap: '2rem',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    {/* Adding a wrapping box with the silk grey border around the grids */}
                    <Box
                        sx={{
                            border: '2px solid #d3d3d3', // Silk grey border
                            borderRadius: '8px', // Optional: Rounded corners for the border
                            width: '100%',
                            padding: '1rem', // Padding inside the border to give space between border and grids
                            backgroundColor: 'var(--section-bg-1)', // Optional: Background color for the border box
                        }}
                    >
                        <Grid2 container spacing={2} justifyContent="center">
                            {newsArray.map((newsItem, index) => (
                                <Grid2
                                    key={index}
                                    xs={12} sm={6} md={4} lg={3}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        backgroundColor: 'var(--card-bg)',
                                        padding: '1rem',
                                        border: `1px solid var(--card-border)`,
                                        borderRadius: '8px',
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
                                        <Box sx={{ width: '100%', borderBottom: '2px solid var(--btn-primary-bg)', margin: '1rem 0' }} />
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
                                                borderRadius: '8px',
                                                marginTop: '1rem',
                                            }}
                                        />
                                    </Box>

                                    {/* Button pinned near bottom */}
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        href={newsItem.link}
                                        sx={{
                                            marginTop: 'auto',
                                            marginBottom: '1%', // or '2%'
                                            width: '100%',
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

                    </Box>
                </Box>

            </Box>
            <FFooter />
        </div>
    );
};
export default News;
