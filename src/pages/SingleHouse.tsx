import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { CircularProgress, Grid } from '@mui/material';

interface IHouseStudent {
	name: string;
}

export const SingleHouse = () => {
	const { name } = useParams();
	const [students, setStudents] = useState([]);
	const [loading, setLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState(null);

	const fetchHouseStudents = useCallback(() => {
		fetch(`https://hp-api.onrender.com/api/characters/house/${name}`)
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
					throw new Error('Oooooops, Muggle-Repelling charm in action');
				}
			})
			.then((data) => {
				if (data.length > 0) {
					setStudents(data);
					setLoading(false);
				} else {
					throw new Error(
						"I'm afraid, there's no such house in Hogwarts, honey"
					);
				}
			})
			.catch((err) => {
				setLoading(false);
				setErrorMessage(err.message);
			});
	}, [name]);

	useEffect(() => {
		if (!loading) setLoading(true);
		if (errorMessage) setErrorMessage(null);
		fetchHouseStudents();
	}, [fetchHouseStudents]);

	return (
		<>
			<h2>Welcome to {name && name.charAt(0).toUpperCase() + name.slice(1)}</h2>
			{loading ? (
				<CircularProgress />
			) : errorMessage ? (
				<p>{errorMessage}</p>
			) : (
				students &&
				students.length > 0 && (
					<Grid container spacing={2}>
						{students.map((student: IHouseStudent) => (
							<Grid item xs={12} md={6} lg={4}>
								{student.name}
							</Grid>
						))}
					</Grid>
				)
			)}
		</>
	);
};
