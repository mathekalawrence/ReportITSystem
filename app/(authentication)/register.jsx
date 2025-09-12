import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
//Themed components
import { Link } from 'expo-router'
import { Colors } from '../../constants/Colors'

import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'


const Register = () => {
    const handleSubmit = () => {
        alert('Registration successful!');
        /*setTimeout(() => {
      setVisible(false);
    }, 3000);*/
    }

  return (
    <ThemedView style={styles.container}>

        <Spacer />
        <Text title={true} style={styles.title}>
            Signup to Your Account
        </Text>

         <Pressable 
            onPress = {handleSubmit}
            style={({pressed}) => [styles.btn, pressed && styles.pressed] }>
            <Text style={{ color: '#f2f2f2', fontWeight: 'bold'}}>Register</Text>
        
        </Pressable>

        <Spacer height={100} />
        <Link href='/login'>

        <Text style={{ textAlign: 'center', justifyContent: 'center'}}>
             Have an Account? signin instead
        </Text>
        </Link>

    </ThemedView>
  )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
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