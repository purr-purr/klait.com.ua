import { FC, MouseEventHandler, ReactNode, useEffect, useState } from 'react';

import cn from 'classnames';
import { useKeenSlider } from 'keen-slider/react';

import useMediaQuery from '@modules/common/hooks/useMediaQuery';

import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from '@utils/const';

import s from './Slider.module.scss';

const ArrowButton = (props: {
	disabled: boolean;
	left?: boolean;
	onClick: MouseEventHandler;
}) => {
	return (
		<button
			onClick={props.onClick}
			className={cn(
				s.arrow,
				props.left && s[`arrow--left`],
				props.disabled && s.disabled,
			)}
		/>
	);
};

const Slider: FC<{
	className?: string;
	children?: ReactNode;
	moveToSlide?: number;
	isTabChanged?: boolean;
}> = ({ children, moveToSlide, className, isTabChanged }) => {
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
	const isTablet = useMediaQuery(TABLET_BREAKPOINT);
	const [currentSlide, setCurrentSlide] = useState(0);
	const [loaded, setLoaded] = useState(false);

	const sliderInitOptions = {
		initial: moveToSlide ?? 0,
		slideChanged(slider: any) {
			setCurrentSlide(slider.track.details.rel);
		},
		created() {
			setLoaded(true);
		},
		breakpoints: {
			'(max-width: 1024px)': {
				slides: {
					perView: 2,
					spacing: 15,
				},
			},
			'(max-width: 600px)': {
				slides: {
					perView: 1,
					spacing: 15,
				},
			},
		},
		slides: {
			perView: 3,
			spacing: 15,
		},
	};
	const [sliderRef, instanceRef] =
		useKeenSlider<HTMLUListElement>(sliderInitOptions);

	const currentSlideCount = isMobile
		? currentSlide + 1
		: isTablet
		? currentSlide + 2
		: currentSlide * 2;
	const getSlidesTotalCount = instanceRef.current?.track.details.slides.length;
	const nextButtonDisabled = currentSlideCount === getSlidesTotalCount;

	useEffect(() => {
		instanceRef.current?.update(
			{
				...sliderInitOptions,
				slideChanged(slider) {
					setCurrentSlide(slider.track.details.rel);
				},
			},
			0,
		);
	}, [isTabChanged]);

	return (
		<>
			<ul className={cn(className, 'keen-slider')} ref={sliderRef}>
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
};

export default Slider;
