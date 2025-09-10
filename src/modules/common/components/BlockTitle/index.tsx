import { createElement, FC } from "react";
import s from "./BlockTitle.module.scss";
import cn from 'classnames';

const BlockTitle: FC<{
	title: string;
	isHighlighted?: boolean;
	highlightCount?: 1 | 2;
	size?: 'large' | 'medium';
	className?: string;
}> = ({
	title,
	isHighlighted = true,
	highlightCount = 1,
	size = 'medium',
	className
}) => {
	const words = title.trim().split(" ");
	const highlightWords = isHighlighted ? words.slice(-highlightCount) : [];
	const normalWords = isHighlighted ? words.slice(0, -highlightCount) : words;
	const htmlTag = size === 'large' ? 'h1' : 'h2';

	return createElement(
		htmlTag,
		{className: cn(s.container, s[`container--${size}`], className)},
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
