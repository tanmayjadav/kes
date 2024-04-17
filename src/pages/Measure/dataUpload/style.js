import styled from "@emotion/styled";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Link,
} from "@mui/material";


export const Background = styled(Box)(({ theme }) => ({
  backgroundColor: theme.primary.white,
  position:"relative",
  borderRadius:"15px",
  display: "flex",
  boxShadow: `0px 20px 25px 0px ${theme.secondary.shadowShade} !important`,
 
}));

export const Container = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  padding:"30px", 
  "& .MuiTabPanel-root":{
    backgroundColor:"red"
  }
}))

export const IconsContainer = styled(Box)(({ theme }) => ({

  display:"flex",
  justifyContent: "flex-end", 
  overflowX: "auto",
  gap:"8px",
  marginBottom:"10px"
}))

export const TopBox = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  
}))
export const TopBoxTitle = styled(Box)(({ theme }) => ({
  lineHeight:"50px",
  fontSize:"30px",
  fontWeight:"700",
}))

export const TopBoxMiddleText = styled(Box)(({ theme }) => ({
  color:theme.secondary.whiteBlue600,
  lineHeight:"30px",
  fontSize:"18px",
  paddingTop:"15px",
  fontWeight:"400",
}))

export const TopBoxEndText = styled(Box)(({ theme }) => ({

  color:theme.secondary.whiteBlue600,
  lineHeight:"30px",
  fontSize:"18px",
  paddingTop:"10px",
  fontWeight:"400",
}))

export const HelpCenterLink = styled(Link)(({theme}) => ({
  textDecoration: "underline",
  color:theme.primary.main
}));

export const MinorContainer = styled(Box)(({ theme }) => ({
  marginTop:"10px"
}));

export const AccordianContainer = styled(Box)(({ theme }) => ({
    paddingTop:"40px",
}));


export const CustomAccordion = styled(Accordion)(({ theme }) => ({
  border:"none !important",
  boxShadow:"0 0 0 0",
  
  "& .MuiPaper-root ":{
    opacity:"0 !important",
    backgroundColor:"white !important"
  },
  '& .MuiButtonBase-root':{
    padding:"0",
    paddingBottom:"15px",
    minHeight: "30px",
  },
  "&::before":{
    backgroundColor:"transparent !important",
  }
}));

export const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  border:"none !important",
  fontSize:"26px",
  fontWeight:'700',
  color:theme.primary.main,
  '& .MuiSvgIcon-root ': {
    color: theme.primary.main,
    transition: "transform 0.3s ease-in-out", 
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  "& .Mui-expanded":{
  margin:"0 !important",
},
"& .MuiAccordionSummary-root.Mui-expanded":{
  paddingBottom:"0 !important",
},
// padding:"0 !important",
  // "& .MuiAccordionSummary-expandIconWrapper ":{
  //   transform:"rotate(90deg)"
  // },
  "& .MuiAccordionSummary-content ":{
    padding:"0",
    margin:"0",
  },
  "& .MuiPaper-root ":{
    opacity:"0 !important",
    backgroundColor:"white !important"
  },
  "& .MuiAccordionSummary-root ":{
    opacity:"0 ",
    backgroundColor:"white !important"
  },
  "& .MuiButtonBase-root ":{
    margin:"0 "
  },
  width:'114px',
  // paddingBottom:"20px",
  margin:"0",
}));


export const CustomAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  border:"none !important",
  margin:"0",
  "MuiAccordion-gutters":{
    opacity:"0 !important",
    backgroundColor:"white !important"

  },
  paddingTop:"0",
  "& .MuiPaper-root ":{
    opacity:"0 !important",
    backgroundColor:"white !important"
  },
}));