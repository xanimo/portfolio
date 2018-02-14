import React, {Component} from 'react'

import styles from './Header.css'

export default class Header extends Component {
	render() {
		return(
			<div>
				<div className={styles.header}>
					<a className={styles.profileLink} href="http://dakoda.blue" target="_blank">Dakoda Blue Greaves</a>
				</div>
				<div className={styles.tagline}>
					Web Development & Design
				</div>
			</div>
		);
	}
}
