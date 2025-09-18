import BlockHeader from '@modules/common/components/BlockHeader';
import BlockTitle from '@modules/common/components/BlockTitle';
import Button from '@modules/common/components/Button';
import BlockContainer from '@modules/layout/components/BlockContainer';

import {
	COMPANY_ADDRESS,
	COMPANY_CALLBACK_FORM,
	COMPANY_DISPLAYED_PHONE,
	COMPANY_MAP_EMBED_LINK,
	COMPANY_MAP_LINK,
	COMPANY_PHONE,
	COMPANY_SCHEDULE,
} from '@utils/const';
import { openExternalLink } from '@utils/formatters';

import s from './Contacts.module.scss';

const Contacts = () => {
	return (
		<BlockContainer innerClassName={s.container} isBlueBackground>
			<BlockHeader subTitle="Контакти">
				<BlockTitle title="Залишились питання?" isHighlighted={false} />
			</BlockHeader>

			<div className={s.inner}>
				<article className={s.info}>
					<dl className={s.infoInner}>
						<dt>Контактний телефон</dt>
						<br />
						<dd>
							<a href={`tel:${COMPANY_PHONE}`} target="_blank" rel="noreferrer">
								{COMPANY_DISPLAYED_PHONE}
							</a>
						</dd>
						<br />
						<dt>Графік роботи</dt>
						<br />
						<dd>{COMPANY_SCHEDULE}</dd>
						<br />
						<dt>Адреса</dt>
						<br />
						<dd>
							<a href={COMPANY_MAP_LINK} target="_blank" rel="noreferrer">
								{COMPANY_ADDRESS}
							</a>
						</dd>
					</dl>

					<Button
						text="Записатись на зустріч"
						onClick={() => openExternalLink(COMPANY_CALLBACK_FORM)}
					/>
				</article>

				<div className={s.map}>
					<iframe
						className={s.mapFrame}
						src={COMPANY_MAP_EMBED_LINK}
						allowFullScreen={true}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					/>
				</div>
			</div>
		</BlockContainer>
	);
};

export default Contacts;
