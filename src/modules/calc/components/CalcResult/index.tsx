import { FC } from 'react';

import { calcXIRR, formatDate } from '@utils/formatters';

import s from './CalcResult.module.scss';

const CalcResult: FC<{
	duration: number;
	moneyAmount: number;
}> = ({ duration, moneyAmount }) => {
	const addDays = (days: number) => {
		const currentDate = new Date();
		currentDate.setDate(currentDate.getDate() + days);
		return currentDate;
	};

	const amountOfInterest = () => {
		const result = moneyAmount * 0.99 * (duration / 365);
		return Number(result.toFixed(2));
	};

	function roundUpToDecimal(num: number) {
		let factor = Math.pow(10, 4);
		return Math.floor(num * factor) / factor;
	}

	const calcFinalDate = addDays(duration);
	const finalDate = formatDate(calcFinalDate as Date);
	const totalDebt = moneyAmount + amountOfInterest();
	const annualRate = 99;
	const dailyRate = roundUpToDecimal(annualRate / 365);
	const cashFlows = [-moneyAmount, totalDebt];
	const unixDates = [
		new Date().getTime() / 1000,
		calcFinalDate.getTime() / 1000,
	];
	const xirrValue = calcXIRR(cashFlows, unixDates);

	return (
		<div className={s.container}>
			<h3 className={s.title}>Результат розрахунку відповідно до обраних умов</h3>
			<table className={s.table}>
				<tbody>
					<tr>
						<td>Строк кредитування</td>
						<td>{duration} днів</td>
					</tr>

					<tr>
						<td>Дата погашення</td>
						<td>{finalDate}</td>
					</tr>

					<tr>
						<td>Сума кредиту</td>
						<td>{moneyAmount} грн</td>
					</tr>

					<tr>
						<td>Сума процентів</td>
						<td>{amountOfInterest()} грн</td>
					</tr>
					<tr>
						<td>Процентна ставка річних</td>
						<td>{annualRate},00%</td>
					</tr>
					<tr>
						<td>Загальні витрати за кредитом</td>
						<td>{amountOfInterest()} грн</td>
					</tr>

					<tr>
						<td>Орієнтовна загальна вартість кредиту</td>
						<td>{totalDebt} грн</td>
					</tr>

					<tr>
						<td>Реальна річна процентна ставка</td>
						<td>{xirrValue}% річних</td>
					</tr>
					<tr>
						<td>Денна процентна ставка</td>
						<td>{dailyRate}%</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default CalcResult;
