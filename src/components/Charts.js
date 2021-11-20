import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';
import {ChartContainer} from "./Container"
import React from 'react';
import axios from 'axios';

let info;



const getData = () => {
   axios({
      method: 'get',
      url: "https://plantinfo-api.netlify.app/.netlify/functions/temperature",
      headers: {"Access-Control-Allow-Origin": "*"}
   })
   .then(res => 
      info = res.data)
   .then( res => 
      console.log(res.data)
      )
   };


function TempChart() {
  
   getData();
   return(
   <ChartContainer backgroundColor="white">
    <LineChart width={800} height={500} data={info}>
    <Line type="monotone" dataKey="temperature" stroke="#17C420" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="published" />
    <YAxis />
    <Tooltip/>
    </LineChart>
    </ChartContainer>
   )
 
}
 

export default TempChart;
