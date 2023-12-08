import React, { useState } from 'react';
import { Container, CssBaseline, Paper } from '@mui/material';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import ProductType from '../types/productType';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { SelectAllProducts, addProduct, editProduct, removeProduct } from '../store/modules/productSlice';

const Home: React.FC = () => {
    const products = useAppSelector(SelectAllProducts)
    const dispatch = useAppDispatch();

  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper elevation={3} style={{ padding: '16px', marginTop: '16px' }}>
        <ProductForm/>
        <ProductList
          products={products}
        />
      </Paper>
    </Container>
  );
};

export default Home;
