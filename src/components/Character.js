// Write your Character component here
import React from "react";
import { Alert } from 'reactstrap';
import styled from 'styled-components'

const Characters = styled.main`
color:black;
`
const CharacterDescription = styled.ul`
 list-style:none;
 display:flex;
 justify-content:space-around;
 color:red;
`
const NameButton = styled.button`
    background-color:blue;
    color:red;
`

function CharacterCard(props){
    console.log(props)
    return(
   <div>
            {props.content.map((element, index) => {
              return <Characters key={index}>
              <NameButton>{element.name}</NameButton> 
            <CharacterDescription>
                <li>
                  <h3>Birth Year</h3>
                  {element["birth_year"]}
                </li>
                <li> 
                    <h3>Eye Color</h3>
                 {element["eye_color"]}
                </li>
                <li>
                    <h3>Skin Color</h3> 
                    {element["skin_color"]}
                </li>
                <li> 
                    <h3>Height</h3>
                    {element.height}
                </li>
            </CharacterDescription>
             </Characters> 
            })}
   </div>
    )
}

export default CharacterCard;


// <h2>{element.name}</h2>
// <ul>
//     <li>{element["birth_year"]}</li>
//     <li>{element["eye_color"]}</li>
//     <li>{element["skin_color"]}</li>
//     <li>{element.height}</li>
// </ul>