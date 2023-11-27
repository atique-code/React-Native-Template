import React from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import Icon2 from 'react-native-vector-icons/FontAwesome5'

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
        title: "Home12",
        // color: "red",
        path: "Home"
    },
    {
        name: "address-book",
        title: "Contact",
        // color: "blue",
        path: "Contact"
    },
    {
        name: "bahai",
        title: "Setting",
        // color: "red",
        path: "Home"
    },
    {
        name: "user-lock",
        title: "Sign out",
        // color: "red",
        path: "SignUp"
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
                            size={80}
                            color="white"
                                source={{
                                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRspS_ukYMLvsWX4vPkC7PcTiCqJYIASaWapw&usqp=CAU"
                                }


                                }
                                style={{  resizeMode: 'contain', marginTop: '8%',marginLeft:"12%" }} />

                            <View style={styles.drawerContent}>
                                <View style={styles.userInfoSection}>

                                    <View style={{ flexDirection: 'row', marginTop: "13%" }}>

                                        <View style={{ marginLeft: 5, flexDirection: 'column' }}>
                                            <Title style={styles.title}>Name: Atique Ur Rehman</Title>
                                            <Caption style={styles.caption}>Email: atiquekalwar123@gmail.com</Caption>
                                        </View>
                                    </View>

                                </View>

                            </View>

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
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 10,
    },
    Text: {
        fontWeight: 'bold',
        color: 'red'

    },
    title: {
        fontSize: 16,
        color: 'white',
        marginTop: '-15%',
        marginLeft: '10%'
    },
    caption: {
        fontSize: 16,
        color: 'white',
        marginLeft: '10%'
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