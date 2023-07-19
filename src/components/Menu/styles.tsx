import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const MobileLink = styled(NavLink)`
	padding-block: 0.5rem;
	font-size: 1.2rem;
	font-weight: 700;
	text-decoration: none;
	color: ${({ theme }) => theme.palette.primary.main};

	&.active {
		color: ${({ theme }) => theme.palette.secondary.main};
	}
`;

export const DesktopLink = styled(NavLink)`
	font-weight: 700;
	text-decoration: none;
	color: ${({ theme }) => theme.palette.secondary.main};

	&:hover,
	&:focus {
		color: ${({ theme }) => theme.palette.text.secondary};
	}

	&.active {
		text-decoration: underline;
	}
`;
