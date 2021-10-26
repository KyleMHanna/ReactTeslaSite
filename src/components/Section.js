import React from 'react'
import styled from "styled-components"


function Section({ title, description, leftButton, rightButton, backgroundImg }) {
  return (
    <Wrap bgImage={backgroundImg}>
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
      <DownArrow src="./public/images/arrow.svg" />
    </Wrap>
  )
}

export default Section


const Wrap = styled.div`
width: 100vw;
height: 100vh;
background: gray;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
display-flex: 0 0 auto;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-image: ${props => `url("/public/images/${props.bgImage}")`};
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

  `
const DownArrow = styled.img`
margin-top: 20px;
height: 40px;
`
const Buttons = styled.div`

  `