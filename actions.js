import axios from 'axios';

export const fetchProducts = () => async (dispatch) => {
  dispatch({ type: 'FETCH_PRODUCTS_LOADING' });
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_PRODUCTS_FAILURE', payload: error.message });
  }
};

export const addToCart = (product) => ({
  type: 'ADD_TO_CART',
  payload: product
});

export const removeFromCart = (id) => ({
  type: 'REMOVE_FROM_CART',
  payload: { id }
});

export const updateQuantity = (id, quantity) => ({
  type: 'UPDATE_QUANTITY',
  payload: { id, quantity }
});

export const placeOrder = () => ({ type: 'PLACE_ORDER' });
