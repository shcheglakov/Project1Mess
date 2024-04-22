import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { loadFonts } from '../../App';

const HeaderChat = ({login, url}) => {
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
    <SafeAreaView style={styles.MainContainer}>
        <Image style={styles.HeaderImage} source={require('../../assets/img/2Prof.jpg')}/>
        <View style={styles.MainBlock}>
            <View>
                {fontsLoaded && <Text style={styles.NameText}>{login}</Text>}
                <View style={styles.ActiveBlock}>
                    <MaterialCommunityIcons name="circle" color='#00FF85' size={10}/>
                    {fontsLoaded && <Text style={styles.ActiveText}>Active</Text>}
                </View>
            </View>
            <View style={styles.ButtomsBlock}>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="phone" color='#4D4C4E' size={35}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="camera" color='#4D4C4E' size={35}/>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default HeaderChat

const styles = StyleSheet.create({
    MainContainer:{
        backgroundColor: '#1F1F1F',
        height: '15%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 20
    },

    MainBlock:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '70%',
        alignItems: 'center'
    },

    ButtomsBlock:{
        flexDirection: 'row',
        gap: 20
    },

    ActiveBlock:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },

    HeaderImage: {
        height: 80,
        width: 80,
        borderRadius: 30
    },

    NameText:{
        fontSize: 26,
        color: 'white',
        fontFamily: 'AnekDevanagari',
    },

    ActiveText:{
        fontSize: 16,
        color: '#00FF85',
        fontFamily: 'AnekDevanagari',
        paddingTop: 5
    }
})