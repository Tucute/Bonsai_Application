import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import DropdownSelect from './catalog';
import {useRoute} from '@react-navigation/native';
import useBonsai, {BonsaiType} from '../../../hooks/useBonsai';
import useGetUser from '../../../hooks/useGetUser';

interface RouteParams {
  mode?: string;
  bonsaiId?: BonsaiType;
}
interface BonsaiFormProps {
  onSubmitProduct: (product: Partial<BonsaiType>) => void;
}

const ManagementBonsai = ({onSubmitProduct}: BonsaiFormProps) => {
  const {addBonsai, updateBonsai} = useBonsai();
  const {getUser} = useGetUser();

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
  const [categoryID, setCategoryID] = useState(
    bonsaiId?.category_id.toString() || '',
  );
  const [supplierID, setSupplierID] = useState<string>('');

  getUser().then(userID => setSupplierID(userID));

  useEffect(() => {
    setName(bonsaiId?.name || '');
    setImage(bonsaiId?.image?.toString() || '');
    setDescription(bonsaiId?.description?.toString() || '');
    setPrice(bonsaiId?.price?.toString() || '');
    setPromotionPrice(bonsaiId?.promotion_price?.toString() || '');
    setCategoryID(bonsaiId?.category_id?.toString() || '');
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
      case 'category_id':
        setCategoryID(value);
    }
  };

  const handleSubmitProduct = async () => {
    const productData: Partial<BonsaiType> = {
      name,
      image,
      description,
      price: parseFloat(price) || 0,
      promotion_price: parseFloat(promotionPrice) || 0,
      category_id: parseFloat(categoryID),
      supplier_id: supplierID,
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

  const [selectedCategoryId, setSelectedCategoryId] = useState(categoryID);

  const handleCatalogChange = (categoryID: any) => {
    setCategoryID(categoryID);
    setSelectedCategoryId(categoryID);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
          {safeMode === 'update' ? (
            <DropdownSelect
              propsCatalog={selectedCategoryId}
              onCatalogChange={handleCatalogChange}
            />
          ) : (
            <DropdownSelect onCatalogChange={handleCatalogChange} />
          )}

          <Pressable style={styles.addButton} onPress={handleSubmitProduct}>
            <Text style={styles.buttonText}>
              {safeMode === 'update' ? 'Update' : 'Add'} Bonsai
            </Text>
          </Pressable>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  formContainer: {
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

export default ManagementBonsai;
