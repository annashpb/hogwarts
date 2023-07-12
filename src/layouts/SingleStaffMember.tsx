import { useParams } from 'react-router-dom';

export const SingleStaffMember = () => {
	const { id } = useParams();

	return <h1>A staff member #{id} will teach your child how to stay safe</h1>;
};
