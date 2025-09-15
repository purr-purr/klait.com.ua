import { FC, MouseEventHandler, ReactNode, useState } from 'react';

import s from './Slider.module.scss';
import cn from 'classnames';
import { KeenSliderInstance, useKeenSlider } from 'keen-slider/react';

const ArrowButton = (props: {
	disabled: boolean;
	left?: boolean;
	onClick: MouseEventHandler;
}) => {
	return (
		<button
			onClick={props.onClick}
			className={cn(s.arrow, props.left && s[`arrow--left`], props.disabled && s.disabled)}
		/>
	)
};

const Slider: FC<{
	className?: string;
	children?: ReactNode;
	moveToSlide?: number;
	onInstance?: (inst: KeenSliderInstance) => void;
}> = ({
	children,
	moveToSlide,
	onInstance,
	className
}) => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [loaded, setLoaded] = useState(false)
	const [sliderRef, instanceRef] = useKeenSlider<HTMLUListElement>({
		initial: moveToSlide ?? 0,
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel);
		},
		created(slider) {
			onInstance?.(slider);
			setLoaded(true)
		},
		slides: {
			perView: 3,
			spacing: 15
		}
	})

	return (
		<>
			<ul className={cn(className, "keen-slider")} ref={sliderRef}>
				{children}
			</ul>

			{loaded && instanceRef.current && (
				<nav className={s.navigation}>
					<ArrowButton
						left
						onClick={(event) => {
							event.stopPropagation();
							instanceRef.current?.prev();
						}}
						disabled={currentSlide === 0}
					/>

					<ArrowButton
						onClick={(event) => {
							event.stopPropagation();
							instanceRef.current?.next();
						}}
						disabled={
							currentSlide * 2 ===
							instanceRef.current.track.details.slides.length
						}
					/>
				</nav>
			)}
		</>
	);
}

export default Slider;
