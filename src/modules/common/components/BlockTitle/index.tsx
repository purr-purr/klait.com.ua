// import { createElement, FC } from 'react';
//
// import s from './BlockTitle.module.scss';
//
// const BlockTitle: FC<{
// 	title: string;
// 	isHighlighted?: boolean;
// }> = ({
// 	title,
// 	isHighlighted = true
// }) => {
// 	const titleWithoutLastWord = title.trim().split(" ").slice(0, -1).join(" ");
// 	const lastWord = " " + title.trim().split(" ").pop();
// 	const lastElement = createElement('span', {className: s.highlight}, lastWord);
//
// 	return createElement(
// 		"h2",
// 		{className: s.container},
// 		isHighlighted ? titleWithoutLastWord : title,
// 		isHighlighted && lastElement
// 	);
// };
//
// export default BlockTitle;

import { createElement, FC } from "react";
import s from "./BlockTitle.module.scss";

const BlockTitle: FC<{
	title: string;
	isHighlighted?: boolean;
	highlightCount?: 1 | 2;
}> = ({
	title,
	isHighlighted = true,
	highlightCount = 1
}) => {
	const words = title.trim().split(" ");
	const highlightWords = isHighlighted ? words.slice(-highlightCount) : [];
	const normalWords = isHighlighted ? words.slice(0, -highlightCount) : words;

	return createElement(
		"h2",
		{className: s.container},
		normalWords.join(" "),
		isHighlighted &&
		createElement(
			"span",
			{className: s.highlight},
			" " + highlightWords.join(" ")
		)
	);
};

export default BlockTitle;
