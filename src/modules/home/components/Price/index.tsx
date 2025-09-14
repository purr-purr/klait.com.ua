import s from './Price.module.scss';
import BlockTitle from '@modules/common/components/BlockTitle';
import BlockContainer from '@modules/layout/components/BlockContainer';
import BlockHeader from '@modules/common/components/BlockHeader';
import Button from '@modules/common/components/Button';

const Price = () => {
	const price = [
		{
			title: 'Навчання',
			price: '16 400 ГРН/МІС'
		},
		{
			title: 'Вступний внесок',
			price: '14 400 ГРН/РІК'
		}
	];

	const discounts = [
		{
			amount: '10% + 30%',
			desc: 'На навчання і вступний внесок для дітей учасників бойових дій.'
		},
		{
			amount: '10%',
			desc: 'Для другої та кожної наступної дитини в родині.'
		},
		{
			amount: '5%',
			desc: 'При передоплаті за пів року (до 31.08 або 31.01).'
		}
	]
	return (
		<BlockContainer innerClassName={s.container} isBlueBackground
		                anchor="price">
			<BlockHeader subTitle="Вартість">
				<BlockTitle
					title="Вартість, що відповідає цінності"
				/>
			</BlockHeader>

			<article className={s.inner}>
				<div className={s.price}>
					<h4 className={s.title}>вартість</h4>
					<ul className={s.priceList}>
						{price.map(item => (
							<li key={item.title}>
								<p>{item.title}</p>
								<p><strong>{item.price}</strong></p>
							</li>
						))}
					</ul>
					<Button className={s.priceButton} text="Записатись на зустріч"
					        type="white"/>
				</div>

				<div className={s.discounts}>
					<h4 className={s.title}>Знижки та спеціальні умови</h4>
					<p className={s.titleDesc}>Знижки сумуються</p>

					<ul className={s.discountsList}>
						{discounts.map(item => (
							<li key={item.desc}>
								<h5><span>{item.amount}</span> знижки</h5>
								<p>{item.desc}</p>
							</li>
						))}
						<li>
							<Button text="Детальніше про умови" type="white"/>
						</li>
					</ul>
				</div>
			</article>
		</BlockContainer>
	);
};

export default Price;
