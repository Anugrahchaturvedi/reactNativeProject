import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCard from './Components/FlatCard'
import ElevatedCards from './Components/ElevatedCards'
import FancyCards from './Components/FancyCards'
import ActionCard from './Components/ActionCard'
import ContactList from './Components/ContactList'


const App2 = () => {
  return (
    <SafeAreaView>
        <ScrollView>
            <FlatCard/>
            <ElevatedCards/>
            <FancyCards/>
            <FancyCards/>
            <FancyCards/>
            <ActionCard/>
            <ContactList/>
        </ScrollView>
    </SafeAreaView>
  )
}

export default App2