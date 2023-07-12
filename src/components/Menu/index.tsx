import { Link } from 'react-router-dom';

export const Menu = () => (
	<nav>
		<ul>
			<li>
				<Link to='/'>Home</Link>
			</li>
			<li>
				<Link to='/houses'>Houses</Link>
			</li>
			<li>
				<Link to='/staff'>Staff</Link>
			</li>
		</ul>
	</nav>
);
