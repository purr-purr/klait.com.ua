import BlockTitle from '@modules/common/components/BlockTitle';
import EventsInfo from '@modules/forTeachers/components/EventsInfo';
import Vacancies from '@modules/forTeachers/components/Vacancies';
import Contacts from '@modules/home/components/Contacts';
import BlockContainer from '@modules/layout/components/BlockContainer';

import s from './ForTeachers.module.scss';

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

				<p className={s.introDesc}>
					Ми шукаємо натхненних і професійних педагогів, які хочуть розвиватися,
					ділитися досвідом та створювати простір, де дітям цікаво вчитися. Разом ми
					формуємо сучасне освітнє середовище, де важливі як знання, так і емоційна
					підтримка.
				</p>
			</article>

			<Vacancies />

			<EventsInfo isCarousel={false} />

			<BlockContainer isBlueBackground>
				<Contacts />
			</BlockContainer>
		</>
	);
};

export default ForTeachers;
