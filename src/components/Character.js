// Write your Character component here
import React from "react";
import { Alert } from 'reactstrap';
import styled from 'styled-components'

const Characters = styled.div`
color:black;
`
const CharacterDescription = styled.ul`
display:flex;
justify-content:center;

 list-style:none;
 display:flex;
 color:#3A6BBF;
 background-color:black;
`
const NameButton = styled.button`
    background-color:#846D92;
    padding:10px;
    border-radius:10px;
    color:#58A2A7;
    font-size:20px;
`
const ListItem = styled.li`
    margin:10px;
`

function CharacterCard(props){
    console.log(props)
    return(
   <div>
            {props.content.map((element, index) => {
              return <Characters key={index}>
              <NameButton>{element.name}</NameButton> 
            <CharacterDescription>
                <ListItem>
                  <h3>Birth Year</h3>
                  <h4>{element["birth_year"]}</h4>
                </ListItem>
                <ListItem> 
                    <h3>Eye Color</h3>
                <h4>{element["eye_color"]}</h4>
                </ListItem>
                <ListItem>
                    <h3>Skin Color</h3> 
                   <h4>{element["skin_color"]}</h4>
                </ListItem>
                <ListItem> 
                    <h3>Height</h3>
                   <h4> {element.height} </h4>
                </ListItem>
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