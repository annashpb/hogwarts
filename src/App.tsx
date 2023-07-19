import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Houses } from './pages/Houses';
import { SingleHouse } from './pages/SingleHouse';
import { SingleStudent } from './pages/SingleStudent';
import { Staff } from './pages/Staff';
import { SingleStaffMember } from './pages/SingleStaffMember';
import { NotFound } from './pages/NotFound';
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
