// components/ProductItem.tsx
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';
import { useAppDispatch } from '../store/hooks';
import ProductType from '../types/productType';
import { editProduct, removeProduct } from '../store/modules/productSlice';

interface ProductItemProps {
  product: { id: number; name: string; price: number };
}

const ProductItem: React.FC<ProductItemProps> = ({ product}) => {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState(product.name);
  const [newPrice, setNewPrice] = useState(product.price);
  const dispatch = useAppDispatch();


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

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancelEdit = () => {
    setEditing(false);
    setNewName(product.name);
    setNewPrice(product.price);
  };

  const handleSaveEdit = () => {
    handleUpdateProduct(product.id, newName, newPrice);
    setEditing(false);
  };

  return (
    <Card variant="outlined" style={{ marginBottom: '16px' }}>
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body1">${product.price}</Typography>
        <Button onClick={() => handleDeleteProduct(product.id)} variant="contained" color="secondary">
          Deletar
        </Button>
        <Button onClick={handleEdit} style={{ marginLeft: '8px' }} variant="contained" color="primary">
          Editar
        </Button>
      </CardContent>

      <Dialog open={isEditing} onClose={handleCancelEdit}>
        <DialogTitle>Editar Produto</DialogTitle>
        <DialogContent>
          <TextField
            label="Nome"
            variant="outlined"
            fullWidth
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Preço"
            variant="outlined"
            type="number"
            fullWidth
            value={newPrice}
            onChange={(e) => setNewPrice(Number(e.target.value))}
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelEdit} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleSaveEdit} color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default ProductItem;
