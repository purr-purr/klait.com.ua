import { FC, MouseEventHandler, ReactNode, useState } from 'react';

import s from './Slider.module.scss';
import cn from 'classnames';
import { KeenSliderInstance, useKeenSlider } from 'keen-slider/react';
import useMediaQuery from '@modules/common/hooks/useMediaQuery';
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from '@utils/const';

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
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
	const isTablet = useMediaQuery(TABLET_BREAKPOINT);
	const [currentSlide, setCurrentSlide] = useState(0);
	const [loaded, setLoaded] = useState(false);
	const [sliderRef, instanceRef] = useKeenSlider<HTMLUListElement>({
		initial: moveToSlide ?? 0,
		slideChanged(slider) {
			console.log(`slide`, slider)
			setCurrentSlide(slider.track.details.rel);
		},
		created(slider) {
			onInstance?.(slider);
			setLoaded(true)
		},
		breakpoints: {
			'(max-width: 1024px)': {
				slides: {
					perView: 2,
					spacing: 15
				}
			},
			'(max-width: 600px)': {
				slides: {
					perView: 1,
					spacing: 15
				}
			}
		},
		slides: {
			perView: 3,
			spacing: 15
		}
	})

	const currentSlideCount = isTablet ? currentSlide + 2 : isMobile ? currentSlide + 1 : currentSlide * 2;

	// const nextButtonDisabled2 = currentSlide * 2 === instanceRef.current?.track.details.slides.length
	const getSlidesTotalCount = instanceRef.current?.track.details.slides.length;
	// const c = (instanceRef.current?.track?.details?.slides.length ?? 0) - 1;
	const nextButtonDisabled = currentSlideCount === getSlidesTotalCount;
	console.log(``, currentSlideCount, getSlidesTotalCount);
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
						disabled={nextButtonDisabled}
					/>
				</nav>
			)}
		</>
	);
}

export default Slider;
