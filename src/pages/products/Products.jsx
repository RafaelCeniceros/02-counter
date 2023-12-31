import { Box, Container, Typography } from "@mui/material";
import CounterApp from "../../components/counter/CounterApp"

const products = [
  {
    sku: 1234,
    title: "Produc1",
    img: "www.image.com",
    price: 23.56,
  },
  {
    sku: 1235,
    title: "Produc2",
    img: "www.image.com",
    price: 56.56,
  },
  {
    sku: 1236,
    title: "Produc3",
    img: "www.image.com",
    price: 3333.56,
  },
  {
    sku: 1237,
    title: "Produc4",
    img: "www.image.com",
    price: 789.56,
  },
];

export const Products = () => {
  return (
    <Container maxWidth="md">
      {  products.map( ({title, img, price,sku})=> 
        <Box key={sku}>
          <Typography variant="h3" >{title}</Typography>
          <Typography variant="h4" >{price}</Typography>
          <CounterApp />
        </Box> 
        )}
    </Container>
  )
}