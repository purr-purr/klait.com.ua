import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import cn from 'classnames';

import LOGO_WHITE from '@public/assets/logo--white.png';
import LOGO from '@public/assets/logo.png';

import s from './Logo.module.scss';

const Logo: FC<{
	onClick?: () => void;
	isWhiteLogo?: boolean;
	className?: string;
}> = ({ isWhiteLogo = false, onClick, className }) => {
	return (
		<Link
			onClick={onClick}
			href="/"
			className={cn(s.container, className && className)}
		>
			<Image src={isWhiteLogo ? LOGO_WHITE : LOGO} alt="logo" />
		</Link>
	);
};

export default Logo;
