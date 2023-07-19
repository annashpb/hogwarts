import { useParams } from 'react-router-dom';

export const SingleHouse = () => {
	const { name } = useParams();

	return (
		<h2>Welcome to {name && name.charAt(0).toUpperCase() + name.slice(1)}</h2>
	);
};
