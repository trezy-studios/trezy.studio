// Module imports
import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table'
import {
	useEffect,
	useMemo,
	useState,
} from 'react'
import { useStore } from 'statery'





// Local imports
import styles from './Dashboard.module.scss'

import { getGameKeys } from '../../store/helpers/getGameKeys.js'
import { store } from '../../store/store.js'
import { Table } from '../Table/Table.jsx'





// Constants
const COLUMN_HELPER = createColumnHelper()





/**
 * Renders a table cell.
 *
 * @component
 */
function mapVisibleCell(cell) {
	return (
		<td key={cell.id}>
			{flexRender(cell.column.columnDef.cell, cell.getContext())}
		</td>
	)
}

/**
 * Renders a table row.
 *
 * @component
 */
function mapRow(row) {
	return (
		<tr key={row.id}>
			{row.getVisibleCells().map(mapVisibleCell)}
		</tr>
	)
}





/**
 * Renders the summary of a user's accoutn in their dashboard.
 *
 * @component
 */
export function DashboardGameKeys() {
	const [isLoadingKeys, setIsLoadingKeys] = useState(false)

	const {
		applications,
		gameKeys,
	} = useStore(store)

	const COLUMNS = useMemo(() => [
		COLUMN_HELPER.accessor(
			/**
			 * @param {import('../../types/GameKey.js').GameKey} row The data row.
			 * @returns {string} The rendered application name.
			 */
			row => {
				if (applications) {
					return applications[row.appID].appName
				}
				return row.appID
			},
			{ id: 'appName' },
		),
		COLUMN_HELPER.accessor(
			/**
			 * @param {import('../../types/GameKey.js').GameKey} row The data row.
			 * @returns {string} The rendered application name.
			 */
			row => {
				return row.key
					.split('')
					.map(character => {
						if (/\w/u.test(character)) {
							return 'X'
						}

						return character
					})
					.join('')
			},
			{ id: 'key' },
		),
	], [applications])

	const tableManager = useReactTable({
		columns: COLUMNS,
		data: gameKeys ?? [],
		getCoreRowModel: getCoreRowModel(),
	})

	useEffect(() => {
		if (!gameKeys && !isLoadingKeys) {
			// eslint-disable-next-line promise/catch-or-return
			getGameKeys().then(() => {
				return setIsLoadingKeys(false)
			})
		}
	}, [
		gameKeys,
		isLoadingKeys,
		setIsLoadingKeys,
	])

	if (isLoadingKeys) {
		return (
			<div>
				{'Loading game keys...'}
			</div>
		)
	}

	if ((gameKeys === null) || !gameKeys.length) {
		return (
			<div>
				{'No keys available.'}
			</div>
		)
	}

	return (
		<div>
			<Table className={styles['game-key-table']}>
				<tbody>
					{tableManager.getRowModel().rows.map(mapRow)}
				</tbody>
			</Table>
		</div>
	)
}
