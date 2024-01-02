import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const CurveSetting = () => {
  const navigation = useNavigation();

  const handlePrivacy = () => {
    navigation.navigate('PrivacyPolicy');
  };

  const handleTerms = () => {
    navigation.navigate('TermsCondition');
  };

  const handleAbout =()=>{
    navigation.navigate("About")
  }
  return (
    <View style={styles.container}>
      <View style={styles.gradientTop}>
        <Text style={styles.privacyText}>Setting</Text>
      </View>
      <View style={styles.whitePart}>
        <TouchableOpacity style={styles.button} onPress={handlePrivacy}>
          <Text style={styles.buttonText}>Privacy & Policy</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleTerms}>
          <Text style={styles.buttonText}>Terms & Condition</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleAbout}>
          <Text style={styles.buttonText}>About</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientTop: {
    height: '30%',
    backgroundColor: '#008000',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  privacyText: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  whitePart: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  button: {
    marginTop: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EDEADE',
    padding: 10,
    borderRadius: 10,
    // marginBottom: 10
  },
  buttonText: {
    marginLeft: 10,
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
