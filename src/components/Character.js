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
              return <Characters key={index}>{element.name},{element["birth_year"]},{element["eye_color"]},{element["skin_color"]},{element.height}</Characters> 
            })}
        </ul>
   </div>
    )
}

export default CharacterCard;