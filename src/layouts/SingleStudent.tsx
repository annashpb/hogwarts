import { useParams } from 'react-router-dom';

export const SingleStudent = () => {
	const { id } = useParams();

	return <h1>Hello world! My name is student #{id}</h1>;
};
