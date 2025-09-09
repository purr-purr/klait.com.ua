import { APP_AUTHOR_SIGNATURE, APP_AUTHOR_WEBSITE } from '@utils/const';

import s from './Footer.module.scss';
import BlockContainer from '@modules/layout/components/BlockContainer';
import Logo from '@modules/common/components/Logo';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<BlockContainer
			innerClassName={s.container}
			isBlueBackground
			containerElementTag="footer"
		>
			<Logo className={s.logo}/>
			<p>Товариство з обмеженою відповідальністю <br/> «Київський ліцей
				авіаційних та інформаційних технологій» </p>
			<p>{currentYear}/ Всі права захищені</p>
			<p>
				Розробка сайту{' '}
				<a target="_blank" rel="noreferrer" href={APP_AUTHOR_WEBSITE}>
					{APP_AUTHOR_SIGNATURE}
				</a>
			</p>
		</BlockContainer>
	);
};

export default Footer;
