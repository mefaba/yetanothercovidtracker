import React from "react";
import { Bar } from "react-chartjs-2";
import "./chart.css"

const ChartUnit = ({ data }) => {
	const { TotalConfirmed, TotalRecovered, TotalDeaths } = data;
	const country = data.Country || "Global";
	return (
		<div className="chart-container">
			<Bar
				data={{
					labels: ["Infected", "Recovered", "Deaths"],
					datasets: [
						{
							label: "People",
							backgroundColor: ["rgba(0, 0, 255, 0.5)", "rgba(0, 255, 0, 0.5)", "rgba(255, 0, 0, 0.5)"],
							data: [TotalConfirmed, TotalRecovered, TotalDeaths],
						},
					],
				}}
				options={{
					legend: { display: false },
					title: { display: true, text: `Current state in ${country}` },
				}}
			/>
		</div>
	);
};
export default ChartUnit;
