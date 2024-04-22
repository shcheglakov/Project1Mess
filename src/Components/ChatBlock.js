import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import MyMessage from './ChatComponents/MyMessage'
import OtherMessage from './ChatComponents/OtherMessage'

const ChatBlock = ({ route }) => {
  const [allChat, setAllChat] = useState([]);
  console.log('route: ' + JSON.stringify(route));

  useEffect(() => {
    const renderChat = () => {
      const messages = Object.values(route);

      const chatComponents = messages.map((message, index) => {
        if (index % 2 === 0) {
          return <OtherMessage key={index} message={message} />;
        } else {
          return <MyMessage key={index} message={message} />;
        }
      });

      setAllChat(chatComponents);
    };

    renderChat();
  }, [route]);

  return (
    <LinearGradient
      colors={['rgba(0,0,0,1)', 'rgba(42,0,84,1)']}
      style={styles.MainContainer}
    >
      <Text style={styles.TextData}>Today</Text>
      <ScrollView style={styles.ChatCantainer}>{allChat}</ScrollView>
    </LinearGradient>
  );
};

export default ChatBlock;

const styles = StyleSheet.create({
  MainContainer:{
    flex: 1,
    paddingTop: 20,
    borderRadius: 45,
    alignItems: 'center'
  },

  ChatCantainer:{
    paddingTop: 15,
    width: '85%',
  },

  TextData:{
    fontSize: 18,
    color: '#4D4C4E'
  }
})