import React from 'react'
import styled from "styled-components"


function Section({ title, description, leftButton, rightButton, backgroundImg }) {
  return (
    <Wrap bgImg={backgroundImg}>
      <ItemText>
        <h1> {title} </h1>
        <p>{description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>
            {leftButton}
          </LeftButton>
          <RightButton>
            {rightButton}
          </RightButton>
        </ButtonGroup>
      </Buttons>
      <DownArrow src="/images/arrow.svg" />
    </Wrap>
  )
}

export default Section


const Wrap = styled.div`

width: 100vw;
height: 100vh;
background: gray;
background-size: cover;
background-position: center center;
display: flex;

flex-direction: column;
justify-content: space-between;
align-items: center;
background-image: ${props => `url("/images/${props.bgImg}")`}
`

const ItemText = styled.div`
padding: top: 15vh;
text-align: center;
`

const ButtonGroup = styled.div`
display: flex;
margin-bottom: 30px
  `
const LeftButton = styled.div`
background-color: rgba(23, 36, 32, 0.8);
height: 40px;
width: 256px;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.85;
text-transform: uppercase;
font-size: 12px;
cursor: pointer;
margin: 8px;
`
const RightButton = styled(LeftButton)`
background-color: white;
opacity: 0.65;
color: black;
  `
const DownArrow = styled.img`
margin-top: 20px;
height: 40px;
animation: animateDown infinite 1.5s;
`
const Buttons = styled.div`

  `
