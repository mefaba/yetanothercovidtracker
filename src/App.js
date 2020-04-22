import React from 'react';
import CardsUnit from './components/Cards/CardsUnit';
import { fetchRawdata } from './api/CovidApi';
import CountrySelector from './components/CountrySelector/CountrySelector';
import "./App.css"
import ChartUnit from './components/Chart/ChartUnit';
import HeaderUnit from './components/Header/HeaderUnit';

export default class App extends React.Component {
  state = {
    rawdata: {},
    countryData: {},
    country: 'Belgium',
  }

  async componentDidMount() {
    const rawdata = await fetchRawdata()
    /* console.log("componentDidMount: ", rawdata)
    console.log(rawdata.data.Global) */
    this.setState({ 
      rawdata: rawdata.data,
      countryData: rawdata.data.Global
    });
  }

  handleCountryChange = (country) => {
    if(country==="Global"){
      return this.setState({countryData:this.state.rawdata.Global})
    }
    const countryData = this.state.rawdata.Countries.find(x=>{
      return x.Country===country
    })
    this.setState({countryData:countryData})
    /* const data = await fetchData(country); */

    //this.setState({ data, country: country });
  }
  render() {
    return (
      <div className="App">
          <HeaderUnit/>
          <CardsUnit data={this.state.countryData}/>
          <CountrySelector handleCountryChange={this.handleCountryChange}/>
          <ChartUnit data={this.state.countryData}/>
      </div>
    )
  }
}

