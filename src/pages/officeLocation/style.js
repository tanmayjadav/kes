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
import BackgroundGraphic from "../../assets/images/BackgroundGraphic.svg";
import { ExpandMore } from "@mui/icons-material";

const Background = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${BackgroundGraphic})`,
  backgroundColor: theme.primary.darkBlue,
  height: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflowX: "hidden",
}));

const OfficeLocationBox = styled(Box)(() => ({
  height: "100vh",
}));

const HeaderBox = styled(Box)(({ theme }) => ({
  height: "127px",
  padding: "0 50px",
  backgroundColor: theme.primary.deepCoveBlue,
}));

const WelcomeStack = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.primary.deepCoveBlue,
  display: "flex",
  flexDirection: "row",
  color: "white",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px 40px",
  borderRadius: "10px 10px 0 0 ",
}));

const CustomWelcome = styled(Typography)(({ theme }) => ({
  fontFamily: "Square Peg",
  fontWeight: "400",
  fontStyle: "normal",
  color: theme.primary.orange,
  fontSize: "36px",
}));

const SubCustomCompanyTitle = styled(Typography)(({ theme }) => ({
  color: theme.primary.white,
  fontWeight: 700,
  whiteSpace: "nowrap",
}));

const StepBox = styled(Box)(() => ({
  color: "white",
}));

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.primary.orange,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.primary.green,
    },
  },
  [`&.${stepConnectorClasses.line}`]: {
    borderColor: theme.secondary.whiteOpacity,
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const CustomStepLabel = styled(StepLabel)(({ theme }) => ({
  "& .MuiStepLabel-label": {
    fontWeight: 600,
    color: `${theme.primary.white} !important`,
  },

  "& .MuiStepLabel-labelContainer.MuiStepLabel-alternativeLabel": {
    textAlign: "right",
    maxWidth: "30px",
    whiteSpace: "nowrap",
  },
}));

const LeftContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
}));

const RightContainer = styled(Box)(() => ({
  width: "100%",
}));

const AccordionBody = styled(Box)(({ theme }) => ({
  background: theme.primary.white,
  borderRadius: "0px 0px 10px 10px",
  height: "calc(100vh - 300px)",
  overflowY: "auto",
  padding: "20px 40px",
  "&::-webkit-scrollbar": {
    width: "0.3rem",
    background: theme.primary.whiteBlue200,
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: theme.primary.white,
  },
  "&::-webkit-scrollbar-thumb": {
    background: theme.primary.whiteBlue200,
    borderRadius: "50px",
  },
}));

const CustomOfficeLocation = styled(Typography)(({ theme }) => ({
  color: theme.primary.main,
  fontSize: "24px",
  //   fontFamily: "Catamaran, sans-serif",
  fontOpticalSizing: "auto",
  fontWeight: "700",
  fontStyle: "normal",
  margin: "0 0 20px 0",
}));

const CustomDetails = styled(Typography)(() => ({
  fontSize: "20px",
  marginBottom: "10px",
}));

const CustomSubDetails = styled(Typography)(({ theme }) => ({
  color: theme.secondary.whiteBlue600,
  fontSize: "16px",
}));

const AccordionContainer = styled(Box)(() => ({
  // borderRadius: "10px",
  marginTop: 20,
}));

const CustomAccordion = styled(Accordion)(() => ({
  borderRadius: "10px",
  backgroundColor: "#EAF0FB",
  margin: "20px 0",
  border: "1px solid #EAF0FB",
  boxShadow: "none",
  "&::before": {
    backgroundColor: "transparent",
  },
  "&.MuiAccordion-root:first-of-type": {
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },
  "&.MuiAccordion-root:last-of-type": {
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
  },
}));

const CustomAccordionSummary = styled(AccordionSummary)(() => ({
  transition: "none",
  WebkitTransform: "none",
  fontSize: "14px",
  width: "100%",
  padding: "0px 10px 0px 10px !important",
  "& .MuiAccordionSummary-content": {
    margin: 0,
    padding: 0,
  },
  "& .MuiAccordionSummary-content.Mui-expanded": {
    margin: 0,
  },
  "&.MuiAccordionSummary-root.Mui-expanded": {
    minHeight: "48px !important",
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
}));

const CustomAccordionDetails = styled(AccordionDetails)(() => ({
  backgroundColor: "white",
  border: "0 0 10px 10px",
  borderColor: "#EAF0FB",
  borderRadius: "0 0 10px 10px",
  padding: 0,
}));

const CustomExpandMoreIcon = styled(ExpandMore)(({ theme }) => ({
  color: theme.primary.main,
  fontSize: "10px",
}));

const FooterButtons = styled(Stack)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: "60px",
}));

const FooterLeftButton = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  color: theme.secondary.whiteBlue600,
  fontSize: "20px",
  cursor: "pointer",
}));

const CustomFooterRightText = styled(Typography)(() => ({
  fontWeight: 600,
}));

const FooterRightButton = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  cursor: "pointer",
  color: "black",
  borderRadius: 0,
  position: "relative",
  backgroundColor: "white",
  zIndex:2,
  "&:before": {
    borderTop: `5px solid ${theme.primary.yellow300}`,
    content: '""',
    position: "absolute",
    top: "55%",
    left: -3,
    right: 0,
    bottom: 0,
    width: "100%",
    zIndex:-1
  },
}));

const CustomAddMoreButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.primary.orange,
  textAlign: "center",
  verticalAlign: "middle",
  borderRadius: "26px",
  boxShadow: "none",
  lineHeight: "32.8px",
  padding: "8px 20px",
  color: "black",
  fontWeight: "bolder",
  fontSize: "16px",
  margin: "20px 0 20px 20px",
  "&:hover": {
    backgroundColor: theme.primary.orange,
  },
}));

const CustomAddMoreButtonTypography = styled(Typography)(() => ({
  fontWeight: 500,
  fontSize: "16px",
}));

export {
  Background,
  OfficeLocationBox,
  HeaderBox,
  WelcomeStack,
  StepBox,
  QontoConnector,
  AccordionBody,
  CustomStepLabel,
  RightContainer,
  LeftContainer,
  SubCustomCompanyTitle,
  CustomWelcome,
  CustomOfficeLocation,
  CustomAccordionSummary,
  CustomDetails,
  CustomSubDetails,
  AccordionContainer,
  CustomAccordion,
  CustomExpandMoreIcon,
  CustomAccordionDetails,
  FooterButtons,
  FooterLeftButton,
  FooterRightButton,
  CustomFooterRightText,
  CustomAddMoreButton,
  CustomAddMoreButtonTypography,
};
