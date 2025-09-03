import Accordion from '@modules/common/components/Accordion';
import DocumentsList from '@modules/common/components/DocumentsList';
import CalcBlock from '@modules/loan/components/CalcBlock';
import {
	essentialCharacteristics,
	guideDocs,
	noticeDocs,
} from '@modules/loan/components/Loan/data';

import s from './Loan.module.scss';

const Loan = () => {
	return (
		<div className={s.container}>
			<CalcBlock />

			<Accordion title="Попередження про наслідки для споживача">
				<DocumentsList list={noticeDocs} />
			</Accordion>

			<Accordion title="Інструкція користування кредитним калькулятором з прикладом розрахунку">
				<DocumentsList list={guideDocs} />
			</Accordion>

			<Accordion title="Інформація про істотні характеристики кредиту та інші документи">
				<DocumentsList list={essentialCharacteristics} />
			</Accordion>
		</div>
	);
};

export default Loan;
