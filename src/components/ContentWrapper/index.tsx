import { CircularProgress, Alert, AlertTitle } from '@mui/material';

type CWProps = {
	loading: boolean;
	errorMessage: string;
	children: string | JSX.Element | JSX.Element[];
};

export const ContentWrapper = ({
	loading,
	errorMessage,
	children,
}: CWProps) => {
	return (
		<>
			{loading ? (
				<CircularProgress />
			) : errorMessage ? (
				<Alert severity='error' sx={{ marginTop: '1rem' }}>
					<AlertTitle>
						<strong>Mischief was not managed</strong>
					</AlertTitle>
					{errorMessage}
				</Alert>
			) : (
				children
			)}
		</>
	);
};
