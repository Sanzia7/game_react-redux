export const ACTION_TYPE = {
	SET_FIELD: 'SET_FIELD',
	SET_CURRENTPLAYER: 'SET_CURRENTPLAYER',
	SET_DRAW: 'SET_DRAW',
	SET_WIN: 'SET_WIN',
	RESET_GAME: 'RESET_GAME',
}

export const setField = (field) => ({
	type: ACTION_TYPE.SET_FIELD,
	payload: field,
})

export const setCurrentPlayer = (currentPlayer) => ({
	type: ACTION_TYPE.SET_CURRENTPLAYER,
	payload: currentPlayer,
})

export const setDraw = (draw) => ({
	type: ACTION_TYPE.SET_DRAW,
	payload: draw,
})

export const setWin = (win) => ({
	type: ACTION_TYPE.SET_WIN,
	payload: win,
})



export const RESET_GAME = {
	type: ACTION_TYPE.RESET_GAME,
}









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
