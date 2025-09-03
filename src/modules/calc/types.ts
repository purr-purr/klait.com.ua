export interface ICalcRange {
	duration: { default: number[]; midBorrow: number[] };
	money: { default: number[]; midBorrow: number[] };
}

export interface SlidesData {
	amount: number;
	duration: number;
}
