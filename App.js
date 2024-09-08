import { StyleSheet, StatusBar } from 'react-native'
import { GestureHandlerRootView } from "react-native-gesture-handler";
import 'react-native-gesture-handler';
import React from 'react'
import Navigation	 from './screens/Navigation';
import { SafeAreaView } from 'react-native-safe-area-context';


const App = () => {
  return <SafeAreaView style={{flex:1}} >
  <StatusBar barStyle="dark-content" />
  <GestureHandlerRootView style={{flex:1}}>
    <Navigation />
  </GestureHandlerRootView>
</SafeAreaView>
}

export default App

const styles = StyleSheet.create({})