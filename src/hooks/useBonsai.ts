import axios from 'axios';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';

const CATALOG = 'https://63a571e42a73744b008e23ee.mockapi.io/user24';
const DATA_STORE = 'https://85a2-103-19-99-68.ngrok-free.app/api/get-products';

export interface BonsaiType {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number | string;
  promotion_price: number | string;
}

export interface CategoriesType {
  name: string;
}

const useBonsai = () => {
  const queryClient = useQueryClient();

  const dataBonsai = useQuery({
    queryKey: ['get_data'],
    queryFn: async () => {
      const res = await axios.get(DATA_STORE);
      return res.data;
    },
  });

  const addBonsai = useMutation({
    mutationKey: ['add_data'],
    mutationFn: async (newBonsai: Omit<BonsaiType, 'id'>) => {
      const res = await axios.post(DATA_STORE, newBonsai);
      if (!res) {
        console.log("Can't add data please check and try again!");
        throw new Error("Can't add data");
      }
      return res.data;
    },
  });

  const updateBonsai = useMutation({
    mutationKey: ['update_data'],
    mutationFn: async(updateBonsai: Partial<BonsaiType>) => {
      try {
        await axios.put(DATA_STORE, updateBonsai)
      } catch (error) {
        console.log(error);
        
      }
    }
  })

  const deleteBonsai = useMutation({
    mutationKey: ['delete_data'],
    mutationFn: async(id: string) => {
      const res = await axios.delete(`${DATA_STORE}/${id}`)
      const itemDelete = res.data.filter(item => item.id !== id)
      return itemDelete;
    },
  })

  const dataCategories = useQuery({
    queryKey: ['dataCatalog'],
    queryFn: async () => {
      const res = await axios.get(CATALOG);
      const catalogName = res.data.map((item: CategoriesType) => item.name);
      return catalogName;
    },
  });

  return {dataBonsai, dataCategories, addBonsai, updateBonsai, deleteBonsai};
};

export default useBonsai;
