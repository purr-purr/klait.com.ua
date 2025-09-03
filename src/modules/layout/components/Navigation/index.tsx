import { useContext, useEffect } from 'react';
import Link from 'next/link';

import { HeaderContext } from '@modules/layout/context/HeaderContext';
import cn from 'classnames';

import { navigationList } from '@utils/data';
import type { INavigationList } from '@utils/types';

import s from './Navigation.module.scss';

const Navigation = () => {
	const {
		isMobileNavMode,
		handleMobileNavMode
	} = useContext(HeaderContext);

	useEffect(() => {
		const element = document.querySelector('html');

		if (element) {
			element.setAttribute(
				'style',
				`${isMobileNavMode ? `overflow:hidden;` : ``}`
			);
		}
	}, [isMobileNavMode]);

	return isMobileNavMode && (
		<ul className={cn(s.container, isMobileNavMode && s.active)}>
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
	);
};

export default Navigation;
