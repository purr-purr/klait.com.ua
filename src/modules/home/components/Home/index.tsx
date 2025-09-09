import Contacts from '@modules/home/components/Contacts';
import Intro from '@modules/home/components/Intro';
import Events from '@modules/home/components/Events';
import About from '@modules/home/components/About';
import Approach from '@modules/home/components/Approach';
import Schedule from '@modules/home/components/Schedule';
import Price from '@modules/home/components/Price';

const Home = () => {
	return (
		<>
			<Intro/>
			<About/>
			<Approach/>
			<Schedule/>
			<Price/>
			<Events/>
			<Contacts/>
		</>
	);
};

export default Home;
