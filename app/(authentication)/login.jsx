import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
//Themed components
import { Link } from 'expo-router'

import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'


const Login = () => {
  return (
    <ThemedView style={styles.container}>

        <Spacer />
        <Text title={true} style={styles.title}>
            Login to Your Account
        </Text>

        <Spacer height={100} />
        <Link href='/register'>

        <Text style={{ textAlign: 'center'}}>
            Don't have an Account? Register then
        </Text>
        </Link>

    </ThemedView>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    title:{
        textAlign: "center",
        fontSize: 18,
        marginBottom: 30,
    }
})