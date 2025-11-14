import images from '../images/Imageholder';
import { useTranslation } from 'react-i18next';

// A helper that returns translated news dynamically
export const useNewsData = () => {
  const { t } = useTranslation();

  const newsArray = [
    {
      title: t('news7.title'),
      paragraph: t('news7.paragraph'),
      image: images.news7,
      link: 'https://cjcluj.ro/in-premiera-nationala-absoluta-consiliul-judetean-cluj-transforma-deseurile-in-energie-verde-si-in-final-in-bani-pentru-clujeni/',
    },
    {
      title: t('news6.title'),
      paragraph: t('news6.paragraph'),
      image: images.news6,
      link: 'https://cjcluj.ro/lucrarile-de-construire-a-statiei-de-dezintegrare-moleculara-inregistreaza-un-progres-de-cca-80/',
    },
    {
      title: t('news5.title'),
      paragraph: t('news5.paragraph'),
      image: images.news5,
      link: 'https://napocalive.ro/administrativ/ministrul-energiei-vom-sustine-extinderea-la-nivel-national-a-proiectului-de-dezintegrare-moleculara-al-consiliului-judetean-cluj',
    },
    {
      title: t('news4.title'),
      paragraph: t('news4.paragraph'),
      image: images.news4,
      link: 'https://cjcluj.ro/un-nou-pas-important-in-vederea-transformarii-deseurilor-in-energie/',
    },
    {
      title: t('news1.title'),
      paragraph: t('news1.paragraph'),
      image: images.Wpowertech2,
      link: 'https://www.transilvaniabusiness.ro/2024/05/08/waste-powertech-va-furniza-clujului-o-statie-de-dezintegrare-moleculara/',
    },
    {
      title: t('news2.title'),
      paragraph: t('news2.paragraph'),
      image: images.news2,
      link: 'https://cjcluj.ro/a-fost-semnat-contractul-de-achizitie-a-primei-instalatii-de-tratare-prin-dezintegrare-moleculara-a-deseurilor-municipale-de-pe-teritoriul-judetului-cluj/',
    },
    {
      title: t('news3.title'),
      paragraph: t('news3.paragraph'),
      image: images.news3,
      link: 'https://maszol.ro/belfold/Energiat-termelnek-a-szemetbol-61-millio-lejes-beruhazasbol-epit-modern-hulladekkezelot-a-Kolozs-Megyei-Tanacs',
    },
  ];

  return newsArray;
};
