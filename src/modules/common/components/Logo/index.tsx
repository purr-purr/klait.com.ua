import Link from 'next/link';
import Image from 'next/image';

import s from './Logo.module.scss';
import LOGO from '@public/assets/logo.svg';
import LOGO_WHITE from '@public/assets/logo--white.svg';
import { FC } from 'react';
import cn from 'classnames';

const Logo: FC<{ isWhiteLogo?: boolean, className?: string }> = ({
	isWhiteLogo = false,
	className
}) => {
	return (
		<Link href="/" className={cn(s.container, className && className)}>
			<Image src={isWhiteLogo ? LOGO_WHITE : LOGO} alt="logo"/>
		</Link>
	);
};

export default Logo;
