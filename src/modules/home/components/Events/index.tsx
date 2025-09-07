import s from './Events.module.scss';
import {
	COMPANY_ADDRESS,
	COMPANY_MAP_LINK,
	COMPANY_PHONE,
	COMPANY_SCHEDULE
} from "@utils/const";
import BlockTitle from '@modules/common/components/BlockTitle';
import BlockContainer from '@modules/layout/components/BlockContainer';
import BlockHeader from '@modules/common/components/BlockHeader';

const Events = () => {
	return (
		<BlockContainer innerClassName={s.container}>
			<BlockHeader subTitle="Події">
				<BlockTitle title="Життя школи в кожній події"/>
			</BlockHeader>

			<div className={s.inner}>
				<article className={s.info}>
					<dl className={s.infoInner}>
						<dt>Контактний телефон</dt>
						<dd>{COMPANY_PHONE}</dd>
						<br/>
						<dt>Графік роботи</dt>
						<dd>{COMPANY_SCHEDULE}</dd>
						<br/>
						<dt>Адреса</dt>
						<dd>{COMPANY_ADDRESS}</dd>
					</dl>
				</article>

				<div className={s.map}>
					<iframe
						className={s.mapFrame}
						src={COMPANY_MAP_LINK}
						allowFullScreen={true}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					/>
				</div>
			</div>
		</BlockContainer>
	);
};

export default Events;
