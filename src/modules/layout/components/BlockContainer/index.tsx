import { createElement, FC, ReactNode } from "react";
import s from "./BlockContainer.module.scss";
import cn from "classnames";

const BlockContainer: FC<{
	children: ReactNode;
	containerClassName?: string;
	innerClassName?: string;
	isBlueBackground?: boolean;
	containerElementTag?: string;
	innerElementTag?: string;
	anchor?: string;
}> = ({
	children,
	containerClassName,
	innerClassName,
	isBlueBackground = false,
	containerElementTag = 'section',
	innerElementTag = 'div',
	anchor
}) => {
	return createElement(
		containerElementTag,
		{
			className: cn(isBlueBackground && s.container, containerClassName),
			id: anchor
		},
		createElement(
			innerElementTag,
			{
				className: cn(s.inner, innerClassName)
			},
			children
		)
	);
};

export default BlockContainer;
