import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function MainVideo() {
    const { i18n } = useTranslation()

    // Define video URLs by language
    const videoUrls = {
        en: 'https://www.youtube-nocookie.com/embed/Lxk9Yu1eJYI?autoplay=1&mute=1&loop=1&playlist=Lxk9Yu1eJYI',
        ro: 'https://www.youtube-nocookie.com/embed/7vnExoAwfu8?autoplay=1&mute=1&loop=1&playlist=7vnExoAwfu8',
        hu: 'https://www.youtube-nocookie.com/embed/qxqKctSIf2s?autoplay=1&mute=1&loop=1&playlist=qxqKctSIf2s',
    }

    // Pick the video for the current language, fallback to English
    const videoSrc = videoUrls[i18n.language] || videoUrls.en

    return (
        <motion.div
            key={i18n.language} // 👈 this line forces React to reload the iframe on language change
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            style={{
                width: '100%',
                maxWidth: '80rem',
                aspectRatio: '16/9',
                boxShadow: '0 2rem 5rem rgba(0,0,0,0.3)',
                borderRadius: '1rem',
                overflow: 'hidden',
                zIndex: 1,
            }}
        >
            <iframe
                width="100%"
                height="100%"
                src={videoSrc}
                title="Main Project Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </motion.div>
    )
}
