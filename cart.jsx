import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/actions';
import { Box, Button, Image, Text, Input, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, quantity) => {
    if (quantity >= 1) dispatch(updateQuantity(id, quantity));
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Box p={5}>
      <Text fontSize="2xl" mb={4}>Shopping Cart</Text>
      {cartItems.length === 0 ? (
        <Text>Your cart is empty</Text>
      ) : (
        cartItems.map(item => (
          <Flex key={item.id} p={4} borderWidth="1px" align="center" justify="space-between">
            <Image src={item.image} boxSize="50px" />
            <Text flex="1" ml={3}>{item.title}</Text>
            <Text>${item.price}</Text>
            <Input
              type="number"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item
