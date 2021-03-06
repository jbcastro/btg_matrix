import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import { maxWidth, flexbox } from "@material-ui/system";
import { purple } from "@material-ui/core/colors";

const WineTable = props => {
  const handleSelect = props.handleSelect;
  const onSelect = props.onSelect;
  const onClick = props.onClick;
  const clickMe = props.clickMe;
  const showMyComponent = props.showMyComponent;
  const grapes = "grapes";
  const year = "year";
  const place = "place";
  const area = "area";
  const country = "country";
  const appellation = "appellation";
  const grape = "grape";
  const description = "description";
  const price = "price";
  const mise = "mise";
  const color = "color";
  const status = "status";
  let funfact;
  const onClear = props.onClear;

  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1)
    },
    input: {
      display: "none"
    },
    root: {
      width: "100%",
      marginTop: theme.spacing(3),
      overflowX: "auto",
      fontSize: 8
    },

    table: {
      minWidth: 100,
      width: "100%"
    },
    tableRow: {
      height: "1px",
      maxWidth: "1px"
    },
    Paper: {
      display: "flex"
    },
    head: {
      display: "flex-box",
      fontSize: 8
    },
    body: {
      fontSize: 8
    },
    TableCell: {
      size: "small"
    }
  }));

  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead className={classes.head}>
          <ButtonBase onClick={event => onClear(event)}>
            Clear Filters
          </ButtonBase>
          <TableRow className={classes.tableRow}>
            <TableCell emphasis="bold">Name</TableCell>
            <TableCell align="center">Grapes</TableCell>
            <TableCell align="center">Individual Grapes</TableCell>
            <TableCell align="center">Year</TableCell>
            <TableCell align="center">Place</TableCell>
            <TableCell align="center">Area</TableCell>
            <TableCell align="center">Country</TableCell>
            <TableCell align="center">Appellation</TableCell>
            <TableCell align="center">Mise</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Mise</TableCell>
            <TableCell align="center">Color</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Fun Fact</TableCell>
          </TableRow>
        </TableHead>
        {/* start table TableBody
        g
        static getDerivedStateFromProps(nextProps, prevState) {
            g
            g
        } */}

        <TableBody className={classes.tableRow}>
          {props.glasses.map((glass, idx) => (
            <TableRow key={glass._id}>
              <TableCell component="th" scope="row">
                Name<p></p>
                <ButtonBase
                  id={glass._id}
                  onClick={event => handleSelect(event)}
                >
                  {glass.name}
                </ButtonBase>
              </TableCell>
              <TableCell>
                Grapes<p></p>
                <ButtonBase
                  component="button"
                  id={glass.grapes}
                  value={grapes}
                  onClick={event => onSelect(event)}
                >
                  {glass.grapes}
                </ButtonBase>
              </TableCell>

              <TableCell>
                Indiv<p></p>
                <ButtonBase
                  id={glass.grape1}
                  value={grape}
                  onClick={event => onSelect(event)}
                >
                  {glass.grape1}
                </ButtonBase>
                &nbsp;
                <ButtonBase
                  id={glass.grape2}
                  value={grape}
                  onClick={event => onSelect(event)}
                >
                  {glass.grape2}
                </ButtonBase>
                &nbsp;
                <ButtonBase
                  id={glass.grape3}
                  value={grape}
                  onClick={event => onSelect(event)}
                >
                  {glass.grape3}
                </ButtonBase>
              </TableCell>
              <TableCell>
                Year<p></p>
                <ButtonBase
                  id={glass.year}
                  value={year}
                  onClick={event => onSelect(event)}
                >
                  {glass.year}
                </ButtonBase>
              </TableCell>
              <TableCell>
                Place<p></p>
                <ButtonBase
                  id={glass.place}
                  value={place}
                  onClick={event => onSelect(event)}
                >
                  {glass.place}
                </ButtonBase>
              </TableCell>
              <TableCell>
                Area<p></p>
                <ButtonBase
                  id={glass.area}
                  value={area}
                  onClick={event => onSelect(event)}
                >
                  {glass.area}
                </ButtonBase>
              </TableCell>
              <TableCell>
                Country<p></p>
                <ButtonBase
                  id={glass.country}
                  value={country}
                  onClick={event => onSelect(event)}
                >
                  {glass.country}
                </ButtonBase>
              </TableCell>
              <TableCell>
                Appellation<p></p>
                <ButtonBase
                  id={glass.appellation}
                  value={appellation}
                  onClick={event => onSelect(event)}
                >
                  {glass.appellation}
                </ButtonBase>
              </TableCell>
              <TableCell>
                Mise<p></p>
                <ButtonBase
                  id={glass.mise}
                  value={mise}
                  onClick={event => onSelect(event)}
                >
                  {glass.mise}
                </ButtonBase>
              </TableCell>
              <TableCell>
                Description<p></p>
                <ButtonBase
                  id={glass.description1}
                  value={description}
                  onClick={event => onSelect(event)}
                >
                  {glass.description1}
                </ButtonBase>
                &nbsp;
                <ButtonBase
                  id={glass.description2}
                  value={description}
                  onClick={event => onSelect(event)}
                >
                  {glass.description2}
                </ButtonBase>
                &nbsp;
                <ButtonBase
                  id={glass.description3}
                  value={description}
                  onClick={event => onSelect(event)}
                >
                  {glass.description3}
                </ButtonBase>
                &nbsp;
                <ButtonBase
                  id={glass.description4}
                  value={description}
                  onClick={event => onSelect(event)}
                >
                  {glass.description4}
                </ButtonBase>
                <ButtonBase
                  id={glass.description5}
                  value={description}
                  onClick={event => onSelect(event)}
                >
                  {glass.description5}
                </ButtonBase>
                &nbsp;
                <ButtonBase
                  id={glass.description6}
                  value={description}
                  onClick={event => onSelect(event)}
                >
                  {glass.description6}
                </ButtonBase>
                &nbsp;
                <ButtonBase
                  id={glass.description7}
                  value={description}
                  onClick={event => onSelect(event)}
                >
                  {glass.description7}
                </ButtonBase>
                &nbsp;
                <ButtonBase
                  id={glass.description8}
                  value={description}
                  onClick={event => onSelect(event)}
                >
                  {glass.description8}
                </ButtonBase>
                &nbsp;
                <ButtonBase
                  id={glass.description9}
                  value={description}
                  onClick={event => onSelect(event)}
                >
                  {glass.description9}
                </ButtonBase>
                &nbsp;
                <ButtonBase
                  id={glass.description10}
                  value={description}
                  onClick={event => onSelect(event)}
                >
                  {glass.description10}
                </ButtonBase>
              </TableCell>
              <TableCell>
                Price<p></p>
                <ButtonBase
                  id={glass.price}
                  value={price}
                  onClick={event => onSelect(event)}
                >
                  {glass.price}
                </ButtonBase>
              </TableCell>
              <TableCell>
                Mise<p></p>
                <ButtonBase
                  id={glass.mise}
                  value={mise}
                  onClick={event => onSelect(event)}
                >
                  {glass.mise}
                </ButtonBase>
              </TableCell>
              <TableCell>
                Color<p></p>
                <ButtonBase
                  id={glass.color}
                  value={color}
                  onClick={event => onSelect(event)}
                >
                  {glass.color}
                </ButtonBase>
              </TableCell>
              <TableCell>
                Status<p></p>
                <ButtonBase
                  id={glass.status}
                  value={status}
                  onClick={event => onSelect(event)}
                >
                  {glass.status}
                </ButtonBase>
              </TableCell>
              <TableCell>
                <ButtonBase onClick={event => onClick(event)}>
                  {showMyComponent
                    ? (funfact = glass.funfact + "  " + "CLICK HERE TO CLOSE")
                    : (funfact = "Click Me")}
                </ButtonBase>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default WineTable;
