import axios from 'axios';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';

interface CarouselItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  promotion_price: string;
}
const useFetchInfoTrees = () => {
  const get_api="https://e1f3-14-176-231-248.ngrok-free.app/api/get-products";
  const { data, isLoading, isError } = useQuery<CarouselItem[]>({
    queryKey: ['products'],
    queryFn: async () => {
      try {
        const response = await axios.get(get_api);
        return response.data;
      } catch (error) {
        throw new Error('Network response was not ok');
      }
    },
  });

  return { data, isLoading, isError };
};

export default useFetchInfoTrees;