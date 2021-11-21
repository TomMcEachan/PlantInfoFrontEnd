import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { VictoryLine, VictoryBar, VictoryChart, VictoryTheme , VictoryAxis, VictoryTooltip} from 'victory';


export default function MoistureChart() {

   //Creates State
   const [temps, setTemp] = useState([]);

   //Arrow function fetches data and passes data to state
   const getData = () => {
      axios({
         method: 'get',
         url: "https://plantinfo-api.netlify.app/.netlify/functions/moisture",
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
      <VictoryChart theme={VictoryTheme.material} 
      domainPadding={30} padding={25}
      animate={{duration: 2000}}
      >
         <VictoryAxis fixLabelOverlap 
            label="Published At"
            style={{
               tickLabels: {fill: "transparent"}
            }}
         />
         <VictoryAxis dependentAxis
            label="Moisture"
            style={{
               tickLabels: {fill: "transparent"}
            }}
         />
         <VictoryBar 
             style={{data: {fill: "#add8e6"}}}
             alignment="start"
             data={temps} 
             x="published" 
             y="moisture"
         />

         <VictoryLine 
         interpolation="natural"
         labelComponent={<VictoryTooltip />}
         style={{data: {stroke: "#FF0000"}}}
         alignment="start"
         data={temps} 
         x="published" 
         y="moisture"/>
      </VictoryChart>
   </div>
   );
}