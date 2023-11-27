import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SpleshScreen from '../Screens/SpleshScreen';
import Main_Home from '../Screens/Main_Home';
import SignUp from '../Screens/SignUp';
import Login from '../Screens/Login';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
         name="Splesh"
         options={{
          headerShown: false
      }}
         component={SpleshScreen} />
         <Stack.Screen
         name="Login"
         options={{
          headerShown: false
      }}
         component={Login} />
        <Stack.Screen
         name="SignUp"
         options={{
          headerShown: false
      }}
         component={SignUp} />
        <Stack.Screen
         name='drawer'
         options={{
          headerShown: false
      }}
         component={Main_Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
