import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {Avatar} from 'react-native-paper';

function SpleshScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Avatar.Icon size={100} icon="home" />
      <Text style={{color: 'black'}}>Splash Screen</Text>
    </View>
  );
}

export default SpleshScreen;
