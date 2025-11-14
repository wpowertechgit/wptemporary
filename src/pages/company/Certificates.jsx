import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaFilePdf } from "react-icons/fa";
import ReactModalImage from 'react-modal-image';

import images from '../../images/Imageholder';
import './Certificates.css';

const Certificates = ({ disableNavbar, enableNavbar }) => {
  const { t } = useTranslation();
  const certificateGallery = [
    { id: 1, src: images.certificate1, alt: ' ' },
    { id: 2, src: images.certificate2, alt: ' ' },
    { id: 3, src: images.certificate3, alt: ' ' },
  ];

  const documentList = [
    { id: 1, title: t('document3') },
    { id: 2, title: t('document4') },
    { id: 3, title: t('document5') },
    { id: 4, title: t('document6') },
    { id: 5, title: t('document7') },
    { id: 6, title: t('document8') },
  ];

  const renderDocumentList = () => {
    return documentList.map((doc) => (
      <div key={doc.id} className="document-item">
        <a href={doc.file} download className="document-link">
          <FaFilePdf />
          <span>{doc.title}</span>
        </a>
      </div>
    ));
  };

  return (
    <div className='certificateHolder'>
    <div className="certificatePage">
      <div className="text-content">
        <h1>{t('certificates')}</h1>
        <div className="certificates-gallery">
          {certificateGallery.map((certificate) => (
            <ReactModalImage
              key={certificate.id}
              small={certificate.src}
              large={certificate.src}
              alt={certificate.alt}
              className="certificate-thumbnail"
              hideDownload={true}
              style={{ top: '12vh' }}
            />
          ))}
        </div>
        <div className="separator-banner-cert">
                        <h2>{t('documents')}</h2>
                    </div>
        <div className="documents-grid">
          {renderDocumentList()}
        </div>
        <div class="ul-box">
        <ul>
          <li><p>EU Directive: 2000/76 EG 2014/35/EU 2014/30/EU 2006/42/EC</p></li>
          <li><p>SR EN ISO12100:2011</p></li>
          <li><p>SR EN 60204 1:2007</p></li>
          <li><p>SR EN 62061:2005</p></li>
          <li><p>SR EN 842+A1:2009</p></li>
        </ul>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Certificates;
