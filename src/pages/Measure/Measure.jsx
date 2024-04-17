import React from 'react'
import { Step, Stepper, Typography } from "@mui/material";
import { measure } from './constant';
import { Background, Container, PageTitle } from './style';
import MeasureNavbar from '../../components/MeasureNavbar/MeasureNavbar';

const Measure = () => {
  return (
    <>
    <Background>
        <Container> 
            <PageTitle>{measure}</PageTitle>
            <MeasureNavbar />
        </Container>
    </Background>
    </>
  )
}

export default Measure
