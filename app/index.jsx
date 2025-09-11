import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Road from '../assets/road2.jpg'
import {Link} from 'expo-router'
import Continue from '../assets/continuebtn.jpg'

const Home = () => {
  return (
    <View style={styles.container}>
        <Image source={Road} style={styles.img}/>


      <Text></Text>
      <Text style={[styles.title, {color:'green'}, {fontStyle:'poppins'}]}>REPORTIT APP</Text>
      <Text style={styles.head}>Get it all here</Text>
      <Text style={{marginTop: 10, marginBottom: 30}}>The real game begins..</Text>

      <View>
        <Text style={styles.card}>Hello here, this is it..a card</Text>
      </View>

      <Link href="/about" style={styles.link}>About Page</Link>
      {/* <Link><Image source={Continue} style={styles.imgc}/></Link> */}
      <Link href="/contact" style={styles.link}>Contact Page</Link>

      <View>
        <Text style={styles.card1}>Continue</Text>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,

    },
    head: {
        fontWeight: 'bold',
        fontStyle: 'italic',
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
      marginBottomWidth: 1,
    },

})