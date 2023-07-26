import { useState, useEffect, useCallback } from 'react';

export const useFetch = (url: string, instance: string = 'instance') => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState('');

	const fetchHouseStudents = useCallback(() => {
		fetch(url)
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
					throw new Error('Oooooops, Muggle-Repelling charm in action');
				}
			})
			.then((data) => {
				if (data.length > 0) {
					setData(data);
					setLoading(false);
				} else {
					throw new Error(
						`I'm afraid, there's no such ${instance} in Hogwarts, honey`
					);
				}
			})
			.catch((err) => {
				setLoading(false);
				setErrorMessage(err.message);
			});
	}, [url]);

	useEffect(() => {
		if (!loading) setLoading(true);
		if (errorMessage) setErrorMessage('');
		fetchHouseStudents();
	}, [fetchHouseStudents]);

	return { data, loading, errorMessage };
};
