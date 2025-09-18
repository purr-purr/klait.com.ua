import { FC, useState } from 'react';

import { events } from '@data/events';
import BlockHeader from '@modules/common/components/BlockHeader';
import BlockTitle from '@modules/common/components/BlockTitle';
import Button from '@modules/common/components/Button';
import EventCard from '@modules/forTeachers/components/EventCard';
import BlockContainer from '@modules/layout/components/BlockContainer';

import s from './EventsInfo.module.scss';

import 'keen-slider/keen-slider.min.css';
import ModalLayout from '@modules/common/components/ModalLayout';
import Slider from '@modules/common/components/Slider';
import cn from 'classnames';

import { COMPANY_CALLBACK_FORM } from '@utils/const';
import { openExternalLink } from '@utils/formatters';

import ICON_FOLDER from '../../assets/events-folder.png';
import ICON_TIME from '../../assets/events-time.png';

const EventsInfo: FC<{ isCarousel: boolean }> = ({ isCarousel = false }) => {
	const [openModal, setOpenModal] = useState<number | null>(null);
	const [isDisplayedFullList, setIsDisplayedFullList] = useState<boolean>(false);
	const [isFutureEvents, setIsFutureEvents] = useState<boolean>(true);
	const [isTabChanged, setTabChanged] = useState<boolean>(false);

	const parseDate = (date: string): Date => {
		const [day, month, year] = date.split('.').map(Number);
		return new Date(year, month - 1, day);
	};

	const today = new Date();

	const pastEvents = events
		.filter((event) => parseDate(event.date).getTime() < today.getTime())
		.sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());

	const futureEvents = events
		.filter((e) => parseDate(e.date) >= today)
		.sort((a, b) => parseDate(a.date).getTime() - parseDate(b.date).getTime());

	const userSortedEvents = isFutureEvents ? futureEvents : pastEvents;
	const eventsList = isDisplayedFullList
		? userSortedEvents
		: userSortedEvents.slice(0, 6);
	const isSeeMoreBtn = !isDisplayedFullList && userSortedEvents.length > 6;

	const handleTabButtonClick = (state: boolean) => {
		setIsFutureEvents(state);
		setTabChanged(!isTabChanged);
	};

	return (
		<BlockContainer
			containerClassName={cn(s.container, isCarousel && s[`container--large`])}
			innerClassName={s.inner}
		>
			<BlockHeader subTitle="Події">
				<BlockTitle title="Життя школи в кожній події" />
			</BlockHeader>

			<div className={s.tabs}>
				<Button
					icon={ICON_TIME}
					type="white"
					text="Найближчі події"
					onClick={() => handleTabButtonClick(true)}
					isActiveState={isFutureEvents}
				/>
				<Button
					icon={ICON_FOLDER}
					text="Минулі події"
					type="white"
					isActiveState={!isFutureEvents}
					onClick={() => handleTabButtonClick(false)}
				/>
			</div>

			{isCarousel ? (
				<Slider className={s.list} isTabChanged={isTabChanged}>
					{eventsList.map((item, index) => (
						<EventCard
							className="keen-slider__slide"
							key={item.title + index}
							item={item}
							index={index}
							setOpenModal={setOpenModal}
						/>
					))}
				</Slider>
			) : (
				<ul className={cn(s.listStatic)}>
					{eventsList.map((item, index) => (
						<EventCard
							className={s.listStaticItem}
							key={item.title + index}
							item={item}
							index={index}
							setOpenModal={setOpenModal}
						/>
					))}
				</ul>
			)}

			{eventsList.map((item, index) => (
				<ModalLayout
					key={index}
					isOpen={openModal === index}
					onClose={() => setOpenModal(null)}
				>
					<div dangerouslySetInnerHTML={{ __html: item.fullDesc }} />
					<Button
						className={s.modalButton}
						text="Записатись на зустріч"
						onClick={() => openExternalLink(COMPANY_CALLBACK_FORM)}
					/>
				</ModalLayout>
			))}

			{isSeeMoreBtn && !isCarousel && (
				<Button
					className={s.seeMoreButton}
					text="Дивитися більше"
					type="white"
					onClick={() => setIsDisplayedFullList(true)}
				/>
			)}
		</BlockContainer>
	);
};

export default EventsInfo;
