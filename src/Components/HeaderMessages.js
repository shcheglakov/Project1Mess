import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { loadFonts } from '../../App';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HeaderMessages = () => {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
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
        <View style={styles.Block1}>
            {fontsLoaded && <Text style={styles.HeaderText}>Messages</Text>}
            <TouchableOpacity>
                <MaterialCommunityIcons name="format-list-checkbox" color='#4B4A4C' size={42}/>
            </TouchableOpacity>
        </View>
        <TextInput 
            placeholder='Search' 
            style={styles.SearchInput}
            keyboardAppearance={'dark'}
        />
    </View>
  )
}

export default HeaderMessages

const styles = StyleSheet.create({
    SearchInput:{
        backgroundColor: '#1F1F1F',
        height: 48,
        fontSize: 20,
        borderRadius: 25,
        paddingHorizontal: 22
    },
    
    MainContainer:{
        marginHorizontal: 35,
        gap: 24
    },

    Block1:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    HeaderText:{
        color: '#504F50',
        fontSize: 36,
        fontFamily: 'AnekDevanagari',
        paddingTop: 10
    }
})