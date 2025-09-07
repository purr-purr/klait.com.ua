import Contacts from '@modules/home/components/Contacts';
import Intro from '@modules/home/components/Intro';
import Events from '@modules/home/components/Events';

const Home = () => {
	return (
		<>
			<Intro/>
			<Events/>
			<Contacts/>
		</>
	);
};

export default Home;
