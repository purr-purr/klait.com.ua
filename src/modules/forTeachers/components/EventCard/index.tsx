import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import s from "./EventCard.module.scss";
import Button from '@modules/common/components/Button';
import EVENT_POSTER from '@modules/forTeachers/assets/events-photo.png';
import cn from 'classnames';

export type EventItem = {
	title: string;
	poster?: string | StaticImageData | null;
	desc: string;
	fullDesc: string;
	date: string;
};

const EventCard: FC<{
	className?: string;
	item: EventItem;
	index: number;
	setOpenModal: (index: number | null) => void;
}> = ({
	item,
	index,
	setOpenModal,
	className
}) => {
	return (
		<li className={cn(s.container, className)}>
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
		</li>
	)
};

export default EventCard;
