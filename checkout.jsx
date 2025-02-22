import { useSelector, useDispatch } from 'react-redux';
import { placeOrder } from '../redux/actions';
import { Box, Button, Text, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    dispatch(placeOrder());
    navigate('/order-success');
  };

  return (
    <Box p={5}>
      <Text fontSize="2xl" mb={4}>Order Summary</Text>
      {cartItems.map(item => (
        <Flex key={item.id} p={2} borderBottom="1px solid gray" justify="space-between">
          <Text>{item.title} x {item.quantity}</Text>
          <Text>${(item.price * item.quantity).toFixed(2)}</Text>
        </Flex>
      ))}
      <Text fontSize="xl" mt={4}>Total: ${totalAmount.toFixed(2)}</Text>
      <Button colorScheme="green" mt={4} onClick={handlePlaceOrder}>Place Order</Button>
    </Box>
  );
};

export default Checkout;
