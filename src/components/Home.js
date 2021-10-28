import React from 'react'
import styled from "styled-components"
import Section from './Section'
// import Header from './Header.js'
function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        leftButton="Custom order"
        rightButton="Existing Inventory"
        backgroundImg="model-s.jpg"
      />
      <Section
        title="Model Y"
        description="Buy Now"
        leftButton="Custom order"
        rightButton="Current Inventory"
        backgroundImg="model-y.jpg"
      />
      <Section
        title="Model X"
        description="Buy Now"
        leftButton="Order Online for Touchless Delivery"
        rightButton="Current Inventory"
        backgroundImg="model-x.jpg"
      />
      <Section
        title="Model 3"
        description="Buy Now"
        leftButton="Order Online for Touchless Delivery"
        rightButton="Current Inventory"
        backgroundImg="model-3.jpg"
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
height:100vh;
`