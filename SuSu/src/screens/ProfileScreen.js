import React from 'react'
import {Text, SafeAreaView} from 'react-native'

const ProfileScreen = () => {
  return (
    <SafeAreaView style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style = {{color: 'red'}}>Profile Screen</Text>
    </SafeAreaView>
  )
}

export default ProfileScreen