import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css';

function createData(name,trackingId,date,status) {
  return { name,trackingId,date,status};
}

function makeStyle(status) {
  if(status === "Approved") {
    return {
      color:'green',
      background:'rgb(145 254 159 / 47%)'
    }
  } else if (status === "Delivered") {
  return {
    color:'White',
    background:'#59bfff'
  }
  } else{
   return {
    color:'red',
    background:'#ffadad8f'
   }
  }
}


const rows = [
  createData("Lasania Chiken Fries", 18908424, "2 March 2022", "Approved","Details"),
  createData("Big Baza Bang ", 18908424, "2 March 2022", "Pending"),
  createData("Mouth Freshner", 18908424, "2 March 2022", "Approved"),
  createData("Cupcake", 18908421, "2 March 2022", "Delivered"),
];

export default function BasicTable() {
  return (
    <div className="Table">
      <h3>Recent Orders</h3>
    <TableContainer component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='thead'  >Product</TableCell>
            <TableCell className='thead' align="left">Tracking ID</TableCell>
            <TableCell className='thead' align="left">Date</TableCell>
            <TableCell className='thead' align="left">Status</TableCell>
            <TableCell className='thead' align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.trackingId}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left"> 
                <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                </TableCell>
              <TableCell align="left" className='details'>Details</TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
