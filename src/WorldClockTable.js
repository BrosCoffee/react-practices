import React from 'react'

const TableHeader = () => {
	return (
		<thead>
			<tr>
				<td>Location</td>
				<td>Time</td>
			</tr>
		</thead>
	)
}

const TableBody = (props) => {
	const rows = props.locationData.map((row, index) => {
		return (
			<tr key={index}>
				<td>{row.location}</td>
				<td>{row.time}</td>
			</tr>
		)
	})
	return <tbody>{rows}</tbody>
}

const Table = (props) => {
	const {locationData} = props

	return (
		<table>
			<TableHeader/>
			<TableBody locationData={locationData}/>
		</table>
	)
}

export default Table;