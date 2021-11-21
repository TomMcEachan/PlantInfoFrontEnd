import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { VictoryLine, VictoryBar, VictoryChart, VictoryTheme , VictoryAxis} from 'victory';


export default function TempChart() {

   //Creates State
   const [temps, setTemp] = useState([]);

   //Arrow function fetches data and passes data to state
   const getData = () => {
      axios({
         method: 'get',
         url: "https://plantinfo-api.netlify.app/.netlify/functions/temperature",
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
         domainPadding={10} padding={25}
         animate={{duration: 2000}}
         
      >
         <VictoryAxis 
            fixLabelOverlap 
            label="Published At"
            style={{
               tickLabels: {fill: "transparent", margin:[20]}
            }}
         />
         <VictoryAxis 
            dependentAxis
            label="Temperature"
            style={{
               tickLabels: {fill: "transparent", padding: "30px"}
            }}
         />
         <VictoryBar 
             style={{data: {fill: "#add8e6"}}}
             alignment="start"
             data={temps} 
             x="published" 
             y="temperature"
         />
         <VictoryLine 
            interpolation="natural"
            style={{data: {stroke: "#FF9300"}}}
            alignment="start"
            data={temps} 
            x="published" 
            y="temperature"
         />
      </VictoryChart>
   </div>
   );
}


