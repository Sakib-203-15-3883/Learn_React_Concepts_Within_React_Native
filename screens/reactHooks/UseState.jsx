import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UseState = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>UseState</Text>
    </ScrollView>
  )
}

export default UseState

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"black"
  }
})