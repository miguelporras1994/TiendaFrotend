import React from 'react';
import '../assets/styles/components/Details.scss';

const ContentDetails = ({ title, ulrpicture, description }) => (

  <div className='content_detail'>
    <div className='content_detail-img'>
      <img src={ulrpicture} alt={title} />
    </div>
    <div className='content_detail-description'>
      <h2>
        <p className='detail-description'>Características principales</p>

        <p className='detail-description'>Descripcion</p>
      </h2>
      <p>
        {description}
      </p>
    </div>
  </div>
);

export default ContentDetails;
