import GryffindorLogo from '../assets/houseLogos/gryffindor.jpg';
import HufflepuffLogo from '../assets/houseLogos/hufflepuff.jpg';
import RavenclawLogo from '../assets/houseLogos/ravenclaw.jpg';
import SlytherinLogo from '../assets/houseLogos/slytherin.jpg';

interface IHouses {
	title: string;
	url: string;
	icon: string;
}

export const houses: IHouses[] = [
	{ title: 'Gryffindor', url: '/houses/gryffindor', icon: GryffindorLogo },
	{ title: 'Hufflepuff', url: '/houses/hufflepuff', icon: HufflepuffLogo },
	{ title: 'Ravenclaw', url: '/houses/ravenclaw', icon: RavenclawLogo },
	{ title: 'Slytherin', url: '/houses/slytherin', icon: SlytherinLogo },
];
