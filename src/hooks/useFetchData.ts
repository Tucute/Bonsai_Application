import { useState, useEffect } from 'react';

interface CarouselItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: number | string;
  promotion_price:string;
}

const useFetchData = (setCarouselData: React.Dispatch<React.SetStateAction<CarouselItem[]>>) => {
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://63a571e42a73744b008e23ee.mockapi.io/user24',
        );
        const data = await response.json();
        setCarouselData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  
};

export default useFetchData;