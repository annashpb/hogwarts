import { useParams, Link } from 'react-router-dom';

export const SingleStaffMember = () => {
	const { id } = useParams();

	return (
		<>
			<h1>A staff member #{id} will teach your child how to stay safe</h1>
			<Link to='../'>Back to all the staff</Link>
		</>
	);
};
