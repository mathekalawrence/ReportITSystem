import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About the App</Text>

      <Link href="/" style={styles.link}>Back Home</Link>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
     container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'top',
        marginTop: 30,

    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,

    },
    head: {
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    link: {
      marginVertical: 10,
      marginBottomWidth: 1,
    }

})