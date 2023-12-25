import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Pressable, StyleSheet} from 'react-native';
import useBonsai, {BonsaiType} from '../../../hooks/useBonsai';
import SelectDropdown from 'react-native-select-dropdown';

interface BonsaiFormProps {
  onSubmitProduct: (product: Partial<BonsaiType>) => void;
  initialProduct?: BonsaiType;
}

const ManagementOrder: React.FC<BonsaiFormProps> = ({
  onSubmitProduct,
  initialProduct,
}) => {
  const {addBonsai, updateBonsai} = useBonsai();

  const [name, setName] = useState(initialProduct?.name || '');
  const [image, setImage] = useState(initialProduct?.image?.toString() || '');
  const [description, setDescription] = useState(
    initialProduct?.description?.toString() || '',
  );
  const [price, setPrice] = useState(initialProduct?.price?.toString() || '');
  const [promotionPrice, setPromotionPrice] = useState(
    initialProduct?.promotion_price?.toString() || '',
  );

  useEffect(() => {
    setName(initialProduct?.name || '');
    setPrice(initialProduct?.image?.toString() || '');
    setPrice(initialProduct?.description?.toString() || '');
    setPrice(initialProduct?.price?.toString() || '');
    setPrice(initialProduct?.promotion_price?.toString() || '');
  }, [initialProduct]);

  const handleSubmitProduct = async () => {
    const newBonsai: Omit<BonsaiType, 'id'> = {
      name: name,
      image: image,
      description: description,
      price: parseFloat(price) || 0,
      promotion_price: parseFloat(promotionPrice) || 0,
    };

    try {
      await addBonsai(newBonsai);
    } catch (error) {
      console.error(error);
    }

    onSubmitProduct(newBonsai);

    setName('');
    setImage('');
    setDescription('');
    setPrice('');
    setPromotionPrice('');
  };

  const data = ['app', 'orange', 'banana', 'mango', 'avocado', 'fruitstart'];

  const formatMoney = (value: string): string => {
    const numberValue = parseFloat(value.replace(/[^\d]/g, '')) || 0;
    return numberValue.toLocaleString('en-US');
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor="red"
        placeholder="Product name"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Image</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor="red"
        placeholder="URL or link image"
        value={image}
        onChangeText={setImage}
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.inputDes}
        multiline
        numberOfLines={4}
        value={description}
        onChangeText={setDescription}
      />

      <Text style={styles.label}>Price</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={text => setPrice(formatMoney(text))}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Promotion price</Text>
      <TextInput
        style={styles.input}
        value={promotionPrice}
        onChangeText={text => setPromotionPrice(formatMoney(text))}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Catalog</Text>
      <SelectDropdown
        data={data}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        defaultButtonText="Select catalog"
        buttonTextAfterSelection={selectedItem => {
          return selectedItem;
        }}
        buttonStyle={styles.buttonDropdown}
        buttonTextStyle={styles.buttonTextDropdown}
        //renderDropdownIcon={}
        dropdownIconPosition={'right'}
        rowTextForSelection={item => {
          return item;
        }}
        rowStyle={styles.rowDropdown}
        rowTextStyle={styles.rowTextDropdown}
      />

      <Pressable style={styles.addButton} onPress={handleSubmitProduct}>
        <Text style={styles.buttonText}>
          {initialProduct ? 'Update' : 'Add'} Bonsai
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
  buttonDropdown: {
    width: '100%',
    height: 40,
    backgroundColor: '#FFF',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonTextDropdown: {
    color: 'red',
    textAlign: 'left',
  },
  rowDropdown: {
    backgroundColor: 'blue',
    borderBottomColor: 'green',
  },
  rowTextDropdown: {
    color: 'black',
    textAlign: 'left',
  },
  textPlacehoder: {
    color: 'red',
  },
});

export default ManagementOrder;
