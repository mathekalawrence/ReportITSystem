import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
//import { useColorScheme } from 'react-native'
import { Colors } from "../../constants/Colors"

const DashboardLayout = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light


  return (
  
      <Tabs
      screenOptions={{headerShown: false}} 
      />
   
  )
}

export default DashboardLayout

const styles = StyleSheet.create({})