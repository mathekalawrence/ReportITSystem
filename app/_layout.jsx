import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
//import { Slot } from 'expo-router'
import { Stack } from 'expo-router'
import { Colors } from './constants/Colors'
import { StatusBar } from 'expo-status-bar'

const RootLayout = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light


  return (
    <>
    <StatusBar value="auto" />
       <Stack screenOptions={{
            title: 'The Reporter',
            headerStyle: { backgroundColor: theme.navBackground },
            headerTintColor: theme.title,
            headerTitleAlign: 'center',
        
       }}>
        <Stack.Screen name='index' options={{title: 'Welcome'}} style={styles.title} />
        <Stack.Screen name='about' options={{title: 'About'}} style={styles.title} />
        <Stack.Screen name='contact' options={{title: 'Contact Us', headerShown: true}} style={styles.title}/>

      </Stack>
   </>
  )
}

export default RootLayout

const styles = StyleSheet.create({
    title: {
        alignContent: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 40,
    }
})