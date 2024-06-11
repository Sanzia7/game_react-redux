//import { useState } from 'react';
//import { field as initilalField } from './utils/field';
//import * as check from './utils/check';
//import { useDispatch } from './redux-manager'
import { useDispatch } from 'react-redux'
import { RESET_GAME } from './actions'
import { GameLayout } from './game-layout'


export const Game = () => {
	const dispatch = useDispatch()

	const handleReset = () => {
		dispatch(RESET_GAME)
	}

	return <GameLayout handleReset={handleReset} />
}

//export const Game = () => {
	//const [field, setField] = useState(initilalField);
	// const [currentPlayer, setCurrentPlayer] = useState('X');
	// const [win, setWin] = useState(false);
	// const [draw, setDraw] = useState(false);

// 	const handleClick = (idxCell) => {
// 		if (field[idxCell] || win || draw) return;
//
// 		const newField = field.map((cell, idx) => (idx === idxCell ? currentPlayer : cell));
//
// 		setField(newField);
//
// 		if (check.isWin(newField, currentPlayer)) {
// 			setWin(true);
// 			return;
// 		}
// 		if (check.isDraw(newField)) {
// 			setDraw(true);
// 			return;
// 		}
//
// 		setCurrentPlayer((prev) => (prev === 'X' ? 'O' : 'X'));
// 	};

	// const handleReset = () => {
	// 	setField(initilalField);
	// 	setWin(false);
	// 	setDraw(false);
	// 	setCurrentPlayer('X');
	// };

// 	return (
// 		<GameLayout
// 			props={{ handleReset, handleClick }}
// 		/>
// 	);
// };
