import { CircularProgress } from '@mui/material';

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
				<p>{errorMessage}</p>
			) : (
				children
			)}
		</>
	);
};
