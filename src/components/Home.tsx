import React from "react";
import styled from "styled-components";
import Section from "./Section";

export const Home = () => {
    return (
        <Container>
            <Section
                backgroundImg={"model-s.jpg"}
                description={"Order Online for Touchless Delivery"}
                title={"Model S"}
                leftBtnText={"Custom Order"} rightBtnText={"Existing Inventory"}
            />
            <Section
                backgroundImg={"model-y.jpg"}
                description={"Order Online for Touchless Delivery"}
                title={"Model Y"}
                leftBtnText={"Custom Order"} rightBtnText={"Existing Inventory"}
            />
            <Section
                backgroundImg={"model-3.jpg"}
                description={"Order Online for Touchless Delivery"}
                title={"Model 3"}
                leftBtnText={"Custom Order"} rightBtnText={"Existing Inventory"}
            />
            <Section
                backgroundImg={"model-x.jpg"}
                description={"Order Online for Touchless Delivery"}
                title={"Model X"}
                leftBtnText={"Custom Order"} rightBtnText={"Existing Inventory"}
            />
            <Section
                title={"Lowest Cost Solar Panels in America"}
                description={"Money-back guarantee"}
                backgroundImg={"solar-panel.jpg"}
                leftBtnText={"Order now"}
                rightBtnText={"Learn More"}
            />
            <Section
                title={"Solar for New Roofs"}
                description={"Solar Roof Costs Less than a New Roof Plus Solar Panels"}
                backgroundImg={"solar-roof.jpg"}
                leftBtnText={"Order now"}
                rightBtnText={"Learn More"}
            />
            <Section
                title={"Accessories"}
                description={""}
                backgroundImg={"accessories.jpg"}
                leftBtnText={"Shop Now"}
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
  height: 100vh;

`
