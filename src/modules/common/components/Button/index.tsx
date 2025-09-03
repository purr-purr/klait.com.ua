import { createElement, FC, FormEvent } from 'react';

import cn from 'classnames';

import s from './Button.module.scss';

const Button: FC<{
	text: string;
	type?: 'primary' | 'white' | 'light' | 'text';
	size?: 'small' | 'regular';
	elementType?: 'input' | 'button';
	isFormSubmit?: boolean;
	className?: string;
	onClick?: (e: FormEvent) => void;
	isDisabled?: boolean;
}> = ({
	isDisabled = false,
	onClick,
	text,
	type = 'primary',
	size = 'regular',
	className,
	elementType = 'button',
	isFormSubmit = false,
}) => {
	const commonProps = {
		disabled: isDisabled,
		type: isFormSubmit ? 'submit' : 'button',
		onClick,
		className: cn(s.container, s[type], s[size], className && className),
	};

	if (elementType === 'input') {
		return createElement('input', {
			...commonProps,
			name: 'file',
			type: 'file',
		});
	}

	return createElement('button', { ...commonProps }, text);
};

export default Button;
