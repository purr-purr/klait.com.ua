import s from './EventsSlider.module.scss';
import BlockContainer from '@modules/layout/components/BlockContainer';
import BlockTitle from '@modules/common/components/BlockTitle';
import BlockHeader from '@modules/common/components/BlockHeader';

import Button from '@modules/common/components/Button';
import { useState } from 'react';
import { events } from '@data/events';
import Carousel from 'nuka-carousel';
import Image from 'next/image';
import EVENT_POSTER from '@modules/forTeachers/assets/events-photo.png';
import ModalLayout from '@modules/common/components/ModalLayout';


const EventsSlider = () => {
	const [openModal, setOpenModal] = useState<number | null>(null);
	const [isDisplayedFullList, setIsDisplayedFullList] = useState<boolean>(false);
	const [isFutureEvents, setIsFutureEvents] = useState<boolean>(true);

	const parseDate = (date: string): Date => {
		const [day, month, year] = date.split(".").map(Number);
		return new Date(year, month - 1, day);
	};

	const today = new Date();

	const pastEvents = events
		.filter(event => parseDate(event.date).getTime() < today.getTime())
		.sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());

	const futureEvents = events
		.filter(e => parseDate(e.date) >= today)
		.sort((a, b) => parseDate(a.date).getTime() - parseDate(b.date).getTime());

	const userSortedEvents = isFutureEvents ? futureEvents : pastEvents;
	const eventsList = isDisplayedFullList ? userSortedEvents : userSortedEvents.slice(0, 6);
	const isSeeMoreBtn = !isDisplayedFullList && userSortedEvents.length > 6;


	const responsive = {
		0: {items: 1},
		568: {items: 2},
		1024: {items: 3}
	};

	// const items = [
	// 	<div className="item" data-value="1">1</div>,
	// 	<div className="item" data-value="2">2</div>,
	// 	<div className="item" data-value="3">3</div>,
	// 	<div className="item" data-value="4">4</div>,
	// 	<div className="item" data-value="5">5</div>
	// ];

	return (
		<BlockContainer
			containerClassName={s.container}
		>
			<BlockHeader subTitle="Події">
				<BlockTitle title="Життя школи в кожній події"/>
			</BlockHeader>

			<div className={s.tabs}>
				<Button
					text="Найближчі події"
					onClick={() => setIsFutureEvents(true)}
					isActiveState={isFutureEvents}
				/>
				<Button
					text="Минулі події"
					type="white"
					isActiveState={!isFutureEvents}
					onClick={() => setIsFutureEvents(false)}
				/>
			</div>


			<ul className={s.list}>

			</ul>


			<Carousel
				slidesToShow={3}
				renderBottomCenterControls={null}
				cellSpacing={12}
				adaptiveHeight
			>
				{eventsList.map((item, index) => (
					<div key={item.title + index} className={s.card}>
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
					</div>
				))}
			</Carousel>


		</BlockContainer>
	);
}

export default EventsSlider;
