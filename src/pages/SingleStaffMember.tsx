import { useParams, Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { ContentWrapper } from '../components/ContentWrapper';

interface IStaff {
	name: string;
}

export const SingleStaffMember = () => {
	const { id } = useParams();
	const { data, loading, errorMessage } = useFetch(
		`https://hp-api.onrender.com/api/character/${id}`,
		'staff member'
	);
	const staffMember: IStaff = data[0];

	return (
		<ContentWrapper loading={loading} errorMessage={errorMessage}>
			<>
				<Link to='../'>Back to all the staff</Link>
				<h1>{staffMember?.name} will teach your child how to stay safe</h1>
			</>
		</ContentWrapper>
	);
};
