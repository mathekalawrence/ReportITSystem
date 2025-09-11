import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
//import { Slot } from 'expo-router'
import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
    
       <Stack>
        <Stack.Screen name='index' options={{title: 'Welcome'}} style={styles.title} />
        <Stack.Screen name='about' options={{title: 'About'}} style={styles.title} />
        <Stack.Screen name='contact' options={{title: 'Contact Us'}} style={styles.title}/>

      </Stack>

  )
}

export default RootLayout

const styles = StyleSheet.create({
    title: {
        alignContent: 'center',
        textAlign: 'center',
        justifyContent: 'center'
    }
})