import React, { useState } from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Avatar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {  launchImageLibrary } from 'react-native-image-picker';
import Remove from "react-native-vector-icons/MaterialCommunityIcons"

export const CurveProfile = () => {
  const [selectedImage, setSelectedImage] =useState(null)
  const navigation = useNavigation();
  

  const handleSignout =() => {
    navigation.navigate("Login")
  }


  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

  
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });
  };
 
  let imgAvatar = selectedImage


  const handleRemove =()=>{
    setSelectedImage(null)
  }


  return (
    <View>
      <View
        style={{
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center',
          marginTop: '20%',
        }}>
        <Avatar.Image
          size={120}
          resizeMode="contain"
          source={imgAvatar ? { uri: imgAvatar } : require('../assets/images/profile.png')}
        />
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
          Profile
        </Text>
        <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: "row"
        }}>
        <TouchableOpacity
        onPress={openImagePicker}
          style={{
            color: 'black',
            width: '20%',
            backgroundColor: '#aeb4b7',
            padding: 3,
            borderRadius: 5,
            marginTop: 20,
            marginRight: 10
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>
            edit
          </Text>
        </TouchableOpacity>
        <Remove name="delete" size={30} style={{marginTop: 16,}} onPress={handleRemove}/>
      </View>
      </View>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
        onPress={handleSignout}
          style={{
            color: 'black',
            width: '30%',
            backgroundColor: '#EDEADE',
            padding: 8,
            borderRadius: 5,
            marginTop: 20,
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>
            Signout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
