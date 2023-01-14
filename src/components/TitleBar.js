// @app
import React from 'react';
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';

// @components
import { styles } from './styles'

const TitleBar = ({ title, seeAllEnable, downArrow,seeAllFunc }) => {
  return (
    <View style={[styles.TitleBarContainer]}>
      <Text style={styles.TitleBarTile}>{title} {' '}{downArrow}</Text>

      {seeAllEnable &&
        <TouchableOpacity
        onPress={()=>{seeAllFunc?seeAllFunc():null}}
        activeOpacity={.8}>
          <Text style={styles.TitleBarBtn}>{`See All`}</Text>
        </TouchableOpacity>
      }
    </View>
  );
};

export default TitleBar;
