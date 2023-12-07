import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import { Container, CssBaseline, Paper } from '@mui/material';

interface Product {
  id: number;
  name: string;
  price: number;
}

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const handleAddProduct = (product: { name: string; price: number }) => {
    const newProduct: Product = {
      id: Date.now(),
      ...product,
    };
    setProducts([...products, newProduct]);
  };

  const handleDeleteProduct = (id: number) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const handleUpdateProduct = (id: number, newName: string, newPrice: number) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, name: newName, price: newPrice } : product
    );
    setProducts(updatedProducts);
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

export default App;
