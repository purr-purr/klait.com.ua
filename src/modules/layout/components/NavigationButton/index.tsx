import { useContext } from 'react';
import Image from 'next/image';

import { HeaderContext } from '@modules/layout/context/HeaderContext';
import CLOSE_ICON from '@public/assets/icon-menu-cross.svg';
import WHITE_OPEN_ICON from '@public/assets/icon-menu.svg';

import s from './NavigationButton.module.scss';
import cn from 'classnames';

const NavigationButton = () => {
	const {
		handleMobileNavMode,
		isMobileNavMode
	} = useContext(HeaderContext);
	return (
		<button
			className={cn(s.container, isMobileNavMode ? s[`container--close`] : s[`container--open`])}
			onClick={() => handleMobileNavMode(!isMobileNavMode)}
		>
			<Image src={isMobileNavMode ? CLOSE_ICON : WHITE_OPEN_ICON} alt="menu"/>
		</button>
	);
};

export default NavigationButton;
