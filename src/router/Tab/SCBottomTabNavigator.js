import React, { Component } from "react";

import Octicons from 'react-native-vector-icons/Octicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
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
            tabBarActiveTintColor: SCColors.white,
            tabBarInactiveTintColor: SCColors.tabInactive,
            headerShown:false,
            tabBarStyle: {
              backgroundColor: "rgb(45,45,45)",
              paddingVertical: RFPercentage(0.6),
              paddingBottom: Platform.OS == 'ios' ? RFPercentage(3) : RFPercentage(0.5),
              height: Platform.OS == 'ios' ? RFPercentage(9.2) : RFPercentage(10),
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
          name="Leagues"
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
          name="News"
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
          name="Browser"
          component={Reward}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo
                name='browser'
                size={RFPercentage(2.5)}
                color={color} />
            )
          }}
        />
        <BottomTab.Screen
          name="Setting"
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign
                name='setting'
                size={RFPercentage(3)}
                color={color} />
            )
          }}
        />
      </BottomTab.Navigator>
    );
  }

}

