// DropdownComponent.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DropdownComponent = ({ data, isFocus, value, setIsFocus, setValue }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select</Text>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '...'}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocus ? 'blue' : 'black'}
            name="Safety"
            size={20}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  dropdown: {
    height: 50,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: 'white', // Set the background color
  },
  icon: {
    marginRight: 5,
  },
  label: {
    fontSize: 18,
    color: 'black', // Set label color
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'gray', // Set placeholder color
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'black', // Set selected text color
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});

export default DropdownComponent;
