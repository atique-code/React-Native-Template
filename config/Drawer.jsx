import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Screens/Home';
import Contact from '../Screens/Contact';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

export default function Home_Drawer() {
    return (
    
        <Drawer.Navigator initialRouteName="Home" drawerContent={props =><DrawerContent {...props} />}>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Contact" component={Contact} />
        </Drawer.Navigator>

    );
  }