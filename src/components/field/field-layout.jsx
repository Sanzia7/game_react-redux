import PropTypes from 'prop-types'
import { GetPath } from '../../utils/get-path'
import style from './field.module.css'

export const FieldLayout = ({ field, onClick}) => (
		<div className={style.field}>
			{field.map((cell, idxCell) => (
				<button
					key={idxCell}
					className={style.cell}
					onClick={() => onClick(idxCell)}
				>
					{cell && GetPath(cell)}
				</button>
			))}
		</div>
	)


FieldLayout.propTypes = {
	field: PropTypes.array,
	onClick: PropTypes.func,
}
