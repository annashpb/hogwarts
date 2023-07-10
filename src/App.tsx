import { Routes, Route } from 'react-router-dom';
import Home from './layouts/Home';
import Houses from './layouts/Houses';
import Staff from './layouts/Staff';

const App = () => (
	<Routes>
		<Route path='/' element={<Home />} />
		<Route path='/houses' element={<Houses />} />
		<Route path='/staff' element={<Staff />} />
	</Routes>
);

export default App;
