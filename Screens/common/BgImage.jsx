import React from "react";
import { ImageBackground, View } from "react-native";

export const CustomBgImage =({children})=>{
    console.log("test1234444")
    return(
        <View>
            <ImageBackground source={require("../../assets/images/leaves.jpg")} style={{height: "100%"}} />
            <View style={{position: "absolute"}}>
                {children}
            </View>
        </View>
    )
}
