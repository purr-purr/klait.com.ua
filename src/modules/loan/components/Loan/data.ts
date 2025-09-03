import { importDoc } from '@utils/formatters';
import { IDocumentsList } from '@utils/types';

export const noticeDocs: IDocumentsList[] = [
	{
		title: 'Попередження про наслідки для споживача',
		link: importDoc('1.Poperedzhennia.pdf'),
	},
];

export const guideDocs: IDocumentsList[] = [
	{
		title:
			'Інструкція користування кредитним калькулятором з прикладом розрахунку',
		link: importDoc(
			'2.Instruktsiia korystuvannia kredytnym kalkuliatorom ta pryklady rozrakhunkiv.pdf',
		),
	},
];

export const essentialCharacteristics: IDocumentsList[] = [
	{
		title: 'Інформація про істотні характеристики кредиту до 8000 грн',
		link: importDoc(
			'3.Inform. pro istotn. kharakt. kredit_DOD1_ do 8000_MIKRO.KREDIT.pdf',
		),
	},
	{
		title: 'Інформація про істотні характеристики кредиту більше 8500 грн',
		link: importDoc(
			'4. Inform. pro istotn. kharakt. kredit_DOD2_ vid sumy 8500_SPOZH.KREDIT.pdf',
		),
	},
	{
		title: 'Інформації щодо отримання фізичною особою кредиту',
		link: importDoc('5.Inform. pro otryman. spozh.kredytu.pdf'),
	},
	{
		title: 'Паспорт споживчого кредиту',
		link: importDoc('6.Pasport spozhyvchoho kredytu TOV FORTEKS_FINANS.pdf'),
	},
	{
		title:
			'Примірний договір про надання кредиту (мікрокредит, споживчий кредит)',
		link: importDoc(
			'7.Dohovir pro nadannia kredytu TOV FORTEKS_FINANS vid 09.06.2025.pdf',
		),
	},
	{
		title: 'Правила надання коштів у кредит фізичним особам - споживачам',
		link: importDoc(
			'8.Pravyla nadannia koshtiv u kredyt (spozhyvch. kredytuvannia) TOV FORTEKS_FINANS vid 09.06.2025.pdf',
		),
	},
	{
		title: 'Ціни/тарифи',
		link: importDoc('9.Taryfy_kredyt_CALC.pdf'),
	},
];
