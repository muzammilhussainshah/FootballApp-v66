// @app
import React, { useState } from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize';

// @components
import Header from '../../components/Header';
import TrendingNewsCard from '../../components/TrendingNewsCard';
import { styles } from './styles';
import {
  DUMMYBANNERS,
  LIVEDATES,
  MATCHSTATUS
} from './DummyData';

const Live = ({ navigation }) => {
  // STATE
  const [activeCategory, setActiveCategory] = useState('Today, 12 Sep')
  // STATE

  // LIVE DATES BUTTONS COMPONENT
  const categoryButton = (item) => {
    return (
      <TouchableOpacity
        onPress={() => setActiveCategory(item)}
        style={styles.caregoryBtnContainer(activeCategory == item ? true : false)}>
        <Text style={styles.caregoryBtnText(activeCategory == item ? true : false)}>{item}</Text>
      </TouchableOpacity>
    )
  }
  // LIVE DATES BUTTONS COMPONENT

  // LIVE TEAMS COMPONENTS
  const teamIcons = (item) => {
    return (
      <TouchableOpacity
        style={styles.teamIconsContainer(activeCategory == item ? true : false)}>
        <Image source={{ uri: item }} style={styles.crousalBaner} />
      </TouchableOpacity>
    )
  }
  // LIVE TEAMS COMPONENTS

  return (
    <View style={[styles.container,]}>

      {/* HEADER */}
      < Header />
      {/* HEADER */}

      {/* LIVE DATES BUTTONS */}
      <View style={{ height: RFPercentage(6.5) }}>
        <FlatList
          data={LIVEDATES}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.liveDatesContainer}
          renderItem={({ item }) => categoryButton(item)}
          keyExtractor={item => item.id}
        />
      </View>
      {/* LIVE DATES BUTTONS */}
      <View style={[styles.container,]}>
        <ScrollView >
          {/* LIVE TEAMS */}
          <FlatList
            data={DUMMYBANNERS}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.liveTeamsContainer}
            renderItem={({ item }) => teamIcons(item)}
            keyExtractor={item => item.id}
          />
          {/* LIVE TEAMS */}
          {/* TRENDING NEWS */}
          <FlatList
            data={MATCHSTATUS}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ padding: RFPercentage(2) }}
            renderItem={(props) => (
              <>
                <TrendingNewsCard
                  matchStatus
                  navigateTo={() => navigation.navigate('MatchNews', { isLive: props?.item?.isLive == true ? true : false })}
                  newDatalength={MATCHSTATUS.length} item={props} />
              </>)}
            keyExtractor={item => item.id}
          />
          {/* TRENDING NEWS */}

        </ScrollView>
      </View>
    </View>

  );
};

export default Live;
