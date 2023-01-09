// @app
import React from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity
} from 'react-native';

import moment from 'moment';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import { RFPercentage } from 'react-native-responsive-fontsize';

// @components
import SCColors from '../styles/SCColors';
import { styles } from './styles'

const ExploreCart = ({ item }) => {
  return (
    <>
      <View style={styles.trendNewsProfileContainer}>
        <Image
          source={{ uri: item?.item?.profilePhoto }}
          style={styles.trendNewsProfile} />
      </View>
      <View style={styles.trendNewsBody}>
        <View style={{ width: '100%', }}>
          <Text style={styles.carouselFooterText}>{item?.item?.title}</Text>
        </View>
        <View style={styles.TrendingNewsCardFooterContainer}>
          <TouchableOpacity>
            <AntDesign
              name='hearto'
              size={RFPercentage(2)}
              color={SCColors.tabInactive} />
          </TouchableOpacity>
          <Text style={[styles.VSText, styles.trendNewsFooterText2]}>{item?.item?.likes}</Text>
          <TouchableOpacity>
            <Octicons
              name='comment'
              size={RFPercentage(2)}
              style={styles.trendNewsFooterText}
              color={SCColors.tabInactive} />
          </TouchableOpacity>
          <Text style={[styles.VSText, styles.trendNewsFooterText2]}>{item?.item?.comments}</Text>
          <Text style={[styles.VSText, styles.trendNewsFooterText]}>{moment(item?.item?.timeStamp).calendar()}</Text>
        </View>
      </View>
    </>
  );
};

export default ExploreCart;
