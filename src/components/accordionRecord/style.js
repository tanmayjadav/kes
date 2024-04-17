import styled from "@emotion/styled";
import { Box ,Link, Typography,} from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';


export const Background = styled(Box)(({ theme }) => ({
  border:`1px solid ${theme.secondary.lightGreyOpacity}`,
  display:"flex",
  position:"relative",
  alignItems:"center",
  flexDirection:"row",
  borderRadius:"10px",
  padding:"40px 35px",
  marginBottom: "20px",
  justifyContent:"space-between",
}));

export const RowTitle = styled(Typography)(({ theme }) => ({
  lineHeight:"36.08px",
  fontSize:"22px",
  fontWeight:"600", 
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  gap:"6px"
}));

export const RowDetailContainer = styled(Box)(({ theme }) => ({
  // border:`1px solid ${theme.secondary.lightGreyOpacity}`,
  display:"flex",
  alignItems:"center",
  flexDirection:"row",
  gap:"105px",
  justifyContent:"space-evenly",
  lineHeight:"30px",
  fontSize:'18px',
  fontWeight:"400",
}));

export const EssentialSpan = styled(Box)(({ theme }) => ({
  position: "absolute",
  borderRadius:"0 10px 0 30px",
  top: "0",
  fontWeight:"500",
  lineHeight:"18px",
  right: "0",
  padding: "4px 8px",
  paddingLeft:"20px", 
  fontSize:"12px",
  backgroundColor: theme.primary.orange, 
  // color: theme., 
  // borderRadius: "4px", 
}));

export const RecordTextContainer = styled(Box)(({ theme }) => ({
  
}));

export const TasksTextContainer = styled(Box)(({ theme }) => ({
  
}));

export const CO2TextContainer = styled(Box)(({ theme }) => ({
  
}));

export const UploadDataLink = styled(Link)(({ theme }) => ({
  textDecoration: "underline",
  color:theme.primary.green,
  lineHeight:"30px",
  fontSize:'18px',
  fontWeight:"600",
}));
