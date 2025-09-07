import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Logo from '@modules/common/components/Logo';
import {
	HeaderContext,
	HeaderContextWrapper
} from '@modules/layout/context/HeaderContext';
import cn from 'classnames';

import { useMediaQuery } from '@modules/common/hooks';

import { MOBILE_BREAKPOINT } from '@utils/const';

import s from './Header.module.scss';
import Navigation from '@modules/layout/components/Navigation';
import BlockContainer from '@modules/layout/components/BlockContainer';

const Header = () => {
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
	const [scrollTop, setScrollTop] = useState<number>(0);
	const router = useRouter();
	const scrollTopGap = isMobile ? 20 : 100;
	const isWhiteHeader = scrollTop > scrollTopGap || router.pathname !== '/';

	const {
		isMobileNavMode
	} = useContext(HeaderContext);

	useEffect(() => {
		const handleScroll = () => {
			setScrollTop(window.scrollY);
		};
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<BlockContainer
			containerElementTag="header"
			containerClassName={cn(s.container, isWhiteHeader && s.active)}
			innerClassName={s.inner}
		>
			<Logo/>

			<HeaderContextWrapper>
				<Navigation/>
			</HeaderContextWrapper>
		</BlockContainer>
	);
};

export default Header;
