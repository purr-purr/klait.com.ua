import { FC, type ReactNode } from 'react';

import cn from 'classnames';

import s from './InnerFrame.module.scss';

const InnerFrame: FC<{
	children: ReactNode;
	className?: string;
	id?: string;
}> = ({ children, className, id }) => {
	return (
		<section id={id} className={cn(s.container, className && className)}>
			{children}
		</section>
	);
};

export default InnerFrame;
