import s from './Documents.module.scss';
import Contacts from '@modules/home/components/Contacts';
import BlockContainer from '@modules/layout/components/BlockContainer';
import BlockTitle from '@modules/common/components/BlockTitle';
import DocumentsList from '@modules/documents/components/DocumentsList';
import { documents } from '@data/documents';

const Documents = () => {

	return (
		<>
			<article className={s.container}>
				<BlockTitle className={s.title} title="Збірка необхідних документів"
				            size="large"/>

				<DocumentsList list={documents}/>
			</article>

			<BlockContainer isBlueBackground>
				<Contacts/>
			</BlockContainer>
		</>

	);
}

export default Documents;
