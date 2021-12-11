import React from 'react'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import LaunchesPage from './Launches'
import DetailsPage from './Details'

const Tab = createMaterialBottomTabNavigator();

function LaunchTab() {




    
return(
    <Tab.Navigator
    initialRouteName="Discover"
    shifting={true}
    labeled={true}
    sceneAnimationEnabled={true}
    activeColor="white"
    inactiveColor="grey"
    barStyle={{ backgroundColor: '#476A94'}}>
        <Tab.Screen name ='Discover' component={LaunchesPage}
                options={{
                    tabBarIcon:({color,size}) => (
                        <MaterialCommunityIcons name='home' color={color} size={26}/>
                    )
                }}  />
        <Tab.Screen name ='Details' component={DetailsPage} 
        
                options={{
                    tabBarIcon:({color,size}) => (
                        <MaterialCommunityIcons name='rocket-launch-outline' color={color} size={26}/>
                    )
                }}  />

    </Tab.Navigator>
)

}
export default LaunchTab;