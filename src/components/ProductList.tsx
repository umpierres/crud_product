import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import ProductItem from './ProductItem';

interface ProductListProps {
  products: { id: number; name: string; price: number }[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <Container>
      <Grid container my={3}>
      <Grid xs={12}>
      <Typography variant="h4">Lista de produtos</Typography>
      {products.map((product) => (
        <ProductItem key={product.id} product={product}/>
      ))}
      </Grid>
      </Grid>
    </Container>
  );
};

export default ProductList;
