import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { VictoryLine, VictoryChart, VictoryTheme , VictoryAxis, VictoryTooltip} from 'victory';


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
      <VictoryChart theme={VictoryTheme.material} domainPadding={10} padding={80}>
         <VictoryAxis fixLabelOverlap 
            label="Published At"
         />
         <VictoryAxis dependentAxis
            label="Moisture"
         />
         <VictoryLine 
         labelComponent={<VictoryTooltip />}
         style={{data: {stroke: "blue"}}}
         alignment="start"
         data={temps} 
         x="published" 
         y="moisture"/>
      </VictoryChart>
   </div>
   );
}