import { FC } from 'react';
import Link from 'next/link';

import Button from '@modules/common/components/Button';
import { v4 as uuidv4 } from 'uuid';

import { importDoc } from '@utils/formatters';
import type { IDocumentsList } from '@utils/types';

import s from './DocumentsList.module.scss';

const DocumentsList: FC<{
	list?: IDocumentsList[];
}> = ({ list }) => {
	const uuid: string = uuidv4();

	return (
		<ul className={s.container}>
			{list?.map((item: IDocumentsList, index: number) => (
				<li className={s.item} key={uuid + index}>
					<Link className={s.link} href={importDoc(item.link)} target="_blank">
						<span>{item.title}</span>
						<Button className={s.button} text="Переглянути" type="text" />
					</Link>
				</li>
			))}
		</ul>
	);
};

export default DocumentsList;
