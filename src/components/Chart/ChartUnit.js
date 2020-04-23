import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import "./chart.css";
import { fetchDailyData } from "../../api/CovidApi";

const ChartUnit = ({ data, countryname }) => {

	const [dailydata, setDailydata] = useState({
		confirmedbyDay: [],
		deathsbyDay: [],
		daysbyDays: []
	});

	const { TotalConfirmed, TotalRecovered, TotalDeaths } = data;
	const country = data.Country || "Global";

	/* console.log("chartunit countryname:",countryname) */

	useEffect(() => {
		try {
			const fetchAPI = async () => {
				const value = await fetchDailyData(countryname);
				setDailydata({
					confirmedbyDay: value[0],
					deathsbyDay: value[1],
					daysbyDays: value[2]
				});
			};
			fetchAPI();
		} catch (error) {
			return console.log("chart unit useeffect error", error);
		}
	}, [countryname]);

	console.log(dailydata);

	return (
		<>
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

			<div className="chart-container">
				<Line
					data={{
						labels: dailydata.daysbyDays,
						datasets: [
							{
								data: dailydata.confirmedbyDay,
								label: "Infected",
								borderColor: "#3333ff",
								fill: true,
							},
							{
								data: dailydata.deathsbyDay,
								label: "Deaths",
								borderColor: "red",
								backgroundColor: "rgba(255, 0, 0, 0.5)",
								fill: true,
							},
						],
					}}
				/>
			</div>
		</>
	);
};
export default ChartUnit;
