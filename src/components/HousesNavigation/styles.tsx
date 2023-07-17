import { styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const HouseLink = styled(Link)`
	width: 100%;
	padding: 1rem 1.5rem;
	border-radius: 0.25rem;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	font-weight: 300;
	color: ${({ theme }) => theme.palette.text.primary};
	text-transform: uppercase;
	text-decoration: none;
	box-shadow: 1px 1px 10px rgba(62, 81, 81, 0.3);
	transition: all 0.2s ease-in;

	&:hover,
	&:focus {
		transform: translate(-1px, -1px);
		font-weight: 600;
		box-shadow: 3px 3px 10px rgba(62, 81, 81, 0.6);
	}
`;
