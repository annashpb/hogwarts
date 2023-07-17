import { useState, Fragment } from 'react';
import {
	AppBar,
	Toolbar,
	IconButton,
	Box,
	Drawer,
	List,
	ListItem,
	Button,
	Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { navigationItems } from '../../helpers/navigationItems';

import { MobileLink, DesktopLink } from './styles';

export const Menu = () => {
	const [menuExpanded, setMenuExpanded] = useState(false);
	const container =
		typeof window !== 'undefined' ? window.document.body : undefined;

	const handleMenuToggle = () => setMenuExpanded(!menuExpanded);

	return (
		<>
			<AppBar component='nav' position='sticky'>
				<Toolbar>
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
							<Button key={`desktop-${item.title}`} sx={{ color: '#fff' }}>
								<DesktopLink to={item.url}>{item.title}</DesktopLink>
							</Button>
						))}
					</Box>
				</Toolbar>
			</AppBar>
			<Box component='nav'>
				<Drawer
					container={container}
					variant='temporary'
					open={menuExpanded}
					onClose={handleMenuToggle}
					ModalProps={{
						keepMounted: true,
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: '70vw' },
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
					</Box>
				</Drawer>
			</Box>
		</>
	);
};
