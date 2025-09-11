import { createElement, FC } from 'react';

import cn from 'classnames';

import s from './Button.module.scss';

const Button: FC<{
	text: string;
	type?: 'primary' | 'white' | 'text';
	className?: string;
	onClick?: () => void;
	isActiveState?: boolean;
}> = ({
	onClick,
	text,
	type = 'primary',
	className,
	isActiveState = false
}) => {
	const commonProps = {
		onClick,
		className: cn(s.container, s[type], className, isActiveState && s.active)
	};

	return createElement('button', {...commonProps}, text);
};

export default Button;
