import React from 'react'
import { SafeAreaView, Text } from 'react-native'

const NotificationScreen = () => {
  return (
    <SafeAreaView style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style = {{color: 'red'}}>Notification Screen</Text>
    </SafeAreaView>
  )
}

export default NotificationScreen