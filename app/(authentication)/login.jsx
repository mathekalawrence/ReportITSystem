import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import React, { useState } from "react";

//import React from 'react'
//Themed components
import { Link } from 'expo-router'
import { Colors } from '../../constants/Colors'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedTextInput from '../../components/ThemedTextInput'


const Login = () => {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')


    const handleSubmit = () => {
        console.log('Login successful!', email, password);
        /*setTimeout(() => {
      setVisible(false);
    }, 3000);*/
    }

  return (
    <ThemedView style={styles.container}>

        <Spacer />
        
        <Text title={true} style={styles.title}>
            Login to Your Account
        </Text>

        
        <Spacer />

        <TextInput 
        style={{ width: '80%', marginBottom: 20, height:40, padding: 10}}
        placeholder='Email Address'
        keyboardType="email address"
        onChangeText={setEmail}
        value={email}
        />

        <TextInput 
        style={{ width: '80%', marginBottom: 20, height:40, padding: 10, backgroundColor: ''}}
        placeholder='Enter Password'
        //keyboardType="password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        />

         <Pressable 
        onPress = {handleSubmit}
        style={({pressed}) => [styles.btn, pressed && styles.pressed] }>
        <Text style={{ color: '#f2f2f2', fontWeight: 'bold'}}>SignIn</Text>

        </Pressable>
        


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
        alignItems: 'center'
    },
    title:{
        textAlign: "center",
        fontSize: 18,
        marginBottom: 30,
    },
    btn: {
        backgroundColor: Colors.primary,
        padding: 25,
        borderRadius: 5,
        //height: 40,
        alignContent: 'center',
        
    },
    pressed: {
        opacity: 0.8,
    }
})