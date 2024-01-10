import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

const Chat = () => {
  return (
    <View style={{ flex: 1 }}>
      <WebView source={{uri: "https://tawk.to/chat/6598c7cd8d261e1b5f502a49/1hjecov43" }} style={{flex: 1}} />
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({})
