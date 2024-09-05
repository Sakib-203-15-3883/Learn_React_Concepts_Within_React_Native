import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainStackNavigation from './Navigation/MainStackNavigation'

const App = () => {
  return (
    <NavigationContainer>
      <MainStackNavigation/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})