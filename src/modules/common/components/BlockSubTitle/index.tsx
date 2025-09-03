import { FC } from 'react';

import s from './BlockSubTitle.module.scss';

const BlockSubTitle: FC<{
	title: string;
}> = ({ title }) => {
	return <h4 className={s.container}>{title}</h4>;
};

export default BlockSubTitle;
