import React from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-paper';

export const CustomTextInput = ({label, placeholder, onChangeText, keyboardType}) => {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        mode="outlined"
        onChangeText={onChangeText}
        label={label}
        keyboardType={keyboardType}
      />
    </View>
  );
};
