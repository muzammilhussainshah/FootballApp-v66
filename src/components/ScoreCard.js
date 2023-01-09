// @app
import React from 'react';
import {
  Text,
  View
} from 'react-native';

// @components
import Ionicons from 'react-native-vector-icons/Ionicons'
import { RFPercentage } from 'react-native-responsive-fontsize';

import { styles } from './styles'

const ScoreCard = ({ team1Logo,
  team2Logo,
  team1Name,
  team2Name,
  team1Score,
  team2Score,
  matchDuration
}) => {
  return (
    <View style={styles.liveScroreContainer}>
      <View style={styles.ScoreHeaderContainer}>
        <Ionicons name='logo-firefox' color="white" size={RFPercentage(2.5)} />
        <View style={styles.liveIconContainer('small')}>
          <Text style={styles.liveText('small')}>{`LIVE`}</Text>
        </View>
      </View>
      <View style={styles.ScoreTeamLogoContainer}>
        {team1Logo}
        <Text style={styles.VSText}>{`VS`}</Text>
        {team2Logo}
      </View>
      <View style={styles.ScoreTeamNameContainer}>
        <Text style={styles.TeamText}>{team1Name}</Text>
        <Text style={styles.TeamText}>{team2Name}</Text>
      </View>
      <View style={styles.ScoreContainer}>
        <Text style={styles.GoalText}>{team1Score}</Text>
        <Text style={styles.MinsText}>{matchDuration}</Text>
        <Text style={styles.GoalText}>{team2Score}</Text>
      </View>
    </View>
  );
};

export default ScoreCard;
