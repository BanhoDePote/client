import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { TableFooter } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "rgb(207, 43, 43)",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function ListOrdersDish({orders}) {

  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nome do Prato</StyledTableCell>
            <StyledTableCell align="center" sx={{ maxWidth: 2 }}>Qtd.</StyledTableCell>
            <StyledTableCell align="center" sx={{ maxWidth: 2 }}>Status</StyledTableCell>
            <StyledTableCell align="right" sx={{ maxWidth: 2 }}>Preço</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.dishes.map((dish, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {dish.dish.name}
              </StyledTableCell>
              <StyledTableCell align="center">{dish.quantity}</StyledTableCell>
              <StyledTableCell align="center">{dish.status}</StyledTableCell>
              <StyledTableCell align="right">{dish.dish.price}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}