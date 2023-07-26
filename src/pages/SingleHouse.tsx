import { useParams, Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { useFetch } from '../hooks/useFetch';
import { ContentWrapper } from '../components/ContentWrapper';

interface IHouseStudent {
	id: string;
	name: string;
}

export const SingleHouse = () => {
	const { name } = useParams();
	const { data, loading, errorMessage } = useFetch(
		`https://hp-api.onrender.com/api/characters/house/${name}`,
		'house'
	);

	return (
		<>
			<h2>Welcome to {name && name.charAt(0).toUpperCase() + name.slice(1)}</h2>
			<ContentWrapper loading={loading} errorMessage={errorMessage}>
				<>
					{data && data.length > 0 && (
						<Grid container spacing={2}>
							{data.map((student: IHouseStudent) => (
								<Grid item xs={12} md={6} lg={4} key={student.id}>
									<Link to={`/student/${student.id}`}>{student.name}</Link>
								</Grid>
							))}
						</Grid>
					)}
				</>
			</ContentWrapper>
		</>
	);
};
