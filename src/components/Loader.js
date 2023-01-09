// @app
import moment from 'moment';
import React from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import SCColors from '../styles/SCColors';
// import SCColors from '../styles/SCColors';

// @components
import { styles } from './styles'

const Loader = () => {
  // const { item, footer, footerText, navigateTo } = props
  // console.log(index, 'indexindexindex')
  return (
    <View style={styles.LoaderContainer}>
      <ActivityIndicator color={SCColors.white} size="large" />

    </View>)
};

export default Loader;
