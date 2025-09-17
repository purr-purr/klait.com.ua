import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Logo from '@modules/common/components/Logo';
import BlockContainer from '@modules/layout/components/BlockContainer';
import Navigation from '@modules/layout/components/Navigation';
import { HeaderContextWrapper } from '@modules/layout/context/HeaderContext';
import cn from 'classnames';

import useMediaQuery from '@modules/common/hooks/useMediaQuery';

import {
	COMPANY_ADDRESS,
	COMPANY_DISPLAYED_PHONE,
	COMPANY_MAP_LINK,
	COMPANY_PHONE,
	COMPANY_SCHEDULE,
	TABLET_BREAKPOINT,
} from '@utils/const';

import s from './Header.module.scss';

const Header = () => {
	const isMobile = useMediaQuery(TABLET_BREAKPOINT);
	const [scrollTop, setScrollTop] = useState<number>(0);
	const router = useRouter();
	const scrollTopGap = isMobile ? 20 : 100;
	const isWhiteHeader = scrollTop > scrollTopGap || router.pathname !== '/';

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
			<Logo />

			<HeaderContextWrapper>
				{!isMobile && (
					<div className={s.contacts}>
						<a
							className={s.contactsAddress}
							href={COMPANY_MAP_LINK}
							target="_blank"
							rel="noreferrer"
						>
							{COMPANY_ADDRESS}
						</a>

						<div>
							<a
								className={s.contactsPhone}
								href={`tel:${COMPANY_PHONE}`}
								target="_blank"
								rel="noreferrer"
							>
								{COMPANY_DISPLAYED_PHONE}
							</a>
							<p>{COMPANY_SCHEDULE}</p>
						</div>
					</div>
				)}
				<Navigation />
			</HeaderContextWrapper>
		</BlockContainer>
	);
};

export default Header;
