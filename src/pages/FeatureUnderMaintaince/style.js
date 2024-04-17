import styled from "@emotion/styled";
import {
  Box,
} from "@mui/material";



export const Background = styled(Box)(({ theme }) => ({
    backgroundColor: theme.secondary.bgWhite,
    marginLeft:"200px",
    marginTop:"60px",
    padding:"35px",
    fontFamily:theme.typography.fontFamily,
    overflowX: "auto",
    // borderTop:`0.5px solid ${theme.secondary.whiteBlue600}`,
    // borderLeft:`0.5px solid ${theme.secondary.whiteBlue600}` 
  }));



export const ContentContainer = styled(Box)(({ theme }) => ({
  backgroundColor:theme.primary.white,
  padding:"60px 60px 0",
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center",
  borderRadius:"20px",
  boxShadow: `0px 20px 25px 0px ${theme.secondary.shadowShade} !important`,

}));

export const TextContainer = styled(Box)(({ theme }) => ({
    backgroundColor:"white",
    margin:"35px",
    textAlign:"center"
}));
export const TextTitle = styled(Box)(({ theme }) => ({
  lineHeight:"40px",
  fontSize:"40px",
  color:theme.primary.darkBlue,
  fontWeight:"700",

}));
export const TextDetail = styled(Box)(({ theme }) => ({
  lineHeight:"30px",
  fontSize:"22px",
  padding:"13px 0 0",
  maxWidth:"700px",
  color:theme.secondary.whiteBlue600,
  fontWeight:"400",
}));
export const TextNote = styled(Box)(({ theme }) => ({
  lineHeight:"30px",
  fontSize:"22px",
  padding:"23px 0 0",
  color:theme.primary.green,
  fontWeight:"600",
}));
