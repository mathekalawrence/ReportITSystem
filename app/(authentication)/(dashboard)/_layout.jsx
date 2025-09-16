import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
//import { useColorScheme } from 'react-native'
import { Colors } from "../../constants/Colors"
import { Ionicons } from "@expo/vector-icons"


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
        options= {{ title: 'Profile', tabBarIcon: ({focused}) => (
            <Ionicons 
            size={24}
            name={focused ? 'person' : 'person-circle'}
            color={focused ? theme.iconColorFocused : theme.iconColor}
            />
        )}}
        />

        <Tabs.Screen 
        name="reportincident" 
        options= {{ title: 'Report Incident', tabBarIcon: ({focused}) => (
             <Ionicons 
            size={24}
            name={focused ? 'book' : 'phone-portrait'}
            color={focused ? theme.iconColorFocused : theme.iconColor}
            /> 
        )}}
        />

        <Tabs.Screen 
        name="firstaid" 
        options= {{ title: 'FirstAid', tabBarIcon:({focused}) => (
              <Ionicons 
            size={24}
            name={focused ? 'medical' : 'medkit'}
            color={focused ? theme.iconColorFocused : theme.iconColor}
            />
        )}}
        />

        <Tabs.Screen 
        name="traffic" 
        options= {{ title: 'Traffic', tabBarIcon:({focused}) => (
              <Ionicons 
            size={24}
            name={focused ? 'car' : 'bus'}
            color={focused ? theme.iconColorFocused : theme.iconColor}
            />
        )}}
        />

        
        <Tabs.Screen 
        name="admin" 
        options= {{ title: 'Admin', tabBarIcon:({focused}) => (
              <Ionicons 
            size={24}
            name={focused ? 'construct' : 'shield-checkmark'}
            color={focused ? theme.iconColorFocused : theme.iconColor}
            />
        )}}
        />

        <Tabs.Screen 
        name="more" 
        options= {{ title: 'More', tabBarIcon:({focused}) => (
              <Ionicons 
            size={24}
            name={focused ? 'ellipsis-horizontal' : 'options'}
            color={focused ? theme.iconColorFocused : theme.iconColor}
            />
        )}}
        />

    </Tabs>
   
  )
}

export default DashboardLayout

const styles = StyleSheet.create({})