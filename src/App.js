import {
  Button,
  Container,
  createTheme,
  TextField,
  ThemeProvider
} from "@mui/material";
import { commerce, datatype } from "faker";
import { useEffect, useState } from "react";
import Product from "./components/Product";

const theme = createTheme({});

const product_list = [
  {
    id: 1,
    name: "Cellphone",
    price: 499
  },
  {
    id: 2,
    name: "Laptop",
    price: 599
  },
  {
    id: 3,
    name: "Printer",
    price: 299
  }
];

function App() {
  const [products, setProducts] = useState(product_list);
  const [filtered, setFilted] = useState(products);
  const [filterI, setFilterI] = useState("");

  useEffect(() => {
    setFilted(
      products.filter(
        (o) => o.name.includes(filterI) || String(o.price).includes(filterI)
      )
    );
  }, [products, filterI]);

  const onFilter = (e) => setFilterI(e.target.value);
  const onDelete = (id) =>
    setProducts(products.filter((producto) => producto.id !== id));

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <TextField
          fullWidth
          type="text"
          variant="standard"
          placeholder="Filtrar"
          value={filterI}
          onChange={onFilter}
        />

        {filtered.map((product, i) => (
          <Product {...product} key={product.id} delete={onDelete} />
        ))}

        <Button
          variant="outlined"
          onClick={() => {
            setProducts(
              products.concat({
                id: datatype.uuid(),
                name: commerce.productName(),
                price: commerce.price()
              })
            );
          }}
        >
          Agregar
        </Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
