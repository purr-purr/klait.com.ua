import { createElement, FC } from 'react';

import s from './BlockTitle.module.scss';

const BlockTitle: FC<{
	title: string;
	isHighlighted: boolean;
}> = ({
	title,
	isHighlighted = true
}) => {
	const formatTitle = title;
	const textWithoutLastWord = title.trim().split(" ").slice(0, -1).join(" ");
	const lastWord = title.trim().split(" ").pop();
	const element = createElement('span', title)
	return <h2 className={s.container}>{formatTitle + ' ' + element}</h2>;
};

export default BlockTitle;
