import styled from 'styled-components'
const axios = require('axios');

/**
 * Creates the Styles for the GetData Button
 */
const DataButton = styled.button`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap');

    width: 200px;
    height: 50px;
    border-radius: 10rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 800;
    transition: background-color 30ms ease-out 100ms;

    /*The resulting background color will be based on the bg props.*/
    background-color: ${props => props.backgroundColor};

    /*The resulting text-color will be based on the color props.*/
    color: ${props => props.color};
    margin: 20px;

    &:hover {
    background-color: black;
    color: white;
    transition: all .3s;
    animation: shake 0.82s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    transform: translate3d(0,0,0);
    perspective: 1000px;
    }

    @keyframes shake {
        10%, 90% {
        transform: translate3d(-1px, 0, 0);
        }
        20%, 80% {
        transform: translate3d(2px, 0, 0);
        }
  
        30%, 50%, 70% {
        transform: translate3d(-2px, 0, 0);
        }
        40%, 60% {
        transform: translate3d(2px, 0, 0);
        }
    }
`;



/**
 * An Array with the information required to render the DataButton
 */
const ButtonList = [
    {id:"1",    text: "Get Moisture Data",      route:"https://plantinfo-api.netlify.app/.netlify/functions/moisture"},
    {id:"2",    text: "Get Temperature Data",   route:"https://plantinfo-api.netlify.app/.netlify/functions/temperature"},
    {id:"3",    text: "Get Humidity Data",      route:"https://plantinfo-api.netlify.app/.netlify/functions/humidity"}
]


/**
 * This Function returns DataButtons
 */
function RouteButton() {
    return (
       <div>
           {ButtonList.map(( {id, text, route}) => (
           <DataButton backgroundColor="white" color="black" key={id} onClick={() => 
               
            ">{text}</DataButton>
           ))}
       </div>
    );
}





export default RouteButton;