import styled from "@emotion/styled";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  InputBase,
  Link,
  Popover,
  Typography,
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
  marginBottom:"15px"
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
  '&.MuiAccordion-root.Mui-expanded':{
    margin: "0 !important"
},
  
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
    margin:"0",
    padding:"0"
  },
  
  
}));

export const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  border:"none !important",
  whiteSpace: "nowrap !important",
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
  padding:"0",
  "& .MuiPaper-root ":{
    opacity:"0 !important",
    backgroundColor:"white !important"
  },
  "&.MuiPaper-root-MuiAccordion-root.Mui-expanded":{
    margin:"0 !important"
  }
}));

export const CustomButtonFilterIcon = styled('button')(({ theme }) => ({
  backgroundColor:"transparent",
  borderRadius:"100%",
  border:"none",
}));
export const CustomPopover = styled(Popover)(({ theme }) => ({
  boxShadow:"none !important",
  "& .MuiPopover-paper":{
    border:`1px solid ${theme.secondary.whiteBlue200}`,
    boxShadow:"none !important",
  }
  }));
  export const PopoverText = styled(Typography)(({ theme }) => ({
    padding:"10px 16px",
    cursor:"pointer",
    border:theme.secondary.Background,
    fontWeight:400,
    fontSize:"16px",
    color:theme.secondary.whiteBlue600,
    "&:hover":{
      color:theme.primary.black,
    } 
  }));

// export const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: "100%",
 
//   '& :hover': {
 
//     cursor:"pointer",  
//   },
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(1),
//     width: 'auto',
//   },
// }));

// export const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   cursor:"pointer",  
//   position: 'absolute',
//   // pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
  
// }));

// export const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: theme.secondary.whiteBlue600,
//   width: '100%',
//   paddingLeft:"0px",
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     [theme.breakpoints.up('sm')]: {
//       width: '0',
//       '&:focus': {
//         width: '20ch',
//         borderRadius:"40px",
//         backgroundColor:theme.secondary.greyIcon
//       },
//     },
//   },
// }));
export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  display:"flex",
  alignItems:'center',
  borderRadius:"50px",
  height:'34px',
  '&:hover': {
    backgroundColor: theme.secondary.greyIcon,
  },
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
    backgroundColor: theme.secondary.greyIcon,

  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  height: '90%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.secondary.whiteBlue600,
  width: '100%',
  fontSize:"15px",
  
  '& .MuiInputBase-input': {
    paddingLeft: `calc(1em + ${theme.spacing(2)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '0ch',
      '&:focus': {
        width: '15ch',
      },
    },
  },
}));
export const CustomIconButton = styled('button')(({ theme }) => ({
  position:"absolute",
  backgroundColor:"transparent",
  border:'none',
  marginRight:"10px",
  right:"0",
  // bottom:"1px",
  // width: "20px", // Adjust the width as needed
  // height: "6px !important", // Adjust the height as needed
  fontSize: "3px",
  color:theme.secondary.whiteBlue600,
  '&:hover': {
    backgroundColor: 'transparent', 
  },
}));