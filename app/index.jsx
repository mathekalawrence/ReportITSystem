import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Road from '../assets/road2.jpg'
import {Link} from 'expo-router'
import Continue from '../assets/continuebtn.jpg'

//themed components
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <Text style={[styles.title, {color:'green'}, {fontStyle:'poppins'}]}>REPORTIT APP</Text>
        <Image source={Road} style={styles.img}/>


      <Text style={styles.head}>Get it all here</Text>


      <View>
        <Text style={styles.card}>Welcome. Press to Continue</Text>
      </View>

      <Link href='/login' style={styles.link}>
      {/*ThemedTexts */}
      <Text>Login Page</Text>
      </Link>
      {/* <Link><Image source={Continue} style={styles.imgc}/></Link> */}
      <Link href='/register' style={styles.link}>
      <Text>Signup Page</Text>
      </Link>



      <View>
        <Text style={styles.card1}>Continue</Text>
      </View>
    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(179, 190, 190, 0.33)' 

    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,

    },
    head: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        padding: 15,
    },

    card: {
        backgroundColor: '#eee',
        padding: 20,
        borderRadius: 5,
        boxShadow: '4px 4px rgba(0,0,0,0.1)',
    },

    img: {
        marginVertical: 20,
        height: 200,
        width: 300,

    },
    card1: {
        backgroundColor: '#6466d3ff',
        padding: 20,
        borderRadius: 5,
        boxShadow: '4px 4px rgba(0,0,0,0.1)',
        height: 10,
        /*alignItems: 'center',*/
        borderRadius: 35,  
        justifyContent: 'center',   
        width: 200,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        alignContent: 'center',
        padding: 25,
        color: 'purple',
    },
    link: {
      marginVertical: 10,
      marginBottomWidth: 2,
    },

})