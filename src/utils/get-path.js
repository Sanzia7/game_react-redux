import PropTypes from 'prop-types'

export const GetPath = (cell) => {
	return cell === 'X' ? 'X' : 'O';
}

GetPath.propTypes = {
	cel: PropTypes.string,
}
