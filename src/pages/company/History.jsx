import React from 'react';
import { useTranslation } from 'react-i18next';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; // import the default CSS for styling
import images from '../../images/Imageholder';
import './History.css';

const History = () => {
  const { t } = useTranslation();

  return (
    <div className='history-page'>
      <div className='background-hist'></div>
      <div className="logo-container">
        <img src={images.wpnewwhite} alt="WP Logo" className="wp-logo" />
        <h1 className="timeline-title">{t('roadmap')}</h1>
      </div>

      <VerticalTimeline>
        {/* Year 1 */}
        <VerticalTimelineElement
          className="timeline-item"
          date={t('year-1')}
          iconStyle={{
            background: 'rgb(243, 33, 68)',
            color: '#fff',
            fontSize: '1rem',
            width: '25px',
            height: '25px',
            left:'51.5%',
          }}
          icon={<i className="fas fa-calendar-alt"></i>}
          style={{}}
        >
          <ul className="timeline-list">
            <li>{t('year-1-element-1')}</li>
            <li>{t('year-1-element-2')}</li>
          </ul>
        </VerticalTimelineElement>

        {/* Year 2 */}
        <VerticalTimelineElement
          className="timeline-item"
          date={t('year-2')}
          iconStyle={{
            background: 'rgb(243, 33, 68)',
            color: '#fff',
            fontSize: '1rem',
            width: '25px',
            height: '25px',
            left:'51.5%',
          }}
          icon={<i className="fas fa-calendar-alt"></i>}
        >
          <ul className="timeline-list">
            <li>{t('year-2-element-1')}</li>
            <li>{t('year-2-element-2')}</li>
            <li>{t('year-2-element-3')}</li>
          </ul>
        </VerticalTimelineElement>

        {/* Year 3 */}
        <VerticalTimelineElement
          className="timeline-item"
          date={t('year-3')}
          iconStyle={{
            background: 'rgb(243, 33, 68)',
            color: '#fff',
            fontSize: '1rem',
            width: '25px',
            height: '25px',
            left:'51.5%',
          }}
          icon={<i className="fas fa-calendar-alt"></i>}
        >
          <ul className="timeline-list">
            <li>{t('year-3-element-1')}</li>
            <li>{t('year-3-element-2')}</li>
          </ul>
        </VerticalTimelineElement>

        {/* Year 4 */}
        <VerticalTimelineElement
          className="timeline-item"
          date={t('year-4')}
          iconStyle={{
            background: 'rgb(243, 33, 68)',
            color: '#fff',
            fontSize: '1rem',
            width: '25px',
            height: '25px',
            left:'51.5%',
          }}
          icon={<i className="fas fa-calendar-alt"></i>}
        >
          <ul className="timeline-list">
            <li>{t('year-4-element-1')}</li>
            <li>{t('year-4-element-2')}</li>
          </ul>
        </VerticalTimelineElement>

        {/* Year 5 */}
        <VerticalTimelineElement
          className="timeline-item"
          date={t('year-5')}
          iconStyle={{
            background: 'rgb(243, 33, 68)',
            color: '#fff',
            fontSize: '1rem',
            width: '25px',
            height: '25px',
            left:'51.5%',
          }}
          icon={<i className="fas fa-calendar-alt"></i>}
        >
          <ul className="timeline-list">
            <li>{t('year-5-element-1')}</li>
            <li>{t('year-5-element-2')}</li>
            <li>{t('year-5-element-3')}</li>
          </ul>
        </VerticalTimelineElement>

        {/* Year 6 */}
        <VerticalTimelineElement
          className="timeline-item"
          date={t('year-6')}
          iconStyle={{
            background: 'rgb(243, 33, 68)',
            color: '#fff',
            fontSize: '1rem',
            width: '25px',
            height: '25px',
            left:'51.5%',
          }}
          icon={<i className="fas fa-calendar-alt"></i>}
        >
          <ul className="timeline-list">
            <li>{t('year-6-element-1')}</li>
            <li>{t('year-6-element-2')}</li>
          </ul>
        </VerticalTimelineElement>

        {/* Year 7 */}
        <VerticalTimelineElement
          className="timeline-item"
          date={t('year-7')}
          iconStyle={{
            background: 'rgb(243, 33, 68)',
            color: '#fff',
            fontSize: '1rem',
            width: '25px',
            height: '25px',
            left:'51.5%',
          }}
          icon={<i className="fas fa-calendar-alt"></i>}
        >
          <ul className="timeline-list">
            <li>{t('year-7-element-1')}</li>
          </ul>
        </VerticalTimelineElement>

        {/* Year 8 */}
        <VerticalTimelineElement
          className="timeline-item"
          date={t('year-8')}
          iconStyle={{
            background: 'rgb(243, 33, 68)',
            color: '#fff',
            fontSize: '1rem',
            width: '25px',
            height: '25px',
            left:'51.5%',
          }}
          icon={<i className="fas fa-calendar-alt"></i>}
        >
          <ul className="timeline-list">
            <li>{t('year-8-element-1')}</li>
            <li>{t('year-8-element-2')}</li>
            <li>{t('year-8-element-3')}</li>
          </ul>
        </VerticalTimelineElement>

        {/* Year 9 */}
        <VerticalTimelineElement
          className="timeline-item"
          date={t('year-9')}
          iconStyle={{
            background: 'rgb(243, 33, 68)',
            color: '#fff',
            fontSize: '1rem',
            width: '25px',
            height: '25px',
            left:'51.5%',
          }}
          icon={<i className="fas fa-calendar-alt"></i>}
        >
          <ul className="timeline-list">
            <li>{t('year-9-element-1')}</li>
            <li>{t('year-9-element-2')}</li>
            <li>{t('year-9-element-3')}</li>
          </ul>
        </VerticalTimelineElement>

        {/* Year 10 */}
        <VerticalTimelineElement
          className="timeline-item"
          date={t('year-10')}
          iconStyle={{
            background: 'rgb(243, 33, 68)',
            color: '#fff',
            fontSize: '1rem',           
             width: '25px',
            height: '25px',
            left:'51.5%',
          }}
          icon={<i className="fas fa-calendar-alt"></i>}
        >
          <ul className="timeline-list">
            <li>{t('year-10-element-1')}</li>
            <li>{t('year-10-element-2')}</li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default History;
