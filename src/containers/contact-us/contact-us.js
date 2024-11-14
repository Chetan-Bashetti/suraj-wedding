import React from 'react';

import { date, phoneNumer } from 'mock/details';

import './contact-us.css';
import MuiButton from 'components/Button/MuiButton';

const ContactUs = () => {
	const [message, setMessage] = React.useState('');

	return (
		<div className='contact-us-wrapper' id='wish_us'>
			<div className='titles'>Visit us</div>
			<div className='contact-us-content-map'>
				<div className='map'>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4022.336581936543!2d75.71390632650231!3d16.853619439812995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc6ff3887bd4291%3A0xa4e5a9cf9fe2fc01!2sLingayat%20Samudaya%20Bhavan!5e0!3m2!1sen!2sin!4v1731342259597!5m2!1sen!2sin'
						width='100%'
						height='450'
						style={{ border: 0, outline: 'none' }}
						allowFullScreen=''
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
						title='Shop address'
					></iframe>
				</div>
				<div className='contact-us-content'>
					<div className='each-info'>
						<div className='contact-us-content-title'>Address</div>
						<div className='contact-us-content-desc'>
							Lingayat Samudaya Bhavan, Banjara Nagar, Vijayapura, Karnataka
							586103.
						</div>
					</div>
					<div className='each-info'>
						<div className='contact-us-content-title'>Timings</div>
						<div className='contact-us-content-desc'>
							{date}, 12:00pm Onwards,
						</div>
					</div>
					<div className='each-info' style={{ width: '100%' }}>
						<div className='contact-us-content-title'>Wish the couples on</div>
						<div
							style={{
								marginTop: '1em',
								display: 'flex',
								width: '100%',
								flexDirection: 'column'
							}}
						>
							<input
								className='input-field'
								placeholder={'Write your message here'}
								value={message}
								onChange={(e) => setMessage(e.target.value)}
							/>
							<MuiButton
								title='Send'
								style={{ marginTop: '1em' }}
								onClick={() => {
									window.open(
										`https://wa.me/${phoneNumer}?text=${message}`,
										'_blank'
									);
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
