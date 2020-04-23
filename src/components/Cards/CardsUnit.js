import React from "react";
import "./cards.css";
import CountUp from 'react-countup';

const CardsUnit = ({ data }) => {
	const {TotalConfirmed, TotalRecovered, TotalDeaths } = data;
    const recordedDate = data.Date || Date.now()
    /* console.log(data) */
    if(TotalConfirmed === undefined){
        return <div>Loading</div>
    }
	return (
		<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3  gap-2 mx-20 mt-10">
			<div className="infected max-w-md rounded overflow-hidden shadow-lg">
				<div className="px-6 py-4">
					<div className="text-xl mb-2">Infected</div>
					<div className="font-bold text-xl mb-2">
                       <CountUp start={0} end={TotalConfirmed} duration={2.75} />
                    </div>
					<div className="text-l mb-2">{new Date(recordedDate).toDateString()}</div>
					<p className="text-gray-700 text-base">Number of active cases of COVID-19.</p>
				</div>
			</div>
			<div className="recovered max-w-md rounded overflow-hidden shadow-lg">
				<div className="px-6 py-4">
					<div className="text-xl mb-2">Recovered</div>
					<div className="font-bold text-xl mb-2">
                    <CountUp start={0} end={TotalRecovered} duration={2.75} /></div>
					<div className="text-l mb-2">{new Date(recordedDate).toDateString()}</div>
					<p className="text-gray-700 text-base">Number of recoviries from COVID-19.</p>
				</div>
			</div>
			<div className="deaths max-w-md rounded overflow-hidden shadow-lg">
				<div className="px-6 py-4">
					<div className="text-xl mb-2">Deaths</div>
					<div className="font-bold text-xl mb-2">
                    <CountUp start={0} end={TotalDeaths} duration={2.75} /></div>
					<div className="text-l mb-2">{new Date(recordedDate).toDateString()}</div>
					<p className="text-gray-700 text-base">Number of deaths caused by COVID-19.</p>
				</div>
			</div>
		</div>
	);
};

export default CardsUnit;
