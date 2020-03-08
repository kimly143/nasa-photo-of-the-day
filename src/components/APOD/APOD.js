import React from 'react';
import Image from '../Image/Image';
import ImageDetail from '../ImageDetail/ImageDetail';

const APOD = (props) => {
	return (
		<div>
			<Image image={props.apodData.hdurl} />
            <ImageDetail imageDetail={props.apodData}/>
		</div>
	);
};

export default APOD;
