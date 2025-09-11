import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slack, Stack } from 'expo-router'
//import { StatusBar } from 'expo-status-bar'
import { StatusBar } from 'react-native'

{/*
const AuthLayout = () => {
  return (
     <>
     <StatusBar style='auto' />

     <Stack
      screenOptions={{ headerShown: false, animation: "none"}}
     />
     </>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})
*/}

export default function _Layout(){
    return(
        <>
        <StatusBar style="auto" />
        <Stack
        screenOptions = {{ headerShown: false, animation: "none"}}
        />
        </>
    )
}