// Write your Character component here
import React from "react";
import { Alert } from 'reactstrap';
import styled from 'styled-components'

const Characters = styled.span`
color:black;
`
const CharacterDescription = styled.ul`
 list-style:none;
 display:flex;
 justify-content:space-around;
 color:red;
 font-size:24px;
`

function CharacterCard(props){
    console.log(props)
    return(
   <div>
            {props.content.map((element, index) => {
              return <Characters key={index}>
              <h2>{element.name}</h2> 
            <CharacterDescription>
             <li>{`Birth Date:` + element["birth_year"]}</li>
             <li> {element["eye_color"]}</li>
             <li> {element["skin_color"]}</li>
             <li> {element.height}</li>
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