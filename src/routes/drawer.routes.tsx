import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from   '@expo/vector-icons'
import { Entypo } from   '@expo/vector-icons'
import { FontAwesome } from   '@expo/vector-icons'

const { Screen, Navigator } = createDrawerNavigator();

import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';
import { ScreenC } from '../screens/ScreenC';


export function DrawerRoutes() {
  return (
   <Navigator>
    <Screen
        name='screenA'
        component={ScreenA}
        options={{
            drawerLabel: 'Palmeiras',
            drawerIcon : () => <MaterialIcons name='home' size={22} />
        }}
        
    />
    <Screen
        name='screenB'
        component={ScreenB}
        options={{
            drawerLabel: 'Filhos do Palmeiras',
            drawerIcon : () => <FontAwesome name='child' size={22} />
        }}
    />
    <Screen
        name='screenC'
        component={ScreenC}
        options={{
            drawerLabel: 'Hino',
            drawerIcon : () => <Entypo name='music' size={22} />
        }}
    />
   </Navigator>
  );
}