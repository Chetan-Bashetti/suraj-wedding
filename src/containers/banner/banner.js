/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { bride, date, groom } from 'mock/details';

import NavBar from 'components/Navbar/NavBar';

import Wed1 from 'assets/images/wed1.jpeg';
import Wed2 from 'assets/images/wed2.jpeg';
import Wed3 from 'assets/images/wed3.jpg';
import Wed4 from 'assets/images/wed4.jpg';
import Wed6 from 'assets/images/wed6.jpg';
import Wed7 from 'assets/images/wed7.jpeg';
import Wed8 from 'assets/images/wed8.jpeg';
import Wed9 from 'assets/images/wed9.jpeg';
import Wed10 from 'assets/images/wed10.jpeg';
import Wed11 from 'assets/images/wed11.jpeg';
import Wed12 from 'assets/images/wed12.jpeg';
import Wed13 from 'assets/images/wed13.jpeg';
import Wed14 from 'assets/images/wed14.jpeg';

import './banner.css';

const Banner = () => {
	const images = [
		Wed1,
		Wed2,
		Wed3,
		Wed4,
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
	const [bgImage, setBgImage] = React.useState(images[0]);

	React.useEffect(() => {
		let timer = setInterval(() => {
			setBgImage(images[Math.floor(Math.random() * images.length)]);
		}, 3000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div
			className='banner-wrapper'
			id='home'
			style={{
				backgroundImage: `url(${bgImage})`
			}}
		>
			<div style={{ backgroundColor: '#e91e6382' }}>
				<NavBar />
				<div className='banner-content'>
					<div className='banner-sub-title'>Welcome to the wedding of</div>
					<div className='banner-title'>
						{groom} & {bride}
					</div>
					<div className='banner-sub-title'>on {date}</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
