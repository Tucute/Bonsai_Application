import {useState, useEffect} from 'react';
import useBonsai, {BonsaiType} from './useBonsai';
import {useRoute} from '@react-navigation/native';

interface RouteParams {
  mode?: string;
  bonsaiId?: BonsaiType;
}

export const useUpdateBonsai = () => {
  const {addBonsai, updateBonsai} = useBonsai();
  const route = useRoute();
  const routeParams: RouteParams = route.params || {
    mode: 'add',
    bonsaiId: null,
  };
  const {mode, bonsaiId} = routeParams;
  const safeMode: string = typeof mode === 'string' ? mode : 'add';

  const [name, setName] = useState(bonsaiId?.name || '');
  const [image, setImage] = useState(bonsaiId?.image?.toString() || '');
  const [description, setDescription] = useState(
    bonsaiId?.description?.toString() || '',
  );
  const [price, setPrice] = useState(bonsaiId?.price?.toString() || '');
  const [promotionPrice, setPromotionPrice] = useState(
    bonsaiId?.promotion_price?.toString() || '',
  );

  useEffect(() => {
    setName(bonsaiId?.name || '');
    setImage(bonsaiId?.image?.toString() || '');
    setDescription(bonsaiId?.description?.toString() || '');
    setPrice(bonsaiId?.price?.toString() || '');
    setPromotionPrice(bonsaiId?.promotion_price?.toString() || '');
  }, [bonsaiId]);

  const handleChangeText = (key: string, value: string) => {
    switch (key) {
      case 'name':
        setName(value);
        break;
      case 'image':
        setImage(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'price':
        setPrice(value);
        break;
      case 'promotionPrice':
        setPromotionPrice(value);
        break;
    }
  };
  const handleSubmitProduct = async () => {
    const productData: Partial<BonsaiType> = {
      name: name,
      image: image,
      description: description,
      price: parseFloat(price) || 0,
      promotion_price: parseFloat(promotionPrice) || 0,
    };

    try {
      if (safeMode === 'update' && bonsaiId) {
        await updateBonsai(bonsaiId.id, productData);
      } else {
        await addBonsai(productData as Omit<BonsaiType, 'id'>);
      }
    } catch (error) {
      console.error(error);
    }

    setName('');
    setImage('');
    setDescription('');
    setPrice('');
    setPromotionPrice('');
  };

  return {safeMode, handleChangeText, handleSubmitProduct};
};
