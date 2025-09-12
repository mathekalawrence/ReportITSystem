import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Traffic = () => {
  return (
    <View>
      <Text>Trafric Jam and Congestion</Text>
    </View>
  )
}

export default Traffic

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    }
})