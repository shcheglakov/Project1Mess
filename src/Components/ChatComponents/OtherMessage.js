import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { loadFonts } from '../../../App'

const OtherMessage = ({message}) => {
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
    <View style={styles.MainContainer}>
        <Image style={styles.AvatarImage} source={require('../../../assets/img/2Prof.jpg')}/>
        <View style={styles.MessageBlock}>
            {fontsLoaded && <Text style={styles.TextMessage}>{message}</Text>}
        </View>
    </View>
  )
}

export default OtherMessage

const styles = StyleSheet.create({
    MainContainer:{
        flexDirection: 'row',
        gap: 20,
        marginBottom: 25,
        paddingRight: 50,
        alignItems: 'center',
    },

    MessageBlock:{
        padding: 10,
        backgroundColor: '#1F1F1F',
        alignContent: 'center',
        maxWidth: '80%',
        minHeight: 51,
        borderRadius: 15,
    },

    AvatarImage:{
        width: 51,
        height: 51,
        borderRadius: 18
    },

    TextMessage:{
        fontSize: 16,
        color: 'white',
        fontFamily: 'AnekDevanagari',
    }
})