import Link from 'next/link';
import Image from 'next/image';

import s from './Logo.module.scss';
import LOGO from '@public/assets/logo.png';
import LOGO_WHITE from '@public/assets/logo--white.png';
import { FC } from 'react';
import cn from 'classnames';

const Logo: FC<{
	onClick?: () => void,
	isWhiteLogo?: boolean,
	className?: string
}> = ({
	isWhiteLogo = false,
	onClick,
	className
}) => {
	return (
		<Link onClick={onClick} href="/"
		      className={cn(s.container, className && className)}>
			<Image src={isWhiteLogo ? LOGO_WHITE : LOGO} alt="logo"/>
		</Link>
	);
};

export default Logo;
