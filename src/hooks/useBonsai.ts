import {useState, useEffect} from 'react';
const BONSAI = 'https://63a571e42a73744b008e23ee.mockapi.io/user24';
const DATA_STORE = 'https://63a571e42a73744b008e23ee.mockapi.io/users';
import axios from 'axios';
import {useQuery} from '@tanstack/react-query';

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
  const [dataBonsai, setDataBonsai] = useState<BonsaiType[]>([]);
  const [dataCategories, setDataCategories] = useState<CategoriesType[]>([]);

  useEffect(() => {
    const fetchDataBonsai = async () => {
      try {
        const res = await fetch(DATA_STORE);
        const data = await res.json();
        setDataBonsai(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataBonsai();
  }, []);

  const addBonsai = async (newBonsai: Omit<BonsaiType, 'id'>) => {
    try {
      await fetch(DATA_STORE, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBonsai),
      });
    } catch (error) {
      console.error(error);
    }
  };

  const updateBonsai = async (
    id: string,
    // eslint-disable-next-line @typescript-eslint/no-shadow
    updateBonsai: Partial<BonsaiType>,
  ) => {
    try {
      await fetch(`${DATA_STORE}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateBonsai),
      });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteBonsai = async (id: string) => {
    try {
      await fetch(`${DATA_STORE}/${id}`, {
        method: 'DELETE',
      });
      setDataBonsai(prevData => prevData.filter(bonsai => bonsai.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const { data } = useQuery({
    queryKey: ['dataCatalog'],
    queryFn: async () => {
      const res = await axios.get(BONSAI);
      const catalogName = res.data.map((item: CategoriesType) => item.name);
      return catalogName;
    },
  });
  
  useEffect(() => {
    if (data) {
      setDataCategories(data);
    }
  }, [data]);

  return {dataBonsai, dataCategories, addBonsai, updateBonsai, deleteBonsai};
};

export default useBonsai;
