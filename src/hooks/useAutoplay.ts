// useAutoplay.ts
import { useEffect } from 'react';

const useAutoplay = (length: number, currentIndex: number, setCurrentIndex: React.Dispatch<React.SetStateAction<number>>) => {
  useEffect(() => {
    const autoplayTimer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % length;
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(autoplayTimer);
  }, [currentIndex, length, setCurrentIndex]);
  
};

export default useAutoplay;
