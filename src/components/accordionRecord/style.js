import styled from "@emotion/styled";
import { Box ,IconButton,Link, Tooltip, Typography,} from "@mui/material";

export const AccordionButton = styled("button")(({ theme }) => ({
  border:"none",
  backgroundColor:"transparent",
  width:"100%",
  cursor:"pointer"
}));

export const Background = styled('div')(({ theme }) => ({
  border:`1px solid ${theme.secondary.lightGreyOpacity}`,
  display:"flex",
  position:"relative",
  alignItems:"center",
  flexDirection:"row",
  borderRadius:"10px",
  padding:"35px 35px",
  marginBottom: "20px",
  justifyContent:"space-between",
}));


export const RowTitleContainer = styled('div')(({ theme }) => ({
  display:"flex",
  justifyContent:"left"
}));
export const RowTitle = styled(Typography)(({ theme }) => ({
  lineHeight:"36.08px",
  fontSize:"22px",
  fontWeight:"600", 
  display:"flex",
  maxWidth:"450px",
  textAlign: "left",
  // gap:"8px"
}));

export const CustomTooltip = styled(Tooltip)(({ theme }) => ({
  padding:"0 !important",
}));

export const CustomIconButton = styled(IconButton)(({ theme }) => ({
  padding:"0 !important",
  paddingLeft:"7px !important",
  // paddingBottom:"0 !important",
  "&:hover": {
    backgroundColor: "transparent", // Override the background color on hover
  },
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
  borderRadius:"0 12px 0 30px",
  top: "-0.5px",
  fontWeight:"500",
  lineHeight:"18px",
  right: "-1px",
  padding: "4px 8px",
  paddingLeft:"20px", 
  fontSize:"12px",
  backgroundColor: theme.primary.orange, 
}));
export const RecommendedSpan = styled(Box)(({ theme }) => ({
  position: "absolute",
  borderRadius:"0 12px 0 30px",
  top: "-1px",
  fontWeight:"500",
  lineHeight:"18px",
  right: "-1px",
  padding: "4px 8px",
  paddingLeft:"20px", 
  fontSize:"12px",
  color:theme.primary.white,
  backgroundColor: theme.primary.main, 
}));
export const MandatorySpan = styled(Box)(({ theme }) => ({
  position: "absolute",
  color:theme.primary.white,
  borderRadius:"0 12px 0 30px",
  top: "-1px",
  fontWeight:"500",
  lineHeight:"18px",
  right: "-1px",
  padding: "4px 8px",
  paddingLeft:"20px", 
  fontSize:"12px",
  backgroundColor: theme.primary.green, 
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
