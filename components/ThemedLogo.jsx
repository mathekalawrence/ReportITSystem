import { StyleSheet, Text, View, Image, useColorScheme } from 'react-native'
import React from 'react'
//images
import Road3 from '../assets/road3.jpg'

const ThemedLogo = () => {
    const colorScheme = useColorScheme()
    const logo = colorScheme === 'dark' ? DarkLogo : LightLogo


  return (
      <Image source={Road3}/>
    
  )
}

export default ThemedLogo

const styles = StyleSheet.create({})