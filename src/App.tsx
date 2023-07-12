import { Routes, Route } from 'react-router-dom';
import { Home } from './layouts/Home';
import { Houses } from './layouts/Houses';
import { SingleHouse } from './layouts/SingleHouse';
import { SingleStudent } from './layouts/SingleStudent';
import { Staff } from './layouts/Staff';
import { SingleStaffMember } from './layouts/SingleStaffMember';
import { NotFound } from './layouts/NotFound';
import { Menu } from './components/Menu';
import { Container } from '@mui/material';

const App = () => (
	<>
		<Menu />
		<Container>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/houses' element={<Houses />}>
					<Route path=':name' element={<SingleHouse />} />
				</Route>
				<Route path='/student/:id' element={<SingleStudent />} />
				<Route path='/staff'>
					<Route index element={<Staff />} />
					<Route path=':id' element={<SingleStaffMember />} />
				</Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</Container>
	</>
);

export default App;
