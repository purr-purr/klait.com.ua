import { createElement, FC, FormEvent } from 'react';

import cn from 'classnames';

import s from './Button.module.scss';

const Button: FC<{
	text: string;
	type?: 'primary' | 'white' | 'text';
	className?: string;
	onClick?: (e: FormEvent) => void;
}> = ({
	onClick,
	text,
	type = 'primary',
	className
}) => {
	const commonProps = {
		onClick,
		className: cn(s.container, s[type], className && className)
	};

	return createElement('button', {...commonProps}, text);
};

export default Button;
