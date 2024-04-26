import styled from "@emotion/styled";
import {
  Box,
  Button,
  Select,
  Typography,
  MenuItem,
  ListItemText,
} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export const ModalContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: "628px",
  // maxWidth: "550px", //!TODO: Change this.
  outline: "none",
  padding: "30px",
  borderRadius: "15px",
  overflow: "auto",
  backgroundColor: theme.primary.white,
}));

export const ModalHeading = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const ModalTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: 700,
  fontSize: "28px",
  lineHeight: "60.04px",
  textAlign: "start",
  color: theme.primary.darkBlue,
}));

export const CustomIconButton = styled(HighlightOffIcon)(({ theme }) => ({
  position: "absolute",
  top: 7,
  right: 7,
  padding: 2,
  margin: 2,
  color: theme.secondary.whiteBlue300,
  fontSize: "40px",
}));

export const FirstFieldName = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  color: theme.secondary.whiteBlue300,
  fontWeight: "bold",
  marginTop: 17,
  fontSize: "18px",
}));

export const InputIndex = styled(Select)(({ theme }) => ({
  width: "500px",
  borderRadius: "10px",
  marginTop: 4,
  paddingLeft: "8px",
  fontWeight: 800,
  fontSize: "18px",
}));

export const SecondFieldName = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  color: theme.secondary.whiteBlue300,
  fontWeight: "bold",
  marginTop: 30,
  fontSize: "18px",
}));

export const SelectButton = styled(Button)(({ theme }) => ({
  display: "flex",
  fontFamily: theme.typography.fontFamily,
  marginTop: 32,
  marginLeft: 15,
  variant: "contained",
  backgroundColor: theme.primary.green,
  color: theme.primary.white,
  fontSize: "19px",
  padding: "12px 30px 12px 30px",
  borderRadius: "50px",
  "&:hover": {
    backgroundColor: theme.primary.green,
  },
}));

export const Menu = styled(MenuItem)(({ theme }) => ({
}));

export const List = styled(ListItemText)(({ theme }) => ({
}));
