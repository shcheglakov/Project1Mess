import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Calls = () => {
  return (
    <SafeAreaView style={styles.MainContainer}>
      <Text>Calls</Text>
    </SafeAreaView>
  )
}

export default Calls

const styles = StyleSheet.create({
    MainContainer:{
        flex: 1,
        backgroundColor: '#161616'
    }
})