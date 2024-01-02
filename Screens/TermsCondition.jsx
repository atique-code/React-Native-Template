import React, {useState, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';

export const TermsCondition = () => {
  const [loading, setLoading] = useState(true);
  const [terms, setTerms] = useState({});

  useEffect(() => {
    const subscriber = firestore()
      .collection('TermsAndCondition')
      .doc('smit Terms') // Replace with the actual document ID
      .onSnapshot(documentSnapshot => {
        if (documentSnapshot.exists) {
          setTerms({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
          setLoading(false);
        } else {
          console.log('Document does not exist');
        }
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  console.log(terms);

  if (loading) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.gradientTop}>
        <Text style={styles.privacyText}>Terms & Conditions</Text>
      </View>
      <View>
        <Text style={styles.policyText}>{terms.Description}</Text>
      </View>
      <Button>Terms & Conditions</Button>
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
    fontSize: 30,
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
  policyText: {
    fontSize: 18,
    lineHeight: 24,
    color: '#333',
    marginBottom: 10,
    textAlign: 'justify',
    marginLeft: 10,
    marginRight: 10,
  },
});
