import React from 'react';
import { useTranslation } from 'react-i18next';

const Company = () => {
  const { t } = useTranslation();
  
  return (
    <div className="company-page">
      <h1>{t('company')}</h1>
      <p>{t('company_description')}</p>
    </div>
  );
};

export default Company;