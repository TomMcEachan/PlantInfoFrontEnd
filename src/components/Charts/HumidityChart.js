import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {VictoryLine, VictoryChart, VictoryTheme , VictoryAxis} from 'victory';

export default function HumidChart() {

   //Creates State
   const [temps, setTemp] = useState([]);

   //Arrow function fetches data and passes data to state
   const getData = () => {
      axios({
         method: 'get',
         url: "https://plantinfo-api.netlify.app/.netlify/functions/humidity",
      })
      .then(res => {
         console.log(res.data);
         const tempData = res.data;
         setTemp(tempData);
      })
      .catch(error =>  {
         console.log(error)
      })
   };

   useEffect(() => getData(), []);

   //Renders the data from the API as a Line Chart

   
   return(
   <div>
      <VictoryChart theme={VictoryTheme.material} domainPadding={40} padding={30}>
         <VictoryAxis fixLabelOverlap 
            label="Published At"
         />
         <VictoryAxis dependentAxis
            label="Humidity"
         />
         <VictoryLine 
         padding={{top: 20, bottom: 60}}
         style={{data: {stroke: "#17C420"}}}
         alignment="start"
         data={temps} 
         x="published" 
         y="humidity"/>
      </VictoryChart>
   </div>
   );
}