// @app
import React from 'react';
import { Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

import Ionicons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import SCColors from '../styles/SCColors';

import { styles } from './styles'
// @components

const Header = () => {
  return (
    <View style={[styles.headerContainer]}>
      <View style={styles.headerHeading}>
        <Text style={styles.headerHeadingText1}>Football</Text>
      </View>
    </View>
  );
};

export default Header;
