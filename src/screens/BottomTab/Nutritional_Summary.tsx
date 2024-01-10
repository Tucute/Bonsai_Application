
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Slider from '@react-native-community/slider';

const Nutritional_Summary = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nutritional Summary</Text>
      <Text style={styles.text}>For 1 portion</Text>
      <View>
        <View style={styles.detail}>
          <Text style={styles.tittleInput}>Protein</Text>
          <Text style={styles.tittleInput}>gram</Text>
        </View>

        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={10}
          minimumTrackTintColor="#159148"
          maximumTrackTintColor="#FFFFFF"
        />
      </View>
      <View>
        <View style={styles.detail}>
          <Text style={styles.tittleInput}>Carbs</Text>
          <Text style={styles.tittleInput}>gram</Text>
        </View>

        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={10}
          minimumTrackTintColor="#159148"
          maximumTrackTintColor="#FFFFFF"
        />
      </View>
      <View>
        <View style={styles.detail}>
          <Text style={styles.tittleInput}>Fat</Text>
          <Text style={styles.tittleInput}>gram</Text>
        </View>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={10}
          minimumTrackTintColor="#159148"
          maximumTrackTintColor="#FFFFFF"
        />
        <TouchableOpacity>
          <Text>Total</Text>
          <Text>104.6 calories</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Continue</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginVertical:30}}>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>navigation.navigate('Chat')}>
        <Text style={styles.textStyle}>Remove chat Screen</Text>
      </TouchableOpacity>
      </View>
      <View style={{marginVertical:30}}>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>navigation.navigate('MapComponent')}>
        <Text style={styles.textStyle}>Remove Map Screen</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default Nutritional_Summary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  detail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  tittleInput: {
    color: '#000000',
    fontSize: 14,
  },
  text: {},
  button: {
    backgroundColor: '#0D986A',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    borderRadius: 20,
  },
  textButton: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
  },
});
