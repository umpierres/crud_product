import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import ProductType from '../../types/productType';

const adapter = createEntityAdapter({ selectId: (product:ProductType) => product.id });

export const PrdouctsSlice = createSlice({
  name: 'products',
  initialState: adapter.getInitialState(),
  reducers: {
    addProduct: adapter.addOne,
    removeProduct: adapter.removeOne,
    editProduct: adapter.setOne,
  },
});

export default PrdouctsSlice.reducer;

export const { addProduct, removeProduct, editProduct } = PrdouctsSlice.actions;
export const { selectById: SelectProductById, selectAll: SelectAllProducts } = adapter.getSelectors((state:RootState) => state.products);