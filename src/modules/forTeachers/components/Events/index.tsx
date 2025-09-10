import s from './Events.module.scss';
import BlockContainer from '@modules/layout/components/BlockContainer';
import BlockTitle from '@modules/common/components/BlockTitle';
import BlockHeader from '@modules/common/components/BlockHeader';

import Button from '@modules/common/components/Button';
import ModalLayout from '@modules/common/components/ModalLayout';
import { useState } from 'react';
import Image from 'next/image';
import EVENT_POSTER from '../../assets/events-photo.png';
import { events } from '@data/events';

const EventsPage = () => {
	const [openModal, setOpenModal] = useState<number | null>(null);

	return (
		<BlockContainer
			containerClassName={s.container}
		>
			<BlockHeader subTitle="Події">
				<BlockTitle title="Життя школи в кожній події"/>
			</BlockHeader>

			<ul className={s.list}>
				{events.map((item, index) => (
					<li key={item.title + index} className={s.item}>
						<Image
							className={s.poster}
							src={item.poster || EVENT_POSTER}
							alt="event poster"
						/>
						<article className={s.inner}>
							<h4 className={s.title}>{item.title}</h4>
							<p className={s.desc}>{item.desc}</p>
							<footer className={s.footer}>
								<span className={s.date}>{item.date}</span>
								<Button
									text="Переглянути"
									type="text"
									className={s.button}
									onClick={() => setOpenModal(index)}
								/>
							</footer>
						</article>

						<ModalLayout
							isOpen={openModal === index}
							onClose={() => setOpenModal(null)}
						>
							<div dangerouslySetInnerHTML={{__html: item.fullDesc}}/>
							<Button className={s.modalButton} text="Приєднатися до команди"/>
						</ModalLayout>
					</li>
				))}
			</ul>
		</BlockContainer>
	);
}

export default EventsPage;
