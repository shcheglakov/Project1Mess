import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MyFriends } from '../FriendsConstans';

import { loadFonts } from '../../App';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Friends = () => {
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
      <View style={styles.Block1}>
        {fontsLoaded && <Text style={styles.Text}>Currently Active</Text>}
        <MaterialCommunityIcons name="circle" color='#00FF85' size={10}/>
      </View>
      <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
      >
      {MyFriends.map((profile, i) => (
            <View style={styles.ContainerFriendsProf} key={i}>
              <Image style={styles.ImageFriendsProf} source={profile.url} />
              {fontsLoaded && <Text style={styles.TextFriendsProf}>{profile.name}</Text>}
            </View>
          ))}
      </ScrollView>
    </View>
  )
}

export default Friends

const styles = StyleSheet.create({
    MainContainer:{
        marginHorizontal: 35,
        marginTop: 25,
    },

    ContainerFriendsProf:{
        height: 129,
        width: 84,
        alignItems: 'center',
        marginRight: 10
    },

    ImageFriendsProf:{
        height: 107,
        width: 84,
        borderRadius: 35
    },

    TextFriendsProf:{
        marginTop: 5,
        color: 'white',
        fontSize: 14,
        fontFamily: 'AnekDevanagari',
    },

    Block1:{
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        width: 170,
        height: 32,
        borderRadius: 27,
        marginBottom: 15,
        backgroundColor: 'radial-gradient(circle, rgba(124,1,246,1) 0%, rgba(182,109,255,1) 100%)',
    },

    Text:{
        fontSize: 16,
        color: 'white',
        fontFamily: 'AnekDevanagari',
        paddingTop: 5
    }
})