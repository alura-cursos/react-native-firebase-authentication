import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createNativeStackNavigator();

import Login from './telas/Login';
import Cadastro from './telas/Cadastro';
import Principal from './telas/Principal';

export default function Rotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Tab.Screen name="Cadastro" component={Cadastro} />
        <Tab.Screen name="Principal" component={Principal} options={{ headerShown: false }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}