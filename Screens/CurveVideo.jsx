import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {ActivityIndicator, Avatar} from 'react-native-paper';
import YoutubePlayer from 'react-native-youtube-iframe';

export const CurveVideo = () => {
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('Videos')
      .onSnapshot(
        querySnapshot => {
          const all_videos = [];

          querySnapshot.forEach(documentSnapshot => {
            all_videos.push({
              ...documentSnapshot.data(),
              key: documentSnapshot.id,
            });
          });

          setVideos(all_videos);
          setLoading(false);
        },
        error => {
          console.error('Error fetching videos: ', error);
        },
      );

    return () => subscriber();
  }, []);

  console.log(videos);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View>
      {/* <Text>Videos</Text>
      <YoutubePlayer
        height={300}
        // play={true}
        videoId={'SK200UwNM6s'}
      /> */}

      <View style={{marginTop: 20}}>
        <ScrollView nestedScrollEnabled={true}>
          <FlatList
            data={videos}
            renderItem={({item}) => (
              <View style={{marginVertical: 5}}>
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
                </View>
                <YoutubePlayer
                  height={300}
                  // play={true}
                  videoId={item.Video_Key}
                />

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
    </View>
  );
};
