import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

import cn from 'classnames';

import s from './Button.module.scss';

const Button: FC<{
	text: string;
	type?: 'primary' | 'white' | 'text';
	className?: string;
	onClick?: () => void;
	isActiveState?: boolean;
	icon?: StaticImageData;
}> = ({
	onClick,
	text,
	type = 'primary',
	className,
	isActiveState = false,
	icon,
}) => {
	return (
		<button
			onClick={onClick}
			className={cn(
				s.container,
				s[type],
				className,
				icon && s.icon,
				isActiveState && s.active,
			)}
		>
			{icon && <Image className={s.icon} src={icon} alt="icon" />}
			{text}
		</button>
	);
};

export default Button;
