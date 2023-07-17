import { styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const MobileLink = styled(Link)`
	padding-block: 0.5rem;
	font-size: 1.2rem;
	font-weight: 700;
	text-decoration: none;
	color: ${({ theme }) => theme.palette.primary.main};
`;

export const DesktopLink = styled(Link)`
	font-weight: 700;
	text-decoration: none;
	color: ${({ theme }) => theme.palette.secondary.main};

	&:hover,
	&:focus {
		color: ${({ theme }) => theme.palette.text.secondary};
	}
`;
