import * as React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Home from './components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Favorites from './components/Favorites';
import { useState } from 'react/cjs/react.production.min';


const Tab = createMaterialBottomTabNavigator();
const [show, setShow] = useState(false)
function Authorization(){
  return(
    <View style={{display:"flex", flex:1, flexDirection:'column'}}>
      <View style={{flex:11, marginLeft:10, padding: 0}}>
        <Image source={require('./images/IT.png')} />
      </View>
      <View style={{flex:1}} >
        <Image source={require('./images/Bilim-Logo.png')} />
      </View>
      <View style={{flex:2, display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
        <Button title="Log In" color="#841584" onPress={() => setShow(true)}/>
        <Button title="Register" color="#841584" onPress={() => setShow(true)} />
      </View>
    </View>
  )
}

function MyTabs() {
  return (
    <Tab.Navigator activeColor="#f0f7f4">
      <Tab.Screen name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }} />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="star" color={color} size={26} />
          ),
        }}
      />
      
      
    </Tab.Navigator>
  )
}
function check(){
  if(!show){
    return(
      <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
    )
  }else{
    <Authorization />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default function App(){
  return (
    check()
  )
};  
