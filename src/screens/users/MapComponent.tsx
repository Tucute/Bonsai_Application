import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const MapComponent = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={{width: '100%', height: '100%'}}
        initialRegion={{
          latitude: 15.942386,
          longitude: 108.012135,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        onRegionChange={x=>{
          console.log(x);
        }}
      />
    </View>
  );
};

export default MapComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
