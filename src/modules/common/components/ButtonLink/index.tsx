import { FC } from 'react';
import Link from 'next/link';

import s from './ButtonLink.module.scss';

const ButtonLink: FC<{
	text: string;
	href: string;
}> = ({ text, href }) => {
	return (
		<Link href={href} className={s.container}>
			{text}
		</Link>
	);
};

export default ButtonLink;
