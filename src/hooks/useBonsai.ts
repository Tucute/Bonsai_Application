import {useState, useEffect} from 'react';
const CATALOG = 'https://63a571e42a73744b008e23ee.mockapi.io/user24';
const DATA_STORE = 'https://85a2-103-19-99-68.ngrok-free.app/api/get-products';
import axios from 'axios';
import {useQuery} from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  const getUserID = async() => {
    try {
      const getUser = await AsyncStorage.getItem('user');
      console.log("ID nguoi dung khi no dang nhap: ",getUser);
        
      
      if (getUser) {
        const user = JSON.parse(getUser);
        const userID = user.id;
        return userID;
      } else {
        console.error('User data not found in AsyncStorage');
        return null;
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const fetchDataBonsai = async () => {
      try {
        const res = await fetch(DATA_STORE);
        const data = await res.json();
        const supplierID = await getUserID();
        const bonsaiData = data.filter(item => item.supplier_id === 4)
        setDataBonsai(bonsaiData);
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
      const res = await axios.get(CATALOG);
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
