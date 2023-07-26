import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { useFetch } from '../hooks/useFetch';
import { ContentWrapper } from '../components/ContentWrapper';

interface IStaffMember {
	id: string;
	name: string;
}

export const Staff = () => {
	const { data, loading, errorMessage } = useFetch(
		'https://hp-api.onrender.com/api/characters/staff'
	);

	return (
		<>
			<h1>Meet our magical staff!</h1>
			<ContentWrapper loading={loading} errorMessage={errorMessage}>
				<>
					{data && data.length > 0 && (
						<Grid container spacing={2}>
							{data.map((staffMember: IStaffMember) => (
								<Grid item xs={12} md={6} lg={4} key={staffMember.id}>
									<Link to={`/staff/${staffMember.id}`}>
										{staffMember.name}
									</Link>
								</Grid>
							))}
						</Grid>
					)}
				</>
			</ContentWrapper>
		</>
	);
};
