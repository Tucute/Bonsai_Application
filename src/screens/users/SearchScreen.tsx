import React, {useState, useEffect} from 'react';
import ViewPropTypes from 'deprecated-react-native-prop-types';
import {
  TextInput,
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
interface SearchBarProps {
  searchText: string;
}
interface NavigationParams {
  product: TreesData;
}
interface TreesData {
  id: string;
  name: string;
  description: string;
  price: string;
  image: number | string;
  promotion_price: string;
}
import { debounce } from 'lodash';

const SearchScreen = ({ searchText }: any) => {
  const navigation = useNavigation();
  const [treesData, setTreesData] = useState<TreesData[]>([]);
  const [searchResults, setSearchResults] = useState<TreesData[]>([]);

  const fetchTreesData = async () => {
    try {
      const response = await fetch(
        'https://63a571e42a73744b008e23ee.mockapi.io/user24',
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }

      const contentType = response.headers.get('Content-Type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Invalid content type. Expected JSON.');
      }

      const data = await response.json();
      setTreesData(data);
    } catch (error: any) {
      console.error('Error fetching trees data:', error.message);
    }
  };

  const searchTrees = async (text: string) => {
    // Tìm kiếm theo text ở đây
    return treesData.filter(item =>
      item.name.toLowerCase().includes(text.toLowerCase()),
    );
  };

  const handleSearchChange = debounce(async (text: string) => {
    const filteredResults = await searchTrees(text);
    setSearchResults(filteredResults);
  }, 300);

  useEffect(() => {
    fetchTreesData();
  }, []);

  const renderItem = ({item}: any) => {
    return (
      <View>
        <TouchableOpacity
          style={styles.popularTree}
          onPress={() => navigation.navigate('DetailProduct', {product: item})}>
          <Image
            source={
              typeof item.image === 'number'
                ? item.image
                : {uri: item.image as string}
            }
            style={styles.popularImg}
          />
          <View style={styles.infotree}>
            <View>
              <Text style={styles.nametree}>{item.name}</Text>
              <Text style={styles.slogan}>Monstera family</Text>
            </View>
            <Text style={styles.prices}>
              {item.promotion_price === item.price
                ? `$${item.price}`
                : `$${item.promotion_price}`}
              {item.promotion_price !== item.price && (
                <Text style={styles.originalPrice}>${item.price}</Text>
              )}
            </Text>
          </View>
          <View style={styles.plus}>
            <View style={styles.imgPlus}>
              <Image
                source={require('../../assets/img_popular/plus.png')}
                style={styles.plusImg}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.SearchBarContainer}>
      <View style={styles.SearchInput}>
        <TextInput
          placeholder="Search by name"
          value={searchText}
          onChangeText={text => handleSearchChange(text)}
          style={styles.searchInput}
        />
      </View>
      <FlatList
        data={searchResults}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  SearchBarContainer: {
    flex: 1,
  },
  searchInput: {
    height: 50,
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth: 1,
    paddingLeft: 10,
    width: '100%',
    backgroundColor: '#DCE8D6',
  },
  SearchInput: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  popularTree: {
    width: '90%',
    height: 100,
    backgroundColor: '#DCE8D6',
    borderRadius: 10,
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  popularImg: {
    width: 100,
    height: 'auto',
    borderRadius: 10,
  },
  nametree: {
    fontSize: 14,
    color: '#002140',
    fontWeight: 'bold',
    width: 120,
    flexDirection: 'row',
  },
  slogan: {
    color: '#002140',
    fontSize: 12,
  },
  prices: {
    color: '#002140',
    fontSize: 12,
  },
  infotree: {
    justifyContent: 'space-around',
    marginHorizontal: 10,
  },
  imgPlus: {
    backgroundColor: '#C3DCB7',
    width: 50,
    height: 50,
    borderRadius: 500,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus: {
    marginLeft: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusImg: {
    width: 20,
    height: 20,
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: 'red',
  },
});

export default SearchScreen;
