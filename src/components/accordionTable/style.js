import styled from "@emotion/styled";
import { Table, TableCell, TableHead, Typography } from "@mui/material";

const CustomTable = styled(Table)(({ theme }) => ({
  boxShadow: "none",
  "& .MuiPaper-root-MuiTableContainer-root": {
    boxShadow: "none",
  },
}));

const CustomTableHead = styled(TableHead)(({ theme }) => ({
  "& .MuiTableCell-root": {
    color: "#A2B4D0",
  },
}));

const HeaderTableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: "1px solid #E1EDFF",
}));

const CustomDefaultLocationCell = styled(TableCell)(({ theme }) => ({
  textAlign: "center",
  borderRadius: "10px",
}));

const DefaultLocationTypography = styled(Typography)(({ theme }) => ({
  backgroundColor: "#08AA7233",
  maxWidth: "100px",
  padding: "5px",
  fontWeight: 600,
  borderRadius: "5px",
  fontSize:"12px",
}));

export {
  CustomTable,
  CustomTableHead,
  CustomDefaultLocationCell,
  DefaultLocationTypography,
  HeaderTableCell,
};
