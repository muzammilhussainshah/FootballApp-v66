// @app
import React from 'react';
import { TouchableOpacity, } from 'react-native';

// @components
import { styles } from './styles'
import ExploreCart from './ExploreCart';
import MatchStats from './MatchStats';

const TrendingNewsCard = ({ item, newDatalength, matchStatus, navigateTo }) => {
  return (

    // CART 
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigateTo && navigateTo()}
      style={styles.newsCartContainer(item.index == 0, item.index + 1 == newDatalength,)}>
      {matchStatus ?
        <MatchStats item={item} /> :
        <ExploreCart item={item} />}
    </TouchableOpacity>
    // CART 

  );
};

export default TrendingNewsCard;
