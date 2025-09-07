import { createElement, FC } from 'react';

import s from './BlockTitle.module.scss';

const BlockTitle: FC<{
	title: string;
	isHighlighted?: boolean;
}> = ({
	title,
	isHighlighted = true
}) => {
	const titleWithoutLastWord = title.trim().split(" ").slice(0, -1).join(" ");
	const lastWord = " " + title.trim().split(" ").pop();
	const lastElement = createElement('span', {className: s.highlight}, lastWord);

	return createElement(
		"h2",
		{className: s.container},
		isHighlighted ? titleWithoutLastWord : title,
		isHighlighted && lastElement
	);
};

export default BlockTitle;
