import React, { useState,useEffect } from "react";
import { fetchCountries } from "../../api/CovidApi";

const CountrySelector = ({handleCountryChange}) => {
    const [countrylist, setCountrylist] = useState()

    useEffect(() => {
        const fetchAPI = async() =>{
            const apicountryList = await fetchCountries()
            setCountrylist(apicountryList)
        }
        fetchAPI()

    }, [])
    
    if(!countrylist){
        return <div>Loading</div>
    }
    /* console.log(countrylist) */
	return (
		<div className="mt-5">
            <select name="country-selector" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="Global">Global</option>
                {
                    countrylist.map((x,index)=>{
                        return <option key={index} value={x}>{x}</option>
                    })
                }
            </select>
		</div>
	);
};

export default CountrySelector;
