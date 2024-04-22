import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderMessages from './Components/HeaderMessages'
import Friends from './Components/Friends'
import { LinearGradient } from 'expo-linear-gradient'
import LastMessages from './Components/LastMessages'
const Messages = () => {
  return (
      <LinearGradient
      colors={['rgba(0,0,0,1)', 'rgba(88,0,176,1)']}
      style={styles.MainContainer}>
        <SafeAreaView>
          <HeaderMessages />
          <Friends />
          <LastMessages />
        </SafeAreaView>
      </LinearGradient>
  )
}

export default Messages

const styles = StyleSheet.create({
    MainContainer:{
        flex: 1,
    }
})