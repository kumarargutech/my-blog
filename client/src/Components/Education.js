import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Container from '@material-ui/core/Container';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    }
  },
}))(TableRow);

const headers = ["School/Degree", "School/College Name", "Duration Year", "Percentage"];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    marginTop: 200
  },
});

export default function Education() {
  const URLPath = "/api/educationdetails";
  const classes = useStyles();
  const [education, setEducation] = useState();

  useEffect(() => {
    const FetchData = async () => {
        const res = await fetch(URLPath);
        const json = await res.json();
        setEducation(json);      
    };
    FetchData();
  }, [URLPath]);

  return (
    <>
      {education && <Container maxWidth="lg" className={classes.table}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              {headers.map((header, index) => <StyledTableCell key={index}>{header}</StyledTableCell>)}
            </TableRow>
          </TableHead>
          <TableBody>
            {education.map(row => (
              <StyledTableRow key={row._id}>
                <StyledTableCell component="th" scope="row">
                  {row.education}
                </StyledTableCell>
                <StyledTableCell>{row.name}</StyledTableCell>
                <StyledTableCell>{row.passout_year}</StyledTableCell>
                <StyledTableCell>{row.percentage}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Container>}
    </>
  );
}
