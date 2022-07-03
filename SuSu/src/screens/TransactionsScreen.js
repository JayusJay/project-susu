import React from 'react'
import {Text, SafeAreaView} from 'react-native'

const TransactionScreen = () => {
  return (
    <SafeAreaView style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style = {{color: 'red'}}>TransactionScreen</Text>
    </SafeAreaView>
  )
}

export default TransactionScreen