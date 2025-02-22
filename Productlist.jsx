import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addToCart } from '../redux/actions';
import { Box, Button, Image, Text, Grid } from '@chakra-ui/react';

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {products.map(product => (
        <Box key={product.id} borderWidth="1px" p={4}>
          <Image src={product.image} boxSize="150px" />
          <Text>{product.title}</Text>
          <Text>${product.price}</Text>
          <Button onClick={() => dispatch(addToCart(product))}>Add to Cart</Button>
        </Box>
      ))}
    </Grid>
  );
};

export default ProductList;
