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
      screenOptions={{headerShown: false, tabBarStyle:{
        backgroundColor: theme.navBackground,
        paddingTop: 10,
        height: 90,
      },
      tabBarActiveTintColor: theme.iconColorFocused,
      tabBarInactiveTintColor: theme.iconColor,

    }} 
    >
        <Tabs.Screen 
        name="profile" 
        options= {{ title: 'Profile' }}
        />

        <Tabs.Screen 
        name="reportincident" 
        options= {{ title: 'Report Incident' }}
        />

        <Tabs.Screen 
        name="firstaid" 
        options= {{ title: 'FirstAid' }}
        />

        <Tabs.Screen 
        name="traffic" 
        options= {{ title: 'Traffic' }}
        />

    </Tabs>

   
  )
}

export default DashboardLayout

const styles = StyleSheet.create({})