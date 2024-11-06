
import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import FlatCards from './components/FlatCards'


const App = () => {
  return (
    <SafeAreaView>
        <ScrollView>
          {/* <Text>App</Text> */}
          <FlatCards></FlatCards>
        </ScrollView>
      </SafeAreaView>
  )
}

export default App