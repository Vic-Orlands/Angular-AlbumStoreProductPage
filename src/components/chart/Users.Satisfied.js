import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
import './App.css';

let CanvasJS = CanvasJSReact.CanvasJS;
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Satisfied extends Component {
	render() {
		const options = {
			animationEnabled: true,
			// title: {
			// 	text: 'Users Satisfaction'
			// },
			subtitles: [
				{
					text: '71% Positive',
					verticalAlign: 'center',
					fontSize: 24,
					dockInsidePlotArea: true
				}
			],
			data: [
				{
					type: 'doughnut',
					showInLegend: true,
					indexLabel: '{name}: {y}',
					yValueFormatString: "#,###'%'",
					dataPoints: [
						{ name: 'Unsatisfied', y: 5 },
						{ name: 'Very Unsatisfied', y: 31 },
						{ name: 'Very Satisfied', y: 40 },
						{ name: 'Satisfied', y: 17 },
						{ name: 'Neutral', y: 7 }
					]
				}
			]
		};
		return (
			<div className="chart">
				<h2>User's Satisfaction</h2>
				<CanvasJSChart
					options={options}
					/* onRef={ref => this.chart = ref} */
				/>
				{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
			</div>
		);
	}
}

export default Satisfied;
