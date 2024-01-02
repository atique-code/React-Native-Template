import React, { useEffect, useState } from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ActivityIndicator} from 'react-native';
import { Button } from 'react-native-paper';

export const About = () => {
  const [about, setAbout] = useState({});

  useEffect(() => {
    const subscriber = firestore()
      .collection('SMITAbout')
      .doc('smit') 
      .onSnapshot(documentSnapshot => {
        if (documentSnapshot.exists) {
            setAbout({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        //   setLoading(false);
        } else {
          console.log('Document does not exist');
        }
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

 
  return (
    <SafeAreaView style={{flex: 1}}>
      <Image
        source={require('../assets/images/needyImage.jpg')}
        style={{
          width: '100%',
          height: '50%',
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
        }}
      />
      <View style={{padding: 16}}>
        <Text style={{fontSize: 24, fontWeight: 'bold', color: 'black'}}>
          Description
        </Text>
        <Text style={{textAlign: 'justify'}}>{about.Description}</Text>
      </View>
      <View style={{display: "flex", justifyContent: "center", alignItems: "center", }}>
      <TouchableOpacity
          style={{
            color: 'black',
            width: '30%',
            backgroundColor: '#008000',
            padding: 8,
            borderRadius: 5,
            // marginTop: 20,
            marginBottom: "20%"
            
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>
            Donate
          </Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};
