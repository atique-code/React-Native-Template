import React from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import Icon2 from 'react-native-vector-icons/AntDesign'

import {
    Avatar,
    Title,
    Caption,
    Drawer,
} from 'react-native-paper';
// import { transparent } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';


var DrawerContentMain = [
    {
        name: "home",
        title: "Home",
        // color: "red",
        path: "Home"
    },
    {
        name: "videocamera",
        title: "Video",
        // color: "blue",
        path: "CurveVideo"
    },
    {
        name: "setting",
        title: "Setting",
        // color: "red",
        path: "CurveSetting"
    },
    {
        name: "user",
        title: "Profile",
        path: "CurveProfile"
    },
    {
        name: "user-lock",
        title: "Sign out",
        // color: "red",
        path: "Login"
    },
]
function DrawerContent(props) {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View>
                    {/* header */}
                    <View>
                        <ImageBackground source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmu9qZHSRiMOqjbLmZidt10ailLsX9wNTLpe1erMyUs24TZT3y7Bd8J3NVVuga8mMEW5g&usqp=CAU' }} style={{ width: '100%', height: 180, marginTop: '-2%' }}>
                            <Avatar.Image
                            size={100}
                            color="white"
                                source={{
                                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRspS_ukYMLvsWX4vPkC7PcTiCqJYIASaWapw&usqp=CAU"
                                }


                                }
                                style={{  resizeMode: 'contain', marginTop: '8%', display: "flex", justifyContent: "center", alignSelf: "center" }} />

                            

                        </ImageBackground>
                    </View>


                    <Drawer.Section style={styles.drawerSection} >
                        {
                            DrawerContentMain.map((v, i) => {
                                return (
                                    <DrawerItem
                                        key={i}
                                        icon={({ size }) => (
                                            <Icon2
                                                name={v.name}
                                                color={v.color}
                                                size={size}
                                            />

                                        )}
                                        label={v.title}
                                        onPress={() => { props.navigation.navigate(v.path) }}
                                    />
                                )
                            })
                        }



                    </Drawer.Section>


                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>

            </Drawer.Section>

        </View>
    )
}

const styles = StyleSheet.create({
    
    Text: {
        fontWeight: 'bold',
        color: 'red'

    },
    
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 10,

    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});

export default DrawerContent