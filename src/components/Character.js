// Write your Character component here
import React from "react";
import { Alert } from 'reactstrap';
import styled from 'styled-components'

const Characters = styled.li`

`

function CharacterCard(props){
    console.log(props)
    return(
   <div>
        <ul>
            {props.content.map((element, index) => {
              return <Characters key={index}>
              <h2>{element.name}</h2> 
            <ul>
             <li> {element["birth_year"]}</li>
             <li> {element["eye_color"]}</li>
             <li> {element["skin_color"]}</li>
             <li> {element.height}</li>
            </ul>
            {element.starships}
             </Characters> 
            })}
        </ul>
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