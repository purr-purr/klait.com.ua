import s from './Schedule.module.scss';
import BlockTitle from '@modules/common/components/BlockTitle';
import BlockContainer from '@modules/layout/components/BlockContainer';
import BlockHeader from '@modules/common/components/BlockHeader';
import { schedule } from '@data/schedule';

const Schedule = () => {
	return (
		<BlockContainer containerClassName={s.container} innerClassName={s.inner}>
			<BlockHeader subTitle="Розклад">
				<BlockTitle
					title="Знання, гра і відпочинок у балансі"
					highlightCount={2}
				/>
			</BlockHeader>

			<article className={s.schedule}>
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
