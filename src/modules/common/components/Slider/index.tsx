import { FC, ReactNode, useState } from 'react';

import s from './Slider.module.scss';
import cn from 'classnames';
import { KeenSliderInstance, useKeenSlider } from 'keen-slider/react';

function Arrow(props: {
	disabled: boolean
	left?: boolean
	onClick: (e: any) => void
}) {
	const disabled = props.disabled ? "disabled" : ""
	return (
		<svg
			onClick={props.onClick}
			className={cn(s.arrow, `arrow ${
				props.left ? "arrow--left" : "arrow--right"
			}`, s[disabled])}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
		>
			{props.left && (
				<path
					d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/>
			)}
			{!props.left && (
				<path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
			)}
		</svg>
	)
}

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
				<>
					<Arrow
						left
						onClick={(e: any) =>
							e.stopPropagation() || instanceRef.current?.prev()
						}
						disabled={currentSlide === 0}
					/>

					<Arrow
						onClick={(e: any) =>
							e.stopPropagation() || instanceRef.current?.next()
						}
						disabled={
							currentSlide * 2 ===
							instanceRef.current.track.details.slides.length
						}
					/>
				</>
			)}

		</>
	);

}

export default Slider;
