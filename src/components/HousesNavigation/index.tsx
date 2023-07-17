import { List, Grid } from '@mui/material';
import { houses } from '../../helpers/houses';

import { HouseLink } from './styles';

export const HousesNavigation = () => (
	<nav>
		<Grid container component={List} spacing={2}>
			{houses.map((house) => (
				<Grid
					item
					key={`hogw-${house.title}-house`}
					component='li'
					xs={12}
					sm={6}
					md={3}
				>
					<HouseLink to={house.url}>
						<img
							src={house.icon}
							alt={`${house.title} logo`}
							width='30'
							height='30'
						/>
						{house.title}
					</HouseLink>
				</Grid>
			))}
		</Grid>
	</nav>
);
