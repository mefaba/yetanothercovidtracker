/* import React, { Component } from "react"; */
import axios from "axios";

export const fetchRawdata = async (country) => {
	try {
		const rawdata = await axios.get("https://api.covid19api.com/summary");
		console.log("covidapi>fetchdata", rawdata.data);

		return rawdata;
	} catch (error) {
		return console.log("fetchRawdata error",error)
	}
};

export const fetchCountries = async () => {
	try {
		const { data } = await axios.get("https://api.covid19api.com/countries");
		/* console.log("fetchCountries",data) */
		const countryList = data.map((x) => x.Country);
		/* console.log(countryList) */
		return countryList;
	} catch (error) {
		return console.log("fetchCountries gave error", error);
	}
};

export const fetchDailyData = async (countryname="turkey") => {

    try {
      const {data}= await axios.get(`https://api.covid19api.com/dayone/country/${countryname}`);
      console.log("fetchDailyData Country Data",data)

      const confirmedbyDays = data.map(x=>{
          return x.Confirmed
      })
      const deathsbyDays = data.map(x=>{
        return x.Deaths
      })

      let daysbyDays = data.map(x=>{
          return x.Date
      })
      daysbyDays = daysbyDays.map(y=>{return new Date(y).toDateString()})

      return [confirmedbyDays, deathsbyDays, daysbyDays]

    } catch (error) {
      return error;
    }
  };
//https://api.covid19api.com/dayone/country/south-africa
