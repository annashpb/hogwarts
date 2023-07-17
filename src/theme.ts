import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
	palette: {
		primary: {
			main: '#3E5151',
		},
		secondary: {
			main: '#00d4d4',
		},
		text: {
			primary: '#3E5151',
			secondary: '#ffecdb',
		},
		error: {
			main: red.A400,
		},
	},
});

export default theme;
