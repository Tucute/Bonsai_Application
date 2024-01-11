import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

const Chat = () => {
  return (
    <View style={{ flex: 1 }}>
      <WebView source={{uri: "https://tawk.to/chat/659f97508d261e1b5f51cd37/1hjrme5dc" }} style={{flex: 1}} />
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({})
