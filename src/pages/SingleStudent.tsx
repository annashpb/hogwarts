import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { ContentWrapper } from '../components/ContentWrapper';

interface IStudent {
	name: string;
}

export const SingleStudent = () => {
	const { id } = useParams();
	const { data, loading, errorMessage } = useFetch(
		`https://hp-api.onrender.com/api/character/${id}`,
		'student'
	);
	const student: IStudent = data[0];

	return (
		<ContentWrapper loading={loading} errorMessage={errorMessage}>
			<h1>Hello world! My name is {student?.name}</h1>
		</ContentWrapper>
	);
};
