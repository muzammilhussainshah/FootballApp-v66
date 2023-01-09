// @app
import moment from 'moment';
import React from 'react';
import {
  Text,
  View
} from 'react-native';

import Fontisto from 'react-native-vector-icons/Fontisto';
import { RFPercentage } from 'react-native-responsive-fontsize';

// @components
import SCColors from '../styles/SCColors';
import TeamStats from './TeamStats';
import { styles } from './styles'

const MatchStats = ({ item }) => {
  return (
    <>
      <View style={styles.matchStatusSubContainer}>
        {TeamStats(item.item, 1)}
        {TeamStats(item.item, 2)}
      </View>
      <View style={styles.matchStatusSubContainer}>
        {item.item.isLive ?
          <View style={styles.liveIconContainer('medium', 'right')}>
            <Text style={styles.liveText('medium')}>{`LIVE`}</Text>
          </View>
          : item.item.matchTime ?
            <View style={styles.liveMatchTimeContainer}>
              <Text style={styles.liveText('medium')}>{moment(item.item?.matchTime).format('hh:mm A')}</Text>
              <View style={styles.bellIconContainer}>
                <Fontisto
                  name='bell'
                  size={RFPercentage(1.8)}
                  color={SCColors.white}
                />
              </View>
            </View>
            : null
        }
      </View>
    </>
  );
};

export default MatchStats;
