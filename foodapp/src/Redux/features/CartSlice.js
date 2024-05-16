import { createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addTocart: (state, action) => {
      const newElement = action.payload;
      const existingElement = state.find((element) => element.id === newElement.id);

      if (existingElement) { 
        existingElement.quantity += 1;
      } else { 
        state.push({ ...newElement, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const elementId = action.payload;
      const elementIndex = state.findIndex((element) => element.id === elementId);

      if (elementIndex !== -1) {
        if (state[elementIndex].quantity > 1) {
          state[elementIndex].quantity -= 1;
        } else {
          state.splice(elementIndex, 1);
        }
      }
    }
  },
});

export const { addTocart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
