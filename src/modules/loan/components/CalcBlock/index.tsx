import Calc from '@modules/calc/components/Calc';
import InnerFrame from '@modules/common/components/InnerFrame';

import s from './CalcBlock.module.scss';

const CalcBlock = () => {
	return (
		<InnerFrame id="calc" className={s.container}>
			<h2 className={s.title}>Кредити для фізичних осіб</h2>
			<Calc />
		</InnerFrame>
	);
};

export default CalcBlock;
