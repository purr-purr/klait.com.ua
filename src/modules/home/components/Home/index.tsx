import EventsInfo from '@modules/forTeachers/components/EventsInfo';
import About from '@modules/home/components/About';
import Approach from '@modules/home/components/Approach';
import Contacts from '@modules/home/components/Contacts';
import Intro from '@modules/home/components/Intro';
import Price from '@modules/home/components/Price';
import Schedule from '@modules/home/components/Schedule';

const Home = () => {
	return (
		<>
			<Intro />
			<About />
			<Approach />
			<Schedule />
			<Price />
			<EventsInfo isCarousel />
			<Contacts />
		</>
	);
};

export default Home;
