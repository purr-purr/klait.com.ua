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
}> = ({
	children,
	containerClassName,
	innerClassName,
	isBlueBackground = false,
	containerElementTag = 'section',
	innerElementTag = 'div'
}) => {
	return createElement(
		containerElementTag,
		{
			className: cn(isBlueBackground && s.container, containerClassName && containerClassName)
		},
		createElement(
			innerElementTag,
			{
				className: cn(s.inner, innerClassName && innerClassName)
			},
			children
		)
	);
};

export default BlockContainer;
