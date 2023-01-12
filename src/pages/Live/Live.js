// @app
import React, { useEffect, useState } from 'react';
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
import Loader from '../../components/Loader';
import { useSelector } from 'react-redux';
import moment from 'moment';

const Live = ({ navigation }) => {
  const loader = useSelector((state) => state.root.loader);

  const [liveDates, setLiveDates] = useState('')
  
  function LIVEDATES(current) {
    var week = new Array();
    for (var i = 0; i < 7; i++) {
      week.push(moment(new Date(current)).format('dddd, D MMM'));
      current.setDate(current.getDate() + 1);
    }
    return week;
  }
  
  useEffect(() => {
    setLiveDates(LIVEDATES(new Date()))
  }, [])
  
  // STATE
  const [activeCategory, setActiveCategory] = useState(moment(new Date()).format('dddd, D MMM'))
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

      {/* LOADER */}
      {loader &&
        <Loader />
      }
      {/* LOADER */}

      {/* HEADER */}
      < Header />
      {/* HEADER */}

      {/* LIVE DATES BUTTONS */}
      <View style={{ height: RFPercentage(6.5) }}>
        <FlatList
          data={liveDates}
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
