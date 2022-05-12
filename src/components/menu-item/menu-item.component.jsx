import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import "./menu-item.styles.scss"; 

const MenuItem = ({ title, imageUrl ,size, linkUrl}) => {
  const navigate = useNavigate();
  const location = useLocation();


  return (
    <div className={`${size} menu-item`} onClick={() => navigate(`${location.pathname}${linkUrl}`)}  >    
    
        <div className="background-image"
         style={{
            backgroundImage: `url(${imageUrl})`
        }}
        />
        <div className="content">
            <h4 className="title">{title.toUpperCase()}</h4>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>      
  )
}

export default MenuItem