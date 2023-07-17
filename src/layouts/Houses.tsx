import { Outlet } from 'react-router-dom';
import { HousesNavigation } from '../components/HousesNavigation';

export const Houses = () => (
	<>
		<h1>Phease follow to your common room</h1>
		<p>
			Hogwarts is divided into four houses, each bearing the last name of its
			founder: Godric Gryffindor, Salazar Slytherin, Rowena Ravenclaw and Helga
			Hufflepuff.
		</p>
		<HousesNavigation />

		<Outlet />
	</>
);
