import React, {Component} from 'react'
import styles from './Search.css'

export default class Search extends Component {
	// type=search helps with the (x) mark
	render() {
		return (
			<input type="search" id="search" placeholder="Filter (e.g. 'react graphQL')"
						 autoComplete="off" spellCheck="false"
						 className={styles.search} onChange={this.props.changeHandler} autoFocus="autofocus"/>
		)
	}
}
