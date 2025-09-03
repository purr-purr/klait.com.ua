import Link from 'next/link';
import Image from 'next/image';

import s from './Logo.module.scss';
import LOGO from '@public/assets/logo.svg';

const Logo = () => {
	return (
		<Link href="/" className={s.container}>
			<Image src={LOGO} alt="logo"/>
		</Link>
	);
};

export default Logo;
