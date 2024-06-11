import PropTypes from 'prop-types'
// import { useReduxState } from '../../redux-manager'
import { useSelector } from 'react-redux';
import { selectCurrentPlayer, selectDraw, selectWin } from '../../selectors';
import { InformationLayout } from './information-layout'


export const InformationContainer = () => {

	// const {draw, win, currentPlayer } = useReduxState()

	const currentPlayer = useSelector(selectCurrentPlayer)
	const draw = useSelector(selectDraw)
	const win = useSelector(selectWin)


	const info = win
		? `Победил: ${currentPlayer} !!!`
		: draw
			? `= Ничья =`
			: `Ходит: ${currentPlayer}`;

	return <InformationLayout info={info} />;
};

InformationContainer.propTypes = {
	drw: PropTypes.string,
	win: PropTypes.string,
	currentPlayer: PropTypes.string,
};
