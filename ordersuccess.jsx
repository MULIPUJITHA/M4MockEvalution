import { Box, Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const OrderSuccess = () => {
  return (
    <Box textAlign="center" p={5}>
      <Text fontSize="2xl" color="green.500">Order Placed Successfully!</Text>
      <Link to="/">
        <Button colorScheme="blue" mt={4}>Back to Products</Button>
      </Link>
    </Box>
  );
};

export default OrderSuccess;
