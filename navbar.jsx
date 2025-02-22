import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, Flex, Text, IconButton } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Box bg="blue.500" p={4} color="white">
      <Flex justify="space-between" align="center">
        <Text fontSize="xl"><Link to="/">E-Commerce</Link></Text>
        <Link to="/cart">
          <IconButton icon={<FaShoppingCart />} aria-label="Cart" />
          <Text as="span" ml={2}>{totalItems}</Text>
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
