import styled from "@emotion/styled";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Stack,
  StepConnector,
  StepLabel,
  Typography,
  stepConnectorClasses,
} from "@mui/material";



export const Background = styled(Box)(({ theme }) => ({
    backgroundColor: theme.secondary.Background,
    // backgroundColor:"red",
    // height: "100%",
    // width: "100%",
    // display: "flex",
    // overflowX: "auto",
    marginLeft:"250px",
    marginTop:"80px",
  }));

export const Container = styled(Box)(({ theme }) => ({
    // display: "flex",
    overflowX: "auto",
    marginTop:"35px",
    padding:"35px",
    // display:'block',
    fontFamily:theme.typography.fontFamily
  }));

export const PageTitle = styled(Box)(({theme}) => ({
  fontWeight: "700",
  fontSize:"22px",
  // display:"block",
  lineHeight:"36.08px",
  fontFamily:theme.typography.fontFamily
}));