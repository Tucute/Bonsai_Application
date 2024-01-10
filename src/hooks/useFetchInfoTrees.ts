import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { url } from '../components/url/urlNgrok';

interface CarouselItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  promotion_price: string;
}
const useFetchInfoTrees = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['getTree'],
    queryFn: async () => {
      try {
        const response = await axios.get(`${url}/api/get-products`);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  });
  return { data, isLoading, isError };
};

export default useFetchInfoTrees;
