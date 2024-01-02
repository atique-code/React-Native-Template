import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingScreen from '../Screens/SettingScreen';
import NotificationScreen from '../Screens/notification';
import ICON from "react-native-vector-icons/Ionicons";
const Tab = createBottomTabNavigator();
function BtmNavigation() {
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { position: 'absolute', bottom: 1 },
        }}>
        <Tab.Screen
         options={{
          tabBarIcon: ({focused})=> <ICON name="notifications-outline" size={30} color={focused ? "black" : "gray"}/>
        }}
         name="Notification"
          component={NotificationScreen} />
        <Tab.Screen
        options={{
          tabBarIcon: ({focused})=><ICON name="settings-outline" size={30} color={focused ? "black" : "gray"} />
        }}
         name="Setting"
          component={SettingScreen} />
      </Tab.Navigator>
    </View>
  );
}

export default BtmNavigation;
