import s from './About.module.scss';
import BlockTitle from '@modules/common/components/BlockTitle';
import BlockContainer from '@modules/layout/components/BlockContainer';
import BlockHeader from '@modules/common/components/BlockHeader';
import Image from 'next/image';
import ICON_1 from '@modules/home/assets/about-icon-1.png';
import ICON_2 from '@modules/home/assets/about-icon-2.png';
import ICON_3 from '@modules/home/assets/about-icon-3.png';
import ICON_4 from '@modules/home/assets/about-icon-4.png';

const About = () => {
	const advantages = [
		{
			icon: ICON_1,
			title: 'Атмосфера',
			desc: 'Дружня атмосфера, де поважають дитину та її думку.'
		}, {
			icon: ICON_2,
			title: 'Інтеграції',
			desc: 'Інтеграція англійської мови та ІТ з перших років.'
		}, {
			icon: ICON_3,
			title: 'Методики',
			desc: 'Навчання ґрунтується на сучасних методиках, грі та дослідженні.'
		}, {
			icon: ICON_4,
			title: 'Співпраця',
			desc: 'Відкрита комунікація та партнерство з батьками для розвитку дитини.'
		}
	];

	return (
		<BlockContainer innerClassName={s.container} anchor="about">
			<BlockHeader subTitle="Про ліцей"/>

			<div className={s.inner}>
				<article className={s.intro}>
					<BlockTitle title="Простір, де навчання стає пригодою"
					            highlightCount={2}/>
					<p>Київський ліцей авіаційних та інформаційних технологій - це сучасна
						приватна школа початкової освіти в центрі Києва, де дитина
						почувається
						в безпеці, відчуває підтримку й отримує справжнє задоволення від
						навчання.</p>
				</article>

				<ul className={s.list}>
					{advantages.map(item => (
						<li key={item.title} className={s.listItem}>
							<Image src={item.icon} alt="icon" className={s.listIcon}/>
							<div className={s.listInfo}>
								<h4>{item.title}</h4>
								<p>{item.desc}</p>
							</div>
						</li>
					))}
				</ul>
			</div>
		</BlockContainer>
	);
};

export default About;
