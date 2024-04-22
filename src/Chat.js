import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderChat from './Components/HeaderChat'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import ChatBlock from './Components/ChatBlock'

const Chat = ({route}) => {
  console.log('allparams: ' + JSON.stringify(route));
  return (
      <View style={styles.MainContainer}>
        <HeaderChat login={route.params.login} url={route.params.url}/>
        <ChatBlock route={route.params.messages}/>
      </View>
  )
}

export default Chat

const styles = StyleSheet.create({
  MainContainer:{
    flex: 1,
    backgroundColor: '#1F1F1F'
  }
})