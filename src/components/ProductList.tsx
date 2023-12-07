import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import ProductItem from './ProductItem';

interface ProductListProps {
  products: { id: number; name: string; price: number }[];
  onDelete: (id: number) => void;
  onUpdate: (id: number, newName: string, newPrice: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onDelete, onUpdate }) => {
  return (
    <Container>
      <Grid container my={3}>
      <Grid xs={12}>
      <Typography variant="h4">Lista de produtos</Typography>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} onDelete={onDelete} onUpdate={onUpdate}/>
      ))}
      </Grid>
      </Grid>
    </Container>
  );
};

export default ProductList;
