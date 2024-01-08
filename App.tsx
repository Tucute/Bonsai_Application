import React from 'react';
import Navigate from './src/navigations/Navigate';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import DropdownSelect from './src/screens/sellers/products/catalog';
const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DropdownSelect />
    </QueryClientProvider>
  );
}
