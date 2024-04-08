import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import {
  CustomDefaultLocationCell,
  CustomTableHead,
  DefaultLocationTypography,
  HeaderTableCell,
} from "./style";

const AccordionTable = ({ heading, rows }) => {
  return (
    <TableContainer>
      <Table>
        <CustomTableHead>
          <TableRow>
            {heading.map((item, index) => (
              <HeaderTableCell key={index}>{item}</HeaderTableCell>
            ))}
          </TableRow>
        </CustomTableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.city}</TableCell>
              <TableCell>{row.state}</TableCell>
              <TableCell>{row.country}</TableCell>
              <CustomDefaultLocationCell>
                <DefaultLocationTypography>
                  Default Location
                </DefaultLocationTypography>
              </CustomDefaultLocationCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AccordionTable;
