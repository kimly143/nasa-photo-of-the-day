import React from 'react';
import Title from '../Title/Title';
import Copyright from '../Copyright/Copyright';
import Explanation from '../Explanation/Explanation';
import './ImageDetail.css'

const ImageDetail = (props) => {
	return(
		<div className='apod-image-detail'>
			<Title title={props.imageDetail.title} />
            <Copyright copyright={props.imageDetail.copyright} 
                        date={props.imageDetail.date} />
			<Explanation explanation={props.imageDetail.explanation} />
            
		</div>
    );
};

export default ImageDetail;
