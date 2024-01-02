import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../Screens/Home';
import DrawerContent from './DrawerContent';
import {CurveVideo} from '../Screens/CurveVideo';
import {CurveSetting} from '../Screens/CurveSetting';
import {CurveProfile} from '../Screens/CurverProfile';
import { PrivacyPolicy } from '../Screens/PrivacyPolicy';
import { TermsCondition } from '../Screens/TermsCondition';
import { About } from '../Screens/About';

const Drawer = createDrawerNavigator();

export default function Home_Drawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="CurveVideo" component={CurveVideo} />
      <Drawer.Screen name="CurveSetting" component={CurveSetting} />
      <Drawer.Screen name="CurveProfile" component={CurveProfile} />
      <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Drawer.Screen name="TermsCondition" component={TermsCondition} />
      <Drawer.Screen name="About" component={About} />


    </Drawer.Navigator>
  );
}
