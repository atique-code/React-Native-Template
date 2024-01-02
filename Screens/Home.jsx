import React from "react";
import { View, Text} from "react-native";
// import BtmNavigation from "../config/BtmNavigation";
import CustomBar from "../config/CustomeNavigationBar";


function Home({navigation}) {

    return(
        <View style={{flex: 1}}>
            {/* <BtmNavigation/> */}
            <CustomBar  navigation={navigation}/>
        </View>
    )
}

export default Home;