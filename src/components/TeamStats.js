// @app
import React from 'react';
import {
  Text,
  Image,
  View
} from 'react-native';

// @components
import { styles } from './styles'

const TeamStats = (item, whichTeam) => {
  return (
    <View style={styles.team1Container}>
      <View style={styles.team1ProfileContainer}>
        <Image
          source={{ uri: whichTeam == 1 ? item?.teams?.home?.logo : item?.teams?.away?.logo }}
          style={styles.teamLogo} />
      </View>
      <Text style={styles.caregoryBtnText}>{whichTeam == 1 ? item?.teams?.home?.name : item?.teams?.away?.name}</Text>
    </View>
  )
};

export default TeamStats;
