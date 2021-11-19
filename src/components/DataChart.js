import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';
import {ChartContainer} from "./Container"
import React from 'react';
import axios from 'axios';


export default class DataChart extends React.Component {
  
  state = {
    infos: []
  };

  componentDidMount() {
    axios.get("https://plantinfo-api.netlify.app/.netlify/functions/temperature")
      .then(res => {
        console.log(res);
        this.setState({info: res.data})
      });
  }
  
  render() {
   return(
   <ChartContainer backgroundColor="white">
    <LineChart width={800} height={500} data={this.state.infos}}>
    <Line type="monotone" dataKey="humidity" stroke="#17C420" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip/>
    </LineChart>
    </ChartContainer>
   )
  }
}
  

