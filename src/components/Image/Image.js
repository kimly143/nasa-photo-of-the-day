import React from 'react';
import './Image.css';

const Image = (props) => 
    <div style={{ backgroundImage: `url(${props.image})` }} 
        className="apod-image" />;
    
export default Image;
