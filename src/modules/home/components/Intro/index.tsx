import Image from 'next/image';

import { COMPANY_CATCHPHRASE, TABLET_BREAKPOINT } from '@utils/const';

import s from './Intro.module.scss';

import INTRO_IMAGE from '@modules/home/assets/intro-poster.jpg';
import INTRO_IMAGE_TABLET from '@modules/home/assets/intro-poster--mobile.jpg';
import BlockContainer from '@modules/layout/components/BlockContainer';
import Button from '@modules/common/components/Button';
import useMediaQuery from '@modules/common/hooks/useMediaQuery';

const Intro = () => {
	const isTablet = useMediaQuery(TABLET_BREAKPOINT);

	return (
		<BlockContainer containerClassName={s.container} innerClassName={s.inner}>
			<article className={s.info}>
				<h1 className={s.infoTitle}>Натхненний старт у
					велике <span>майбутнє</span></h1>
				<p className={s.infoDesc}>{COMPANY_CATCHPHRASE}</p>

				<Button text="Записатись на зустріч"/>
			</article>

			<Image
				className={s.poster}
				src={isTablet ? INTRO_IMAGE_TABLET : INTRO_IMAGE}
				alt="Home intro"
			/>
		</BlockContainer>
	);
};

export default Intro;
