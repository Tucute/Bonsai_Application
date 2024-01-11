import axios from 'axios';
import {useMutation, useQuery} from '@tanstack/react-query';
import {url} from '../components/url/urlNgrok';

const GET_DATA = `${url}/api/get-product-admin`;
const ADD_DATA = `${url}/api/add-product`;
const UPDATE_DATA = (id: string) => `${url}/api/update-product/${id}`;
const DELETE_DATA = `${url}/api/delete-product/{id}`;
const DATA_CATALOG = `${url}/api/get-categories`;

export interface BonsaiType {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number | string;
  promotion_price: number | string;
  category_id: number | string;
  supplier_id: number | string;
}

export interface CategoriesType {
  id: string | number;
  name: string;
}

const useBonsai = () => {

  const {data: dataBonsai} = useQuery<BonsaiType>({
    queryKey: ['get_data'],
    queryFn: async () => {
      const res = await axios.get(GET_DATA);
      return res.data;
    },
    //initialData: data => data,
  });
  

  const {data: addBonsai} = useMutation({
    mutationKey: ['add_data'],
    mutationFn: async (newBonsai: Omit<BonsaiType, 'id'>) => {
      const res = await axios.post(ADD_DATA, newBonsai);
      if (!res) {
        console.log("Can't add data please check and try again!");
        throw new Error("Can't add data");
      }
      return res.data;
    },
  });

  const {data: updateBonsai} = useMutation({
    mutationKey: ['update_data'],
    mutationFn: async (updateBonsai: Partial<BonsaiType>) => {
      try {
        const id = updateBonsai.id;

        if (id) {
          await axios.put(UPDATE_DATA(id), updateBonsai);
        } else {
          console.error('Cannot update data without a valid ID');
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  const {data: deleteBonsai} = useMutation({
    mutationKey: ['delete_data'],
    mutationFn: async (id: string) => {
      await axios.delete(`${DELETE_DATA}/${id}`);
      return id;
    },
  });

  const {data: dataCategories} = useQuery({
    queryKey: ['dataCatalog'],
    queryFn: async () => {
      const res = await axios.get(DATA_CATALOG);
      return res.data;
    },
  });


  return {dataBonsai, dataCategories, addBonsai, updateBonsai, deleteBonsai};
};

export default useBonsai;
