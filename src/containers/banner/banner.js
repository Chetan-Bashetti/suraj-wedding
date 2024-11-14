/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { bride, date, groom } from 'mock/details';

import NavBar from 'components/Navbar/NavBar';

import Wed1 from 'assets/images/wed1.jpeg';
import Wed2 from 'assets/images/wed2.jpeg';
import Wed3 from 'assets/images/wed3.jpg';
import Wed4 from 'assets/images/wed4.jpg';
import Wed6 from 'assets/images/wed6.jpg';

import './banner.css';

const Banner = () => {
	const images = [Wed1, Wed2, Wed3, Wed4, Wed6];
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
