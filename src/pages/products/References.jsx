import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import FFooter from '../FFooter';
import { FaTrash, FaIndustry } from 'react-icons/fa';
import { PiPlantFill, PiWarningDiamondFill } from "react-icons/pi";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { CustomPrevButton, CustomNextButton } from '../../components/CustomButtons';

import './References.css';
import '../../components/Carousel.css';
import images from '../../images/Imageholder';

const LazyGallery = ({ imageArray, isVisible }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    useEffect(() => {
        if (isVisible && !isLoaded) {
            setIsLoaded(true);
        }
    }, [isVisible, isLoaded]);

    const handleImageClick = (index) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    const createCarouselItems = () => (
        imageArray.map((src, index) => (
            <div className="gallery-item" key={index}>
                <img 
                    src={src} 
                    alt={`Gallery ${index}`} 
                    onClick={() => handleImageClick(index)}
                    style={{ cursor: 'pointer' }}
                />
            </div>
        ))
    );

    if (!isLoaded) {
        return (
            <div className="gallery-placeholder" style={{ 
                height: '300px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                backgroundColor: '#f0f0f0',
                color: '#666'
            }}>
                Loading gallery...
            </div>
        );
    }

    return (
        <>
            <AliceCarousel
                mouseTracking
                infinite
                items={createCarouselItems()}
                renderPrevButton={() => <CustomPrevButton onClick={() => { }} />}
                renderNextButton={() => <CustomNextButton onClick={() => { }} />}
            />
            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                index={lightboxIndex}
                slides={imageArray.map((src) => ({ src }))}
                styles={{
                    container: { backgroundColor: 'rgba(0, 0, 0, 0.7)' }
                }}
            />
        </>
    );
};

// Intersection Observer Hook
const useIntersectionObserver = (elementRef, options = {}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        }, {
            threshold: 0.1,
            rootMargin: '100px',
            ...options
        });

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, [elementRef, options]);

    return isVisible;
};

const References = () => {
    const { t } = useTranslation();
    const urbanRef = useRef(null);
    const industryRef = useRef(null);
    
    const clujGalleryRef = useRef(null);
    const tarnaveniGalleryRef = useRef(null);
    const prototypeGalleryRef = useRef(null);
    
    const isClujVisible = useIntersectionObserver(clujGalleryRef);
    const isTarnaveniVisible = useIntersectionObserver(tarnaveniGalleryRef);
    const isPrototypeVisible = useIntersectionObserver(prototypeGalleryRef);
    
    const imageSources = {
        tarnaveni: [
            images.Wpowertech2, 
            images.Wpowertech1,
            images.news3,
            images.tarnaveni2,
            images.tarnaveni3,
        ],
        jidvei: [
            images.jid4,
            images.jid5,
            images.jid6,
            images.jid7,
            images.jid8,
            images.jid9,
            images.jid10,
            images.jid1,
            images.jid2,
            images.jid3,
            images.jidvei1,
        ],
        ramnicu: [
            images.vl1,
            images.vl2,
            images.vl3,
            images.vl4,
        ],
        darmanesti: [
            images.darm1,
            images.darm2,
            images.darm3,
            images.darm4,
        ],
        cluj: [
            images.cj33,
            images.cj32,
            images.cj31,
            images.cj30,
            images.cj29,
            images.cj28,
            images.cj27,
            images.cj26,
            images.cj25,
            images.cj24,
            images.cj23,
            images.cj22,
            images.cj21,
            images.cj20,
            images.cj19,
            images.cj18,
            images.cj17,
            images.cj16,
            images.cj15,
            images.cj14,
            images.cj13,
            images.cj12,
            images.cj11,
            images.cj10,
            images.cj9,
            images.cj8,
            images.cj7,
            images.cj6,
            images.cj5,
            images.cj4,
            images.cj3,
            images.cj2,
            images.cj1,
        ],
        satumare: [images.inConstruction],
        prototype: [images.tarnaveni1],
    };
    
    return (
        <div className='references-page'>
            <div className="hero-section">
                <div className="reference-box">
                <img src={images.refBackground} alt="Background" className="background-image" />
                    <h1>{t('references')}</h1>
                    <div className="button-container">
                        <div className="button-background"></div>
                        <button onClick={() => urbanRef.current?.scrollIntoView({ behavior: 'smooth' })}>
                            <FaTrash /><br/>{t('urban-waste')}
                        </button>
                        <button onClick={() => industryRef.current?.scrollIntoView({ behavior: 'smooth' })}>
                            <FaIndustry /><br/>{t('industrial-waste')}
                        </button>
                    </div>
                </div>
            </div>
            <div className="content-sections">
                <div className="reference-container scroll-margin" id="urban-section" ref={urbanRef}>
                    <div className="reference-content">
                        <div className="title-bar">
                            {t('title-cluj')} <FaTrash />
                        </div>
                        <div className="description">
                            {t('desc-cluj')}
                        </div>
                        <div className="gallery" ref={clujGalleryRef}>
                            <LazyGallery 
                                imageArray={imageSources.cluj} 
                                isVisible={isClujVisible}
                            />
                        </div>
                    </div>
                </div>

                <div className="reference-container scroll-margin" id="industry-section" ref={industryRef}>
                    <div className="reference-content">
                        <div className="title-bar">
                            {t('title-tarnaveni')} <FaIndustry />
                        </div>
                        <div className="description">
                            {t('desc-tarnaveni')}
                        </div>
                        <div className="gallery" ref={tarnaveniGalleryRef}>
                            <LazyGallery 
                                imageArray={imageSources.tarnaveni} 
                                isVisible={isTarnaveniVisible}
                            />
                        </div>
                    </div>
                </div>

                <div className="reference-container scroll-margin">
                    <div className="reference-content">
                        <div className="title-bar">
                            {t('prototype')}
                        </div>
                        <div className="gallery" ref={prototypeGalleryRef}>
                            <LazyGallery 
                                imageArray={imageSources.prototype} 
                                isVisible={isPrototypeVisible}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer">
                <FFooter></FFooter>
            </div>
        </div>
    );
};

export default References;