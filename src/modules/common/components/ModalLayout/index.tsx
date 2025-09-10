import { FC, ReactNode, useEffect } from 'react';
import Image from 'next/image';
import cn from 'classnames';

import ICON_CLOSE from '@public/assets/icon-close.svg';
import s from './ModalLayout.module.scss';

type ModalLayoutProps = {
	isOpen: boolean;
	onClose: () => void;
	children?: ReactNode;
	className?: string;
};

const ModalLayout: FC<ModalLayoutProps> = ({
	isOpen,
	onClose,
	children,
	className
}) => {
	useEffect(() => {
		const html = document.documentElement;
		const prev = html.style.overflow;
		if (isOpen) html.style.overflow = 'hidden';
		return () => {
			html.style.overflow = prev;
		};
	}, [isOpen]);

	if (!isOpen) return null;

	return (
		<div className={s.container} onClick={onClose}>
			<div
				className={s.inner}
				onClick={(e) => e.stopPropagation()}
				role="dialog"
				aria-modal="true"
			>
				<button className={s.close} onClick={onClose} aria-label="Close modal">
					<Image src={ICON_CLOSE} alt="Close"/>
				</button>

				<article className={cn(s.body, className)}>{children}</article>
			</div>
		</div>
	);
};

export default ModalLayout;
