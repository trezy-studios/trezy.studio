// Module imports
import classnames from 'classnames'
import { useMemo } from 'react'





// Local imports
import styles from './PageSection.module.scss'





export function PageSection(props) {
	const {
		alignment,
		children,
		useSmallGaps,
	} = props

	const compiledClassName = useMemo(() => {
		return classnames({
			[styles['page-section']]: true,
			[styles['align-left']]: alignment === 'left',
			[styles['align-right']]: alignment === 'right',
			[styles['use-small-gaps']]: useSmallGaps,
		})
	}, [alignment])

	return (
		<section className={compiledClassName}>
			{children}
		</section>
	)
}
