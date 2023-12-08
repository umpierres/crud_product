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
    
  const handleAddProduct = (product: { name: string; price: number }) => {
    const newProduct: ProductType = {
      id: Date.now(),
      ...product,
    };
    dispatch(addProduct(newProduct))
  }

  const handleDeleteProduct = (id: number) => {
    dispatch(removeProduct(id))
  };

  const handleUpdateProduct = (id: number, newName: string, newPrice: number) => {
    const updatedProduct: ProductType = {
        id: id,
        name: newName,
        price:newPrice
    }
    dispatch(editProduct(updatedProduct))
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper elevation={3} style={{ padding: '16px', marginTop: '16px' }}>
        <ProductForm onSubmit={handleAddProduct} />
        <ProductList
          products={products}
          onDelete={handleDeleteProduct}
          onUpdate={handleUpdateProduct}
        />
      </Paper>
    </Container>
  );
};

export default Home;
