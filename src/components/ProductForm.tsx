// components/ProductForm.tsx
import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Grid } from '@mui/material';
import { addProduct } from '../store/modules/productSlice';
import ProductType from '../types/productType';
import { useAppDispatch } from '../store/hooks';

const ProductForm: React.FC = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [errorName, setErrorName] = useState<string | null>(null);
  const [errorPrice, setErrorPrice] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setErrorName('Adicione um nome');
      return;
    }

    if (price <= 0) {
      setErrorPrice('Preço não pode ser negativo ou zero');
      return;
    }

    const newProduct: ProductType = {
      id: Date.now(),
      name,
      price
    };
    dispatch(addProduct(newProduct))
    setName('');
    setPrice(0);
    setErrorName(null);
    setErrorPrice(null);
  };

  return (
    <Container>
      
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
            <Typography variant="h4">Adicionar produto</Typography>
            </Grid>
          <Grid item xs={12}>
            <TextField
              label="Nome"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setErrorName(null);
              }}
              error={!!errorName}
              helperText={errorName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Preço"
              variant="outlined"
              fullWidth
              type="number"
              InputProps={{ inputProps: { min: 0 } }}
              value={price}
              onChange={(e) => {
                setPrice(Number(e.target.value));
                setErrorPrice(null);
              }}
              error={!!errorPrice}
              helperText={errorPrice}
            />
          </Grid>
          <Grid item xs={12}>
        <Button type="submit" variant="contained" color="primary">
          Adicionar
        </Button>
        </Grid>
        </Grid>
        
      </form>
    </Container>
  );
};

export default ProductForm;
