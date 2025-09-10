import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Road from '../assets/road2.jpg'

const Home = () => {
  return (
    <View style={styles.container}>
        <Image source={Road} style={styles.img}/>


      <Text>Home ..here we go!</Text>
      <Text style={[styles.title, {color:'green'}, {fontStyle:'poppins'}]}>REPORTIT APP</Text>
      <Text style={styles.head}>Get it all here</Text>
      <Text style={{marginTop: 10, marginBottom: 30}}>The real game begins..</Text>

      <View>
        <Text style={styles.card}>Hello here, this is it..a card</Text>
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

    }

})