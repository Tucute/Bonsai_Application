import {useState, useEffect} from 'react';
interface CarouselItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  promotion_price: string;
}

const useFetchInfoTrees = () => {
  const [carouselData, setCarouselData] = useState<CarouselItem[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch(
        //   'https://ec71-14-176-231-248.ngrok-free.app/api/get-products',
        // );
        const response =await fetch(
          'https://63a571e42a73744b008e23ee.mockapi.io/user24'
        );
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
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  return carouselData;
};
export default useFetchInfoTrees;