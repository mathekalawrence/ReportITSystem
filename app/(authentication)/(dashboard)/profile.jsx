import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Spacer from '../../../components/Spacer'

const Profile = () => {
  return (
    <View>
      <Text>Profile Info</Text>
      <Text>Username</Text>
      <Text>Email Address</Text>
      <Text>Password</Text>

      <Spacer />
    </View>
    


  )
}

export default Profile

const styles = StyleSheet.create({
        container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    }
})