import { styled, Container, Box } from '@mui/material';
import Screen1 from '../../assets/homepageBGs/screen_1.avif';
import Screen2 from '../../assets/homepageBGs/screen_2.jpg';
import Screen3 from '../../assets/homepageBGs/screen_3.jpg';
import Screen4 from '../../assets/homepageBGs/screen_4.jpg';

const Parallax = styled('div')`
	height: 100%;
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

export const ParallaxFirst = styled(Parallax)`
	background-image: linear-gradient(
			to top,
			rgba(62, 81, 81, 0.5),
			rgba(255, 236, 219, 0.5)
		),
		url(${Screen1});
`;

export const ParallaxSecond = styled(Parallax)`
	background-image: linear-gradient(
			to top,
			rgba(62, 81, 81, 0.5),
			rgba(255, 236, 219, 0.5)
		),
		url(${Screen2});
`;

export const ParallaxThird = styled(Parallax)`
	background-image: linear-gradient(
			to top,
			rgba(62, 81, 81, 0.5),
			rgba(255, 236, 219, 0.5)
		),
		url(${Screen3});
`;

export const ParallaxFourth = styled(Parallax)`
	background-image: linear-gradient(
			to top,
			rgba(62, 81, 81, 0.5),
			rgba(255, 236, 219, 0.5)
		),
		url(${Screen4});
`;

export const ContentContainer = styled(Container)`
	height: 100vh;
	display: flex;
	align-items: center;
`;

export const ContentBox = styled(Box)`
	width: 100%;
	border: 1px solid #3e5151;
	border-radius: 0.5rem;
	padding: 1rem;
	text-align: center;
	position: relative;

	:before {
		content: '';
		position: absolute;
		top: 0.25rem;
		right: 0.25rem;
		bottom: 0.25rem;
		left: 0.25rem;
		border: 1px solid #3e5151;
		border-radius: 0.5rem;
	}
`;
