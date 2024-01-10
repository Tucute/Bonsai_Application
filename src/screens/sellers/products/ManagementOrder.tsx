import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Pressable, StyleSheet} from 'react-native';
import DropdownSelect from './catalog';
import {useRoute} from '@react-navigation/native';
import useBonsai, {BonsaiType} from '../../../hooks/useBonsai';

interface RouteParams {
  mode?: string;
  bonsaiId?: BonsaiType;
}
interface BonsaiFormProps {
  onSubmitProduct: (product: Partial<BonsaiType>) => void;
}

const ManagementOrder: React.FC<BonsaiFormProps> = ({onSubmitProduct}) => {
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

  const handleChangeText = (key: keyof BonsaiType, value: string) => {
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
      case 'promotion_price':
        setPromotionPrice(value);
        break;
    }
  };

  const handleSubmitProduct = async () => {
    const productData: Partial<BonsaiType> = {
      name,
      image,
      description,
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

    onSubmitProduct(productData);

    setName('');
    setImage('');
    setDescription('');
    setPrice('');
    setPromotionPrice('');
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor="red"
        placeholder="Product name"
        value={name}
        onChangeText={text => handleChangeText('name', text)}
      />

      <Text style={styles.label}>Image</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor="red"
        placeholder="URL or link image"
        value={image}
        onChangeText={text => handleChangeText('image', text)}
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.inputDes}
        multiline
        numberOfLines={4}
        value={description}
        onChangeText={text => handleChangeText('description', text)}
      />

      <Text style={styles.label}>Price</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={text => handleChangeText('price', text)}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Promotion price</Text>
      <TextInput
        style={styles.input}
        value={promotionPrice}
        onChangeText={text => handleChangeText('promotion_price', text)}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Catalog</Text>
      <DropdownSelect />
      <Pressable style={styles.addButton} onPress={handleSubmitProduct}>
        <Text style={styles.buttonText}>
          {safeMode === 'update' ? 'Update' : 'Add'} Bonsai
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#0D986A',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: '#000',
  },
  inputDes: {
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: '#000',
  },
  addButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  textPlacehoder: {
    color: 'red',
  },
});

export default ManagementOrder;
