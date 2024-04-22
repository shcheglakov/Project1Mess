import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { loadFonts } from '../../App';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LastMessagesData } from '../FriendsConstans';
import { useNavigation } from '@react-navigation/native';

const LastMessages = () => {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const navigation = useNavigation();

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

    const pressToChat = (data) => {
        navigation.navigate('Chat', data, { tabBarVisible: false });
    }

  return (
    <View style={styles.MainContainer}>
      <View style={styles.Block1}>
      {fontsLoaded && <Text style={styles.Text}>Recents</Text>}
        <MaterialCommunityIcons name="clock-time-five-outline" color='#ffff' size={16}/>
      </View>
      <ScrollView style={styles.ScrollBlock}>
        {LastMessagesData.map((message, i) => (
            <TouchableOpacity onPress={() => pressToChat(message)} key={`${message.login}-${i}`}>
                <View style={styles.MessageContainer}>
                    <Image style={styles.MessageImage} source={message.url}/>
                    <View style={styles.TextMainMessageContainer}>
                        <View style={styles.TextMessageContainer}>
                            {fontsLoaded && <Text style={styles.TextMessage1}>{message.login}</Text>}
                            {fontsLoaded && <Text style={styles.TextMessage2}>{message.messages['other1'] ? message.messages['other1'] : message.messages['user1']}</Text>}
                        </View>
                        <View style={styles.TextMessageContainer1}>
                            {fontsLoaded && <Text style={styles.TextMessage3}>{message.time}</Text>}
                            <View style={styles.KolvoMessageContainer}>
                                {fontsLoaded && <Text style={styles.TextMessage4}>1</Text>}
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

export default LastMessages

const styles = StyleSheet.create({
    MessageImage:{
        height: 70,
        width: 70,
        borderRadius: 35,
    },

    ScrollBlock:{
        height: '50%',
    },

    MessageContainer:{
        height: 89,
        borderRadius: 22,
        backgroundColor: '#1F1F1F',
        marginBottom: 7,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 15,
        borderColor: '#7D7783',
        borderWidth: 1
    },

    TextMessage1:{
        fontSize: 16,
        fontFamily: 'AnekDevanagari',
        color: '#C8C8C8'
    },

    TextMessage2:{
        fontSize: 16,
        fontFamily: 'AnekDevanagari',
        color: 'white'
    },

    TextMessage3:{
        fontSize: 16,
        fontFamily: 'AnekDevanagari',
        color: '#7C01F6'
    },

    TextMessage4:{
        fontSize: 16,
        fontFamily: 'AnekDevanagari',
        color: 'white'
    },

    TextMainMessageContainer:{
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    TextMessageContainer:{
        gap: 10
    },

    TextMessageContainer1:{
        gap: 10,
        alignItems: 'center'
    },

    KolvoMessageContainer:{
        alignItems: 'center',
        backgroundColor: '#7C01F6',
        borderRadius: 45,
        width: 25,
        height: 25
    },

    MainContainer:{
        marginHorizontal: 35,
        marginTop: 25,
        marginBottom: 25
    },

    Block1:{
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        width: 90,
        height: 32,
        borderRadius: 27,
        marginBottom: 15,
        paddingHorizontal: 5,
        backgroundColor: 'radial-gradient(circle, rgba(124,1,246,1) 0%, rgba(182,109,255,1) 41%)',
    },

    Text:{
        fontSize: 16,
        color: 'white',
        fontFamily: 'AnekDevanagari',
        paddingTop: 4
    }
})