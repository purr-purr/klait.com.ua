import s from './Approach.module.scss';
import BlockTitle from '@modules/common/components/BlockTitle';
import BlockContainer from '@modules/layout/components/BlockContainer';
import BlockHeader from '@modules/common/components/BlockHeader';

const Approach = () => {
	const approachesList = [
		{
			title: 'Інтегровані предмети',
			desc: 'Ми поєднуємо різні дисципліни в одне ціле: математика вплітається в реальні задачі, мистецтво доповнює історію, англійська підтримує всі інші теми. Такий підхід формує цілісне бачення світу та готує до реального життя.'
		},
		{
			title: 'STEM-підходи',
			desc: 'Навчання, яке ґрунтується на сучасних методиках, грі та дослідженні. Учні вчаться ставити запитання, шукати відповіді, експериментувати, спостерігати та робити висновки.'
		},
		{
			title: 'Індивідуальність',
			desc: 'Ми підтримуємо сильні сторони кожної дитини та допомагаємо розкривати потенціал у власному темпі.'
		},
		{
			title: 'Дослідження',
			desc: 'Проводимо інтерактивні експерименти, створюємо гіпотези, робимо перші наукові проєкти.'
		},
		{
			title: 'Турбота',
			desc: 'Щоденні руханки, тепла атмосфера та увага до соціальних навичок формують впевнену, щасливу дитину.'
		}
	];

	return (
		<BlockContainer innerClassName={s.container} isBlueBackground
		                anchor="aproaches">
			<BlockHeader subTitle="Методики">
				<BlockTitle
					title="Сучасні підходи для яскравого майбутнього"
					highlightCount={2}
				/>
			</BlockHeader>

			<ul className={s.list}>
				{approachesList.map(item => (
					<li key={item.title} className={s.listItem}>
						<h4>{item.title}</h4>
						<p>{item.desc}</p>
					</li>
				))}
			</ul>
		</BlockContainer>
	);
};

export default Approach;
