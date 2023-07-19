import { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
	AppBar,
	Toolbar,
	IconButton,
	Box,
	Drawer,
	List,
	ListItem,
	Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Logo from '../../assets/hogwarts_logo.png';
import { navigationItems } from '../../helpers/navigationItems';

import { MobileLink, DesktopLink } from './styles';

export const Menu = () => {
	const [menuExpanded, setMenuExpanded] = useState<boolean>(false);
	const container =
		typeof window !== 'undefined' ? window.document.body : undefined;

	const handleMenuToggle = () => setMenuExpanded(!menuExpanded);

	return (
		<Box component='header' sx={{ position: 'sticky', top: 0, zIndex: 10 }}>
			<AppBar component='nav' position='sticky'>
				<Toolbar>
					<Box py={1} sx={{ flexGrow: 1 }}>
						<Link to='/' title='Home'>
							<img
								src={Logo}
								alt='Hogwarts coat of arms'
								width='70'
								height='70'
							/>
						</Link>
					</Box>
					<IconButton
						color='inherit'
						aria-label='Expand the menu'
						edge='start'
						onClick={handleMenuToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Box
						sx={{ display: { xs: 'none', sm: 'block' }, marginLeft: 'auto' }}
					>
						{navigationItems.map((item) => (
							<DesktopLink to={item.url} key={`desktop-${item.title}`}>
								{item.title}
							</DesktopLink>
						))}
					</Box>
				</Toolbar>
			</AppBar>
			<Box component='nav'>
				<Drawer
					container={container}
					variant='temporary'
					anchor='top'
					open={menuExpanded}
					onClose={handleMenuToggle}
					ModalProps={{
						keepMounted: true,
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100vw' },
					}}
				>
					<Box onClick={handleMenuToggle}>
						<List>
							{navigationItems.map((item) => (
								<Fragment key={`mobile-${item.title}`}>
									<ListItem>
										<MobileLink to={item.url}>{item.title}</MobileLink>
									</ListItem>
									<Divider />
								</Fragment>
							))}
						</List>
						<Box p={2} display='flex' justifyContent='center'>
							<IconButton onClick={handleMenuToggle}>
								<ExpandLessIcon />
							</IconButton>
						</Box>
					</Box>
				</Drawer>
			</Box>
		</Box>
	);
};
