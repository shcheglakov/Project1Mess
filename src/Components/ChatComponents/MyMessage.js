import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { loadFonts } from '../../../App';

const MyMessage = ({message}) => {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() =>{
        const loadingFonts = async() => {
            try {
                await loadFonts();
                setFontsLoaded(true);
            } catch (error) {
                console.log("Error: " + error);
            }
        };
        loadingFonts();
    })
  return (
    <LinearGradient
        colors={['rgba(131,14,247,1)', 'rgba(172,91,253,1)']}
        style={styles.ContainerMessage}>
            {fontsLoaded && <Text style={styles.TextMessage}>{message}</Text>}
    </LinearGradient>
  )
}

export default MyMessage

const styles = StyleSheet.create({
    ContainerMessage:{
        marginLeft: 70,
        borderRadius: 15,
        padding: 10,
        marginBottom: 25,
    },

    TextMessage:{
        color: 'white',
        fontSize: 16,
        fontFamily: 'AnekDevanagari',
    }
})