import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
    display: "flex",
    marginBottom: "2rem",
  },
}));

export default function WallpaperPagination(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Pagination
        page={props.currentPage}
        onChange={props.onChange}
        style={{ margin: "auto", marginBottom: "80px" }}
        count={props.numberOfPages}
        color="standard"
      />
    </div>
  );
}
