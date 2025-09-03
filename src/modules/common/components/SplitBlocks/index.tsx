import { FC, type ReactNode } from 'react';

import BlockSubTitle from '@modules/common/components/BlockSubTitle';
import cn from 'classnames';

import s from './SplitBlocks.module.scss';

const SplitBlocks: FC<{
	children: ReactNode;
	title: string;
	subTitle?: string;
	anchor?: string;
	className?: string;
}> = ({ children, subTitle, title, anchor, className }) => {
	return (
		<article className={cn(s.container, className && className)} id={anchor}>
			<aside className={s.leftSide}>
				<h3 className={s.title}>{title}</h3>
				{subTitle && <BlockSubTitle title={subTitle} />}
			</aside>

			<div className={s.rightSide}>{children}</div>
		</article>
	);
};

export default SplitBlocks;
