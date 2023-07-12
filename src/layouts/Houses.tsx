import { Link, Outlet } from 'react-router-dom';

export const Houses = () => (
	<>
		<h1>Phease follow to your common room</h1>
		<nav>
			<ul>
				<li>
					<Link to='/houses/gryffindor'>Gryffindor</Link>
				</li>
				<li>
					<Link to='/houses/hufflepuff'>Hufflepuff</Link>
				</li>
				<li>
					<Link to='/houses/ravenclaw'>Ravenclaw</Link>
				</li>
				<li>
					<Link to='/houses/slytherin'>Slytherin</Link>
				</li>
			</ul>
		</nav>

		<Outlet />
	</>
);
