import React from 'react';

import Wed1 from 'assets/images/wed1.jpeg';
import Wed2 from 'assets/images/wed2.jpeg';
import Wed3 from 'assets/images/wed3.jpg';
import Wed4 from 'assets/images/wed4.jpg';
import Wed5 from 'assets/images/wed5.jpg';
import Wed6 from 'assets/images/wed6.jpg';
import Wed7 from 'assets/images/wed7.jpeg';
import Wed8 from 'assets/images/wed8.jpeg';
import Wed9 from 'assets/images/wed9.jpeg';
import Wed10 from 'assets/images/wed10.jpeg';
import Wed11 from 'assets/images/wed11.jpeg';
import Wed12 from 'assets/images/wed12.jpeg';
import Wed13 from 'assets/images/wed13.jpeg';
import Wed14 from 'assets/images/wed14.jpeg';

import './gallery.css';

const gallery = [
	Wed1,
	Wed2,
	Wed3,
	Wed4,
	Wed5,
	Wed6,
	Wed7,
	Wed8,
	Wed9,
	Wed10,
	Wed11,
	Wed12,
	Wed13,
	Wed14
];

const Viewer = ({ img = 0, hideShowImg }) => {
	return (
		<div className='viewer-wrapper' onClick={hideShowImg}>
			<img className='view-img' src={gallery[img]} alt='couple' />
		</div>
	);
};

const Gallery = () => {
	const [viewImage, setViewImage] = React.useState(0);
	const [showImage, setShowImage] = React.useState(false);

	const handleViewImage = (id) => {
		setViewImage(id);
		setShowImage(true);
	};

	return (
		<div>
			<div className='titles'>Our Gallery</div>
			<div className='about-us-content'>
				<div className='gallery-content'>
					{gallery.map((eachImage, id) => (
						<img
							className='gallery-images'
							src={eachImage}
							alt='couples'
							onClick={() => handleViewImage(id)}
						/>
					))}
				</div>
			</div>
			{showImage && (
				<Viewer
					img={viewImage}
					hideShowImg={() => {
						setShowImage(false);
						setViewImage(0);
					}}
				/>
			)}
		</div>
	);
};
export default Gallery;
