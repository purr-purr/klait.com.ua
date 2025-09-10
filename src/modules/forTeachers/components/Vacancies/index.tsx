import s from './Vacancies.module.scss';
import BlockContainer from '@modules/layout/components/BlockContainer';
import BlockTitle from '@modules/common/components/BlockTitle';
import BlockHeader from '@modules/common/components/BlockHeader';
import Button from '@modules/common/components/Button';
import ModalLayout from '@modules/common/components/ModalLayout';
import { useState } from 'react';
import { vacancies } from '@data/vacancies';

const Vacancies = () => {
	const [openModal, setOpenModal] = useState<number | null>(null);

	return (
		<BlockContainer
			isBlueBackground
			containerClassName={s.container}
		>
			<BlockHeader subTitle="Вакансії">
				<BlockTitle title="Зростай разом із нами"/>
			</BlockHeader>

			<ul className={s.list}>
				{vacancies.map((item, index) => (
					<li key={item.title + index} className={s.item}>
						<h4 className={s.title}>{item.title}</h4>
						<p>{item.desc}</p>
						<Button
							text="Переглянути"
							type="text"
							className={s.button}
							onClick={() => setOpenModal(index)}
						/>

						<ModalLayout
							isOpen={openModal === index}
							onClose={() => setOpenModal(null)}
						>
							<div dangerouslySetInnerHTML={{__html: item.fullDesc}}/>
							<Button className={s.modalButton} text="Приєднатися до команди"/>
						</ModalLayout>
					</li>
				))}
			</ul>
		</BlockContainer>
	);
}

export default Vacancies;
