import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Settings = () => {
  return (
    <SafeAreaView style={styles.MainContainer}>
      <Text>Settings</Text>
    </SafeAreaView>
  )
}

export default Settings

const styles = StyleSheet.create({
    MainContainer:{
        flex: 1,
        backgroundColor: '#161616'
    }
})