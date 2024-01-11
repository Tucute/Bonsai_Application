import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import {url} from '../components/url/urlNgrok';

const useComment = (id_product: number) => {
  const {data, isFetching} = useQuery({
    queryKey: ['getComment'],
    queryFn: async () => {
      try {
        const res = await axios.get(`${url}/api/get-comment/${id_product}`);
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  return {
    data,
  };
};

export default useComment;