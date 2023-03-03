import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'

import StackRoutes from './StackRoutes';
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Drawer = createDrawerNavigator();

export default function Routes() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false, 

        
            }}
        >
            <Drawer.Screen 
            name="HomeDrawer" 
            component={StackRoutes} 
            options={{
                title: 'Home',
                drawerIcon: ({focused, size, color}) => {
                    return <MaterialCommunityIcons
                        name={focused ? 'movie-open' : 'movie-outline'}
                        size={size}
                        color={color} />;
                }

            }}
            />
        </Drawer.Navigator>
    )
}