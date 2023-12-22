import {useState, useEffect} from 'react';

const BONSAI = 'https://63a571e42a73744b008e23ee.mockapi.io/user24';

export interface BonsaiType {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  promotion_price: number;
}

const useBonsai = () => {
  const [dataBonsai, setDataBonsai] = useState<BonsaiType[]>([]);

  useEffect(() => {
    const fetchDataBonsai = async () => {
      try {
        const res = await fetch(BONSAI);
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
      await fetch(BONSAI, {
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
      await fetch(`${BONSAI}/${id}`, {
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
      await fetch(`${BONSAI}/${id}`, {
        method: 'DELETE',
      });
      setDataBonsai(prevData => prevData.filter(bonsai => bonsai.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return {dataBonsai, addBonsai, updateBonsai, deleteBonsai};
};

export default useBonsai;
