import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from '../screens/Main';
import UseState from '../screens/reactHooks/UseState';
import UseEffect from '../screens/reactHooks/UseEffect';
import UseEffectAdvanced from '../screens/reactHooks/UseEffectAdvanced';
import BasicSearch from '../screens/reactBasic/BasicSearch';

const MainStackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator 
    initialRouteName="Main"
    screenOptions={{headerShown:false}}
    >
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="UseState" component={UseState} />
      <Stack.Screen name="UseEffect" component={UseEffect} />
      <Stack.Screen name="UseEffectAdvanced" component={UseEffectAdvanced} />
      <Stack.Screen name="BasicSearch" component={BasicSearch} />
    </Stack.Navigator>
  );
};

export default MainStackNavigation;


