import { FC, useEffect, useState } from 'react';

import Slider from '@mui/material/Slider';

import s from './CalcSliders.module.scss';

import type { ICalcRange, SlidesData } from '@modules/calc/types';

const CalcSliders: FC<{
	ranges: ICalcRange;
	isMidBorrow: boolean;
	onSlidesChange: (data: SlidesData) => void;
	minMoneyRage: number;
	slidesDataInitValue: SlidesData;
}> = ({
	ranges,
	isMidBorrow,
	onSlidesChange,
	minMoneyRage,
	slidesDataInitValue,
}) => {
	const [slidesData, setSlidesData] = useState<SlidesData>(slidesDataInitValue);

	const handleChange = (name: string, value: number) => {
		const updatedData = { ...slidesData, [name]: value };
		setSlidesData(updatedData);
		onSlidesChange(updatedData);
	};

	const { money, duration } = isMidBorrow
		? {
				money: ranges.money.midBorrow,
				duration: ranges.duration.midBorrow,
		  }
		: {
				money: ranges.money.default,
				duration: ranges.duration.default,
		  };

	useEffect(() => {
		setSlidesData(slidesDataInitValue);
		handleChange('amount', slidesDataInitValue.amount);
	}, [isMidBorrow]);

	return (
		<>
			<ul className={s.container}>
				<li>
					<p className={s.title}>Взяти {slidesData.amount} грн.</p>
					<Slider
						aria-label="amount"
						defaultValue={slidesData.amount}
						onChange={(event, value) => handleChange('amount', value as number)}
						step={500}
						min={minMoneyRage}
						max={money[1]}
						color="primary"
					/>
					<p className={s.range}>
						<span>{money[0]} грн.</span>
						<span>{money[1]} грн.</span>
					</p>
				</li>

				<li>
					<p className={s.title}>на {slidesData.duration} дн.</p>
					<Slider
						aria-label="duration"
						defaultValue={1}
						onChange={(event, value) => handleChange('duration', value as number)}
						step={1}
						min={duration[0]}
						max={duration[1]}
						color="primary"
					/>
					<p className={s.range}>
						<span>{duration[0]} день</span>
						<span>{duration[1]} днів</span>
					</p>
				</li>
			</ul>
		</>
	);
};

export default CalcSliders;
