import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
	palette: {
		primary: {
			main: '#3E5151',
		},
		secondary: {
			main: '#DECBA4',
		},
		error: {
			main: red.A400,
		},
	},
});

export default theme;
