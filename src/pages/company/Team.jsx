/* eslint-disable no-unused-vars */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import FFooter from '../FFooter';
import images from '../../images/Imageholder';
import './Team.css'

const Team = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: 'Szakács János',
      position: 'Founder & CEO',
      email: 'janos@wpowertech.ro',
      phone: '',
      image: images.teammember1,
      descriptionKey: 'team.teammember1desc',
    },
    {
      name: 'Bogdan Busioc',
      position: 'CCO',
      email: 'b.bogdan@wpowertech.ro',
      phone: '',
      image: images.teammember2,
      descriptionKey: 'team.teammember2desc',
    },
    {
      name: 'Podar Iosif Cristian',
      position: 'CFO',
      email: 'p.cristian@wpowertech.ro',
      phone: '',
      image: images.teammember3,
      descriptionKey: 'team.teammember1desc',
    },
    {
      name: 'Szakács Róbert',
      position: 'CMO',
      email: 'robert@wpowertech.ro',
      phone: '',
      image: images.teammember4,
      descriptionKey: 'team.teammember1desc',
    },
    {
      name: 'Khalid Ahmed Sharif',
      position: t('khalif'),
      email: 'sharif@wpowertech.ro',
      phone: '',
      image: images.teammember6,
      descriptionKey: 'team.teammember1desc',
    },
  ];

  return (
    <div className="teamPage">
      <div className="team-hero">
        <div className="logo-section">
          <img src={images.wpnewwhite} alt="Powertech Logo" className="team-logo" />
          <h1 className="team-title">{t('team')}</h1>
        </div>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.image} alt={member.name} className="team-photo" />
              <h2 className="team-name">{member.name}</h2>
              <h3 className="team-position">{member.position}</h3>
              <div className="team-contact">
                <FaEnvelope className="icon" /> <span>{member.email}</span>
              </div>
            </div>
          ))}
          <div className='team-member'>
            <a href="https://www.crowe.com/hu" target="_blank" rel="noopener noreferrer">
              <img src={images.teammember5} alt="Crowe" className="team-photo-crowe" />
            </a>
            <h1 className="team-name">Crowe</h1>
            <h3 className="team-position">{t('partner')}</h3>
            <h3><a href="https://www.crowe.com/hu" style={{ color: 'white', textDecoration: 'none' }}>www.crowe.com</a></h3>
          </div>
        </div>
      </div>
      
      <div className="footer">
        <FFooter />
      </div>
    </div>
  );
};

export default Team;