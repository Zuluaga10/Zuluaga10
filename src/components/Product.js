import { Button, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import { memo, useEffect } from "react";

const useStyles = makeStyles({
  root: {
    width: "100%",
    border: "solid 1px",
    marginTop: "5px",
    marginBottom: "5px",
    borderRadius: "0.4rem",
    padding: "0.2rem 0.8rem",
    backgroundColor: "#f043f0",
    borderColor: "solid 1px"
  }
});

const Product = (props) => {
  const classes = useStyles();

  useEffect(() => {
    return () => console.log("Eliminando el producto:", props.name);
  }, [props.name]);

  return (
    <Stack className={classes.root}>
      <Typography
        style={{
          width: 200
        }}
        variant="h4"
      >
        {props.name}
      </Typography>
      <Stack direction="row" alignItems="center">
        <Typography variant="subtitle1">Price:</Typography>
        <Typography variant="body1">${props.price}</Typography>
      </Stack>
      <Button onClick={() => props.delete(props.id)}>Eliminar</Button>
    </Stack>
  );
};

export default memo(Product);
