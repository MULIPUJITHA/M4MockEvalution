import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          {/* Other routes will go here */}
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
