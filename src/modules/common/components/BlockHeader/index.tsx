import { FC, ReactNode } from 'react';

import s from './BlockHeader.module.scss';

const BlockHeader: FC<{
	children: ReactNode;
	subTitle: string;
}> = ({
	children,
	subTitle
}) => {
	return (
		<div className={s.container}>
			{children}
			<h3 className={s.subTitle}>{subTitle}</h3>
		</div>
	);
}

export default BlockHeader;
