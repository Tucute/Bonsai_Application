import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
interface CarouselItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  promotion_price: string;
}
import { url } from '../components/url/urlNgrok';
const useFetchInfoTrees = () => {
  const { data, isLoading, isError } = useQuery<CarouselItem[]>({
    queryKey: ['products'],
    queryFn: async () => {
      try {
        const response = await fetch(
          `${url}/api/get-products`,
        );
        return response.data;
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setCarouselData(data);
        } else {
          console.error('Data is not an array:', data);
        }
      } catch (error) {
        throw new Error('Network response was not ok');
      }
    },
  });

  return { data, isLoading, isError };
};

export default useFetchInfoTrees;