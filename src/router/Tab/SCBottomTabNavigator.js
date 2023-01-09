import React, { Component } from "react";
import { StyleSheet  } from 'react-native';

import Octicons from 'react-native-vector-icons/Octicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RFPercentage } from 'react-native-responsive-fontsize';

import SCColors from '../../styles/SCColors';
import Home from '../../pages/Home/Home';
import Live from '../../pages/Live/Live';
import Explore from '../../pages/Explore/Explore';
import Profile from '../../pages/Profile/Profile';
import Reward from '../../pages/Reward/Reward';

const BottomTab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <BottomTab.Navigator
        initialRouteName="My Profile"
        screenOptions={{
          headerShown: false,
         
        }}
        tabBarOptions={
          {
            activeTintColor: SCColors.white,
            inactiveTintColor: SCColors.tabInactive,
            showLabel: true,
            tabStyle: {
              backgroundColor: "rgb(45,45,45)",
              paddingVertical: RFPercentage(0.5)
            }
          }}

      >
        <BottomTab.Screen
          name="Home"
          component={Home}
          
          options={{
            tabBarIcon: ({ color, size }) => (
              <Octicons
                name='home'
                size={RFPercentage(3)}
                color={color} />
            )
          }}
        />
        <BottomTab.Screen
          name="Explore"
          component={Explore}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo
                name='folder-video'
                size={RFPercentage(3)}
                color={color} />)
          }}
        />
        <BottomTab.Screen
          name="Live"
          component={Live}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons
                name='online-prediction'
                size={RFPercentage(4)}
                style={{ marginBottom: RFPercentage(0) }}
                color={color} />
            )
          }}
        />
        <BottomTab.Screen
          name="Reward"
          component={Reward}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Octicons
                name='gift'
                size={RFPercentage(2.5)}
                color={color} />
            )
          }}
        />
        <BottomTab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome
                name='user-circle-o'
                size={RFPercentage(3)}
                color={color} />
            )
          }}
        />
      </BottomTab.Navigator>
    );
  }
 
}

// const MyProfileScreenStack = createStackNavigator();
// function MyProfileScreenNavigator() {
//   return (
//     <MyProfileScreenStack.Navigator>
//       <MyProfileScreenStack.Screen
//         name="My Profile"
//         component={MyProfile}
//         options={{ headerShown: false }}
//       />
//       <MyProfileScreenStack.Screen
//       name="Settings"
//       component={Settings}
//       options={{headerShown: false}}/>

//     </MyProfileScreenStack.Navigator>
//   );
// }

// const SkiResortsScreenStack = createStackNavigator();
// function SkiResortsScreenNavigator() {
//   return (
//     <SkiResortsScreenStack.Navigator>
//       <SkiResortsScreenStack.Screen
//         name="Ski resorts"
//         component={SkiResorts}
//         options={{ headerShown: false }}
//       />
//       <SkiResortsScreenStack.Screen
//       name="LiveSession"
//       component={LiveSession}
//       options={{headerShown: false}}/>
//     </SkiResortsScreenStack.Navigator>
//   );
// }

// const ChumsScreenStack = createStackNavigator();
// function ChumsScreenNavigator() {
//   return (
//     <ChumsScreenStack.Navigator>
//       <ChumsScreenStack.Screen
//         name="Chums"
//         component={Chums}
//         options={{ headerShown: false }}
//       />
//       <ChumsScreenStack.Screen
//         name='Chatlist'
//         component={Chatlist}
//         options={{headerShown: false}}
//       />
//       <ChumsScreenStack.Screen
//         name='NewChatGroup'
//         component={NewChatGroup}
//         options={{headerShown: false}}
//       />
//       <ChumsScreenStack.Screen
//         name='ChatScreen'
//         component={ChatScreen}
//         options={{headerShown: false}}
//       />
//     </ChumsScreenStack.Navigator>
//   );
// }

// const AddScreenComponent = () => {
//   return null;
// }

const style = StyleSheet.create({
  shadow: {
    shadowColor: 'red',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.5,
    elevation: 5,
  }
});
