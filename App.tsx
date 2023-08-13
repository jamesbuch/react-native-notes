import React, { useState, useEffect } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Text } from 'react-native-paper'

import HomeScreen from './screens/HomeScreen'
import AddNoteScreen from './screens/AddNoteScreen'

const Stack = createNativeStackNavigator()

function App(): JSX.Element {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home"
          component={HomeScreen}
          options={({ navigation, route }: any) => ({
            headerTitle: (props) => <Text {...props} style={{ color: '#fff' }}>Home</Text>,
            // Add a placeholder button without the `onPress` to avoid flicker
            headerStyle: {
              backgroundColor: '#663399',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold'
            },
          })}
        />
        <Stack.Screen name="AddNote"
          component={AddNoteScreen}
          options={({ navigation, route }: any) => ({
            headerTitle: (props) => <Text {...props} style={{ color: '#fff' }}>Add Note</Text>,
            // Add a placeholder button without the `onPress` to avoid flicker
            headerStyle: {
              backgroundColor: '#663399',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold'
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
