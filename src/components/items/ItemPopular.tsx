import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'

const ItemPopular = () => {
  return (
    <View style={styles.dropped}>
    <View style={styles.droppedTree}>
      <Image
        source={require('../../assets/justDropped/img.png')}
        style={styles.droppedImg}
      />
      <Text style={styles.nameTree}>Dose Media</Text>
      <Text>$92.99 USD</Text>
    </View>
    <View style={styles.droppedTree}>
      <Image
        source={require('../../assets/justDropped/img1.png')}
        style={styles.droppedImg}
      />
      <Text style={styles.nameTree}>Dose Media</Text>
      <Text>$92.99 USD</Text>
    </View>
    <View style={styles.droppedTree}>
      <Image
        source={require('../../assets/justDropped/img2.png')}
        style={styles.droppedImg}
      />
      <Text style={styles.nameTree}>Dose Media</Text>
      <Text>$92.99 USD</Text>
    </View>
  </View>
  )
}

export default ItemPopular

const styles = StyleSheet.create({
    dropped: {
        marginTop: 5,
        flexDirection: 'row',
      },
      droppedTree: {
        width: 150,
        height: 210,
        marginHorizontal: 10,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#0D986A',
        top: 0,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        
        elevation: 11,
      },
      droppedImg: {
        width: 150,
        height: 150,
        borderRadius: 10,
      },
    
      nameTree: {
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
      },
    
})