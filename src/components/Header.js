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
        <Text style={styles.headerHeadingText1}>Now</Text>
        <Text style={styles.headerHeadingText2}>TV</Text>
      </View>
      <View style={styles.headerHeading}>
        <Ionicons
          name='search'
          size={RFPercentage(2.6)}
          color={SCColors.white}
          style={styles.iconsMargin}
        />
        <Fontisto
          name='bell'
          size={RFPercentage(2.8)}
          color={SCColors.white}
        />
      </View>
    </View>
  );
};

export default Header;
