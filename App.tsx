import React from 'react';
import Navigate from './src/navigations/Navigate';
import {
  // useQuery,
  // useMutation,
  // useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
// import { getTodos, postTodo } from '../my-api'

// Create a client
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigate />
    </QueryClientProvider>
  );
}
