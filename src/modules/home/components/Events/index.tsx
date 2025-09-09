import s from './Events.module.scss';
import BlockTitle from '@modules/common/components/BlockTitle';
import BlockContainer from '@modules/layout/components/BlockContainer';
import BlockHeader from '@modules/common/components/BlockHeader';

const Events = () => {
	return (
		<BlockContainer innerClassName={s.container}>
			<BlockHeader subTitle="Події">
				<BlockTitle title="Життя школи в кожній події"/>
			</BlockHeader>

			Test
		</BlockContainer>
	);
};

export default Events;
