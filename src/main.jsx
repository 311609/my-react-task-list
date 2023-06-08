import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import './index.css';


createRoot(document.getElementById('root')).render(
    <ChakraProvider>
      <App />
    </ChakraProvider>
);
