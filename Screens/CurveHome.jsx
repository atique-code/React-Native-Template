import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import {ActivityIndicator, Avatar} from 'react-native-paper';
import Dots from 'react-native-vector-icons/Entypo';
import firestore from '@react-native-firebase/firestore';
import {Image} from 'react-native';
import Like from 'react-native-vector-icons/AntDesign';
import Comment from 'react-native-vector-icons/FontAwesome';
import Share from 'react-native-vector-icons/AntDesign';

export const CurveHome = () => {
  const [loading, setLoading] = useState(true);
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('PostImage')
      .onSnapshot(querySnapshot => {
        const images = [];

        querySnapshot.forEach(documentSnapshot => {
          images.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setImgs(images);
        setLoading(false);
      });

    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={{marginTop: 20}}>
      <ScrollView nestedScrollEnabled={true}>
        <FlatList
          data={imgs}
          renderItem={({item}) => (
            <View style={{marginVertical: 10}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginLeft: 8,
                  marginRight: 10,
                }}>
                <View style={{flexDirection: 'row', paddingHorizontal: 10}}>
                  <Avatar.Image
                    size={40}
                    source={require('../assets/images/SMITLOGO.jpg')}
                    style={{marginRight: 8}}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: 'black',
                      marginTop: 10,
                    }}>
                    Saylani Welfare
                  </Text>
                </View>
                <View>
                  <Dots
                    name="dots-three-vertical"
                    size={18}
                    style={{marginTop: 12}}
                  />
                </View>
              </View>
              <Image
                source={{uri: item.imageUrl}}
                style={{
                  width: '100%',
                  height: 250,
                  marginTop: 10,
                  marginBottom: 10,
                  borderWidth: 1, 
                  borderColor: 'gray', 
                }}
              />
              <View style={{flexDirection: 'row', marginLeft: 20}}>
                <Like name="like2" size={20} style={{marginRight: 20}} />
                <Comment name="comment-o" size={20} style={{marginRight: 20}} />
                <Share name="sharealt" size={20} />
              </View>
              <View style={{marginLeft: 10, marginVertical: 10, flexDirection: "row"}}>
                {
                    item.Post_Description &&
                <Text style={{fontSize: 16, fontWeight: "bold", color: "black"}}>Saylani Welfare</Text>
                }
                <Text fontSize={18} marginLeft={8}>{item.Post_Description}</Text>
              </View>
            </View>
          )}
          keyExtractor={item => item.key}
        />

        <Text>
          {'\n'}
          {'\n'} {'\n'}
          {'\n'} {'\n'}
        </Text>
      </ScrollView>
    </View>
  );
};
