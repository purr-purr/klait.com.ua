import { useContext, useEffect, useRef } from 'react';
import Link from 'next/link';

import { navigationList } from '@data/navigation';
import Button from '@modules/common/components/Button';
import Logo from '@modules/common/components/Logo';
import NavigationButton from '@modules/layout/components/NavigationButton';
import { HeaderContext } from '@modules/layout/context/HeaderContext';
import cn from 'classnames';

import useMediaQuery from '@modules/common/hooks/useMediaQuery';

import {
	COMPANY_ADDRESS,
	COMPANY_CALLBACK_FORM,
	COMPANY_DISPLAYED_PHONE,
	COMPANY_MAP_LINK,
	COMPANY_PHONE,
	COMPANY_SCHEDULE,
	TABLET_BREAKPOINT
} from '@utils/const';
import type { INavigationList } from '@utils/types';

import s from './Navigation.module.scss';
import { openExternalLink } from '@utils/formatters';

const Navigation = () => {
	const isMobile = useMediaQuery(TABLET_BREAKPOINT);
	const {
		isMobileNavMode,
		handleMobileNavMode
	} = useContext(HeaderContext);

	useEffect(() => {
		const element = document.querySelector('html');

		if (element && isMobile) {
			element.setAttribute(
				'style',
				`${isMobileNavMode ? `overflow:hidden;` : ``}`
			);
		}
	}, [isMobileNavMode, isMobile]);

	const navRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (navRef.current && !navRef.current.contains(event.target as Node)) {
				handleMobileNavMode(false);
			}
		}

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	return (
		<>
			{!isMobileNavMode && <NavigationButton/>}

			{isMobileNavMode && (
				<nav ref={navRef}
				     className={cn(s.container, isMobileNavMode && s.active)}>
					<NavigationButton/>
					<Logo onClick={() => handleMobileNavMode(false)} isWhiteLogo/>

					<ul className={s.list}>
						{navigationList.map(
							(item: INavigationList) =>
								item.isActive && (
									<li key={item.title} className={s.box}>
										<Link
											key={item.title}
											href={item.path}
											className={s.link}
											onClick={() => handleMobileNavMode(false)}
										>
											{item.title}
										</Link>
									</li>
								)
						)}
					</ul>

					<div className={s.contacts}>
						<a href={`tel:${COMPANY_PHONE}`} target="_blank" rel="noreferrer">
							{COMPANY_DISPLAYED_PHONE}
						</a>
						<p>{COMPANY_SCHEDULE}</p>
						<a href={COMPANY_MAP_LINK} target="_blank" rel="noreferrer">
							{COMPANY_ADDRESS}
						</a>

						<Button
							className={s.contactsButton}
							onClick={() => openExternalLink(COMPANY_CALLBACK_FORM)}
							text="Записатись на зустріч"
							type="white"
						/>
					</div>
				</nav>
			)}
		</>
	);
};

export default Navigation;
