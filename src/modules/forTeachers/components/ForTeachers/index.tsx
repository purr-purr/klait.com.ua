import s from './ForTeachers.module.scss';
import Contacts from '@modules/home/components/Contacts';
import BlockContainer from '@modules/layout/components/BlockContainer';
import BlockTitle from '@modules/common/components/BlockTitle';
import Vacancies from '@modules/forTeachers/components/Vacancies';
import EventsPage from '@modules/forTeachers/components/Events';
import EventsSlider from '@modules/forTeachers/components/EventsSlider';

const ForTeachers = () => {
	return (
		<>
			<article className={s.intro}>
				<BlockTitle
					className={s.introTitle}
					title="Простір для тих, хто навчає з любов’ю"
					size="large"
					highlightCount={2}
				/>

				<p className={s.introDesc}>Ми шукаємо натхненних і професійних
					педагогів, які
					хочуть
					розвиватися, ділитися досвідом та створювати простір, де дітям цікаво
					вчитися. Разом ми формуємо сучасне освітнє середовище, де важливі як
					знання, так і емоційна підтримка.</p>
			</article>

			<Vacancies/>
			<EventsPage/>

			<br/>
			<br/>

			<EventsSlider/>

			<BlockContainer isBlueBackground>
				<Contacts/>
			</BlockContainer>
		</>

	);
}

export default ForTeachers;
