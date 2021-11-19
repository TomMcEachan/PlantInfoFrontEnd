import RouteButton from "./RouteButton"
import styled from "styled-components"

const AppHeader = styled.h1`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap');
    font-weight: bolder;
    color: black;
    margin-left: 25px;
`;

const MenuContainer = styled.div `
    background-color: white;


`


function Header() {
    return (
       <MenuContainer>
           <AppHeader>Plant Info</AppHeader>
           <p>This app gets data from the PlantInfo API and displays it</p>
           <RouteButton />
       </MenuContainer>
    )
}


export default Header;