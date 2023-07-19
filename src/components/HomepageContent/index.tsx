import { Link } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
import { HousesNavigation } from '../HousesNavigation';
import {
	ParallaxFirst,
	ParallaxSecond,
	ParallaxThird,
	ParallaxFourth,
	ContentContainer,
	ContentBox,
} from './styles';

export const HomepageContent = () => (
	<>
		<ParallaxFirst>
			<ContentContainer>
				<ContentBox bgcolor='text.secondary'>
					<h1>Welcome to Hogwarts!</h1>
					<p>
						Hello, our dear friends! Let us introduce our{' '}
						<strong>Hogwarts School of Witchcraft and Wizardry</strong>! It is a
						school of magic for witches and wizards between the ages of eleven
						and seventeen living in the United Kingdom, the Republic of Ireland
						and Scotland.
					</p>
				</ContentBox>
			</ContentContainer>
		</ParallaxFirst>
		<Box bgcolor='primary.main' color='text.secondary' py={6}>
			<Container>
				<p>
					Founded around the 9th century and 10th century by Godric Gryffindor,
					Rowena Ravenclaw, Helga Hufflepuff and Salazar Slytherin, Hogwarts was
					established in the Highlands of Scotland to educate young wizards and
					witches as well as to keep students safe from Muggle persecution.
					Theory has it that Rowena Ravenclaw came up with the name of Hogwarts
					after dreaming of a warty hog that led her to a cliff by a lake. Since
					then, Hogwarts educated most wizarding children with residence in
					Great Britain and Ireland, keeping its location hidden from other
					wizarding schools and Muggles.
				</p>
				<p>
					About 300 years after the school was founded, the Triwizard Tournament
					was established as an interscholastic competition among the three most
					prestigious magical schools in Europe: Hogwarts, Beauxbatons, and
					Durmstrang. The tournament continued for six centuries before being
					discontinued. An attempt was made in the 1994–1995 school year to
					revive the tournament, but the consequential death of Cedric Diggory
					resulted in its permanent discontinuation.
				</p>
			</Container>
		</Box>
		<ParallaxSecond>
			<ContentContainer>
				<ContentBox bgcolor='text.secondary'>
					<h2>Academics and traditions</h2>
					<p>
						Hogwarts is a coeducational, secondary boarding school, taking
						children from ages eleven to seventeen. Education at Hogwarts is not
						compulsory.
					</p>
				</ContentBox>
			</ContentContainer>
		</ParallaxSecond>
		<Box bgcolor='primary.main' color='text.secondary' py={6}>
			<Container>
				<p>
					According to the novels, admission to Hogwarts is selective, in that
					children who show magical ability will automatically gain a place, and
					squibs cannot attend the school as students (though they can work
					there in other roles, as Argus Filch does). A magical quill at
					Hogwarts detects the birth of magical children and writes their names
					into a large parchment book, but there is no admission test because
					"you are either magical or you are not". Every year, a teacher checks
					this book and sends a letter to the children who are turning eleven.
					Acceptance or refusal of a place at Hogwarts must be posted by 31
					July. The letter also contains a list of supplies like spell books,
					uniform, and other things that the student will need. The prospective
					student is expected to buy all the necessary materials, normally from
					shops in Diagon Alley, a concealed street near Charing Cross Road in
					London that can be found behind the wizarding pub, The Leaky Cauldron.
					Students who cannot afford their supplies can receive financial aid
					from the school, as happened with the young orphan Tom Riddle.
				</p>
			</Container>
		</Box>
		<ParallaxThird>
			<ContentContainer>
				<ContentBox bgcolor='text.secondary'>
					<h2>Houses</h2>
					<p>
						Hogwarts is divided into four houses, each bearing the last name of
						its founder: Godric Gryffindor, Salazar Slytherin, Rowena Ravenclaw
						and Helga Hufflepuff. Throughout the school year, the houses compete
						for the House Cup, gaining and losing points based on actions such
						as performance in class and rule violations. The house with the
						highest end-of-year total wins and has its colours displayed in the
						Great Hall for the following school year.
					</p>
					<p>
						You may learn more about each house and it's marvelous students,
						following the links below:
					</p>
					<HousesNavigation />
				</ContentBox>
			</ContentContainer>
		</ParallaxThird>
		<Box bgcolor='primary.main' color='text.secondary' py={6}>
			<Container>
				<p>
					Letters to Muggle-born witches and wizards, who may not be aware of
					their powers and are unfamiliar with the concealed wizarding world,
					are delivered in person by a member of Hogwarts staff, who then
					explains to the parents or guardians about magical society, and
					reassures them regarding this news. Though the school is in Great
					Britain, its catchment area is the wider British Isles, as Irish
					students can also attend.
				</p>
				<p>
					Each student is allowed to bring an owl, a cat or a toad. Along with
					the acceptance letter, first-year students are sent a list of required
					equipment which includes a wand, subject books, a standard size 2
					pewter cauldron, a set of brass scales, a set of glass or crystal
					phials, a kit of basic potion ingredients (for Potions), and a
					telescope (for Astronomy). The Hogwarts uniform consists of plain work
					robes in black, a plain black hat, a pair of protective gloves, and a
					black winter cloak with silver fastenings. Each uniform must contain
					the wearer's nametag. First years are not allowed a broomstick of
					their own, though an exception to this rule is made for Harry Potter
					in his first year after he demonstrates an excellent ability as a
					Seeker in Quidditch.
				</p>
			</Container>
		</Box>
		<ParallaxFourth>
			<ContentContainer>
				<ContentBox bgcolor='text.secondary'>
					<h2>Subjects and teachers</h2>
					<p>
						Hogwarts is divided into four houses, each bearing the last name of
						its founder: Godric Gryffindor, Salazar Slytherin, Rowena Ravenclaw
						and Helga Hufflepuff. Throughout the school year, the houses compete
						for the House Cup, gaining and losing points based on actions such
						as performance in class and rule violations. The house with the
						highest end-of-year total wins and has its colours displayed in the
						Great Hall for the following school year.
					</p>
					<Typography component='p' sx={{ position: 'relative', zIndex: 2 }}>
						You may learn more about our professors and other Hogwatrs staff{' '}
						<Link to='/staff'>HERE</Link>
					</Typography>
				</ContentBox>
			</ContentContainer>
		</ParallaxFourth>
	</>
);
