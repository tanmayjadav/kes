import styled from "@emotion/styled";
import {
  Box,
} from "@mui/material";
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';

export const TabListContainer = styled(Box)(({ theme }) => ({
    paddingLeft:"30px",
    paddingTop:"0px",
    display:"flex",
    justifyContent:"space-between"

}));

export const Background = styled(Box)(({ theme }) => ({
  
}));

export const CustomTabContext = styled(TabContext)(({theme})=>({
  display:"block",
  padding:"20px",
}))
export const CustomTabPanel = styled(TabPanel)(({ theme }) => ({
  padding:"0",
  // boxShadow: `0px 20px 25px 0px black !important`,
}));

export const TabLists = styled(TabList)(({theme}) =>({
    border:"none",
    // padding:"20px",
    color:"red",
    "& .MuiTabPanel-root":{
      padding: 0,
    },
    "& .MuiTabs-flexContainer":{
      padding:"30px",
      paddingBottom:"0",
    }, 
    // padding:"10px",
    display:"flex",
    gap:"20px",
      "& .MuiTabs-indicator":{
      backgroundColor: theme.primary.orange,
      width:"78px !important",
      alignSelf:"center",
      textAlign:"center",
      marginLeft:"20px",
      height: "3px",/* Adjust the height of the indicator */
      bottom: "1px",
      borderRadius: '10px 10px 0 0',
    },
    "& .Mui-selected": {
      borderRadius: '15px 15px 0 0',
      boxShadow: "0px -10px 20px 0px #2130480F",
      paddingBottom: "6px",
      backgroundColor: theme.primary.white,
      color: `${theme.primary.main} !important`,
    },
}));
export const Tabs = styled(Tab)(({theme}) =>({
  color:theme.secondary.whiteblue600,
  fontFamily:theme.typography.fontFamily,
  fontWeight:"600",
  fontSize:"16px",
  textTransform:"none",
  "& .Mui-selected": {
  borderBottom: `2px solid ${theme.primary.orange}`, 
  boxShadow: `0px 20px 25px 0px black !important`,
  marginTop:"10px"
  }
}));

export const LastUpdatedSpan = styled(Box)(({theme}) =>({
  color:theme.secondary.whiteBlue600,
  fontFamily:theme.typography.fontFamily,
  display:"flex",
  // justifyContent:"center",
  alignItems:"end",
  gap:"5px",
  paddingBottom:"10px",
  fontWeight:"400",
  lineHeight:"26px",
  fontSize:"16px",
  // color:theme.secondary.whiteblue600,
}));

export const LastUpdatedDateAndTimeSpan = styled(Box)(({theme}) =>({
  fontWeight:"600",
}));
export const CustomIcon = styled(Box)(({theme}) =>({
  // fontSize:"10px",
}));