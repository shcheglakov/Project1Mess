import React, { useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Messages from './src/Messages';
import Calls from './src/Calls';
import Settings from './src/Settings';

import * as Font from 'expo-font';
import Chat from './src/Chat';

export async function loadFonts() {
  await Font.loadAsync({
    'AnekDevanagari': require('./assets/fonts/AnekDevanagari-VariableFont_wdth,wght.ttf'),
  });
}

const StackBottom = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function InsideMessages() {
  return (
    <Stack.Navigator  screenOptions={{
      headerShown: false
    }}>
      <Tab.Screen  name="Messages" component={Messages} />
      <Tab.Screen  name='Chat' component={Chat} />
    </Stack.Navigator>
  )
}

function InsideCalls() {
  return (
    <Stack.Navigator  screenOptions={{
      headerShown: false
    }}>
      <Tab.Screen  name="Calls" component={Calls} />
  </Stack.Navigator>
  )
}

function InsideSettings() {
  return (
    <Stack.Navigator  screenOptions={{
      headerShown: false
    }}>
      <Tab.Screen  name="Settings" component={Settings} />
  </Stack.Navigator>
  )
}

export default function App() {
  return (
    <>
      <NavigationContainer>
        <StackBottom.Navigator screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: '#222222',
            borderRadius: 40,
            margin: 35,
            paddingTop: 20,
            borderWidth: 2,
            borderColor: '#222222'
          },
        }}>
          <StackBottom.Screen name="PageMessages" component={InsideMessages} options={{
            title: 'Messages',
            headerBackTitleVisible: false,
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons name="message-processing" color={focused ? '#7C01F6' : '#4D4C4E'} size={32}/>
            ),          
          }}  />
          <StackBottom.Screen name="PageCalls" component={InsideCalls} options={{
            title: 'Calls',
            headerBackTitleVisible: true,  
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons name="phone" color={focused ? '#7C01F6' : '#4D4C4E'} size={30}/>
            ),      
          }} />
          <StackBottom.Screen name="PageSettings" component={InsideSettings} options={{
            title: 'Settings',
            headerBackTitleVisible: false,    
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons name="cog" color={focused ? '#7C01F6' : '#4D4C4E'} size={30}/>
            ),       
          }}/>
        </StackBottom.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  
});
