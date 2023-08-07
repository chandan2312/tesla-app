import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';

function Section({title,leftBtnText,rightBtnText,description,backgroundImg}) {
  return (
    
    <Wrap bgImg={backgroundImg}>
        <Fade bottom>
        <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
        </ItemText>
        </Fade>

        <Buttons>
            <Fade bottom>
            <ButtonGroup>
            <LeftButton>
            {leftBtnText}
            </LeftButton>
                
            {rightBtnText && 
                        <RightButton>
                        {rightBtnText}
                        </RightButton>
            }
            </ButtonGroup>

            <DownArrow src="./images/down-arrow.svg"></DownArrow>
            </Fade>
        </Buttons>
    </Wrap>

  )
}

export default Section


const Wrap = styled.div`

width:100vw;
height:100vh;
background-image:url('/images/model-s.jpg');
background-size:cover;
background-position:center;
background-repeat:no-repeat;
display:flex;
flex-direction: column;
justify-content:space-between; 
align-items:center;
background-image: ${props => `url("images/${props.bgImg}")`}

`


const ItemText = styled.div`
    padding-top:15vh;
    text-align:center;
`
//Buttons ⬇️
const ButtonGroup = styled.div`
display:flex;
margin-bottom:30px;
font-weight:bold;
@media (max-width: 600px) {
    flex-direction: column;

}

`

const LeftButton = styled.div`
background-color: rgba(23,26,32, 0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-item:center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
font-size:12px;
cursor:pointer;
vertical-align: middle;
padding-top:14px;
margin-top:10px;
`

const RightButton = styled(LeftButton)`
 background-color: white;
 opacity:0.65;
 color:black;
`

const DownArrow = styled.img`
height:20px;
margin-top:10px;
margin-bottom:10px;
animation:animateDown infinite 1.5s;
overflow-x:hidden;
`

const Buttons = styled.div`

`