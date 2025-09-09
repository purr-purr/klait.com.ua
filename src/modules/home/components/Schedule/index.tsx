import s from './Schedule.module.scss';
import BlockTitle from '@modules/common/components/BlockTitle';
import BlockContainer from '@modules/layout/components/BlockContainer';
import BlockHeader from '@modules/common/components/BlockHeader';

const Schedule = () => {
	const schedule = [
		{
			title: 'Зустріч учнів',
			time: '08:00 - 08:15'
		},
		{
			title: 'Ранкове коло',
			time: '08:15 - 08:30'
		},
		{
			title: 'Сніданок',
			time: '08:30 - 08:45'
		},
		{
			title: '3 уроки з перервою: Математика, Українська, Sport Max',
			time: '08:45 - 11:15'
		},
		{
			title: 'Велика перерва. Прогулянка. Активності на свіжому повітрі',
			time: '11:15 - 11:45'
		},
		{
			title: 'Урок: Творча майстерня / Художня студія / Орф-музика',
			time: '11:50 - 12:35'
		},
		{
			title: 'Обід',
			time: '12:35 - 13:00'
		},
		{
			title: '2 уроки з перервою: English, IT / Я дослідник, EQ',
			time: '13:05 - 14:45'
		},
		{
			title: 'Рефлексія',
			time: '14:45 - 15:00'
		},
		{
			title: 'Прогулянка. Активності на свіжому повітрі',
			time: '15:00 - 15:30'
		},
		{
			title: 'Полуденок',
			time: '15:30 - 15:40'
		},
		{
			title: 'Студії: Секції / Speaking Club / Музичні вистави',
			time: '15:40 - 17:30'
		}
	];

	return (
		<BlockContainer innerClassName={s.container}>
			<BlockHeader subTitle="Розклад">
				<BlockTitle
					title="Знання, гра і відпочинок у балансі"
					highlightCount={2}
				/>
			</BlockHeader>

			<article className={s.inner}>
				<h4 className={s.title}>Наводимо приклад типового розкладу — він може
					змінюватися для різних класів</h4>
				<ul className={s.list}>
					{schedule.map(item => (
						<li key={item.title} className={s.listItem}>
							<p><span>{item.time}</span>{item.title}</p>
						</li>
					))}
				</ul>
			</article>
		</BlockContainer>
	);
};

export default Schedule;
