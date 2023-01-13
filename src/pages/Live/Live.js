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
import Loader from '../../components/Loader';
import { useSelector } from 'react-redux';
import moment from 'moment';
import SCColors from '../../styles/SCColors';

const Live = ({ navigation }) => {
  // STATE
  const [liveDates, setLiveDates] = useState('')
  const [teamIconsSt, setteamIconsSt] = useState([])
  const [todaysMatch, settodaysMatch] = useState('')
  const [activeCategory, setActiveCategory] = useState(moment(new Date()).format('dddd, D MMM'))
  // STATE

  const loader = useSelector((state) => state.root.loader);
  const thisWeek = useSelector((state) => state.root.thisWeek);

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
    let teamIcons = []
    thisWeek.map((item) => {
      teamIcons.push(item.teams.home.logo)
      teamIcons.push(item.teams.away.logo)
    })
    teamIcons = [...new Set(teamIcons)]
    setteamIconsSt(teamIcons)
  }, [])
  useEffect(() => {
    let result = thisWeek.filter((val) => moment(val.fixture.date).format('dddd, D MMM') == activeCategory)
    settodaysMatch(result)
  }, [activeCategory])

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


  const getImg = (index) => {
    return (
      index == 0 ? { uri: 'https://www.shareicon.net/data/2015/09/11/99462_sport_512x512.png' } :
        index == 1 ? { uri: `https://static.thenounproject.com/png/2278735-200.png` }
          :
          index == 2 ? { uri: `https://cdn0.iconfinder.com/data/icons/soccer-training/512/N_T_1264Artboard_1_copy_11-512.png` }
            :
            index == 3 ? { uri: `https://static.thenounproject.com/png/761174-200.png` }
              :
              index == 4 ? { uri: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/football-league-1424464-1204697.png' }
                :
                index == 5 ? { uri: 'https://www.shareicon.net/data/2015/09/11/99462_sport_512x512.png' } :
                  index % 2 == 0 ?
                    { uri: 'https://cdn-icons-png.flaticon.com/512/2629/2629318.png' }
                    :
                    { uri: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Premier_league_trophy_icon_%28adjusted%29.png' }
    )
  }

  // LIVE TEAMS COMPONENTS
  const teamIcons = (item, index) => {
    return (
      <TouchableOpacity
        style={styles.teamIconsContainer(activeCategory == item ? true : false)}>
        <Image source={getImg(index)


          // { uri: item }
        }
          style={[styles.crousalBaner,{tintColor:SCColors.tabActive}]}
          
        />
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
            data={teamIconsSt}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.liveTeamsContainer}
            renderItem={({ item, index }) => teamIcons(item, index)}
            keyExtractor={item => item.id}
          />
          {/* LIVE TEAMS */}
          {/* TRENDING NEWS */}
          <FlatList
            data={todaysMatch}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ padding: RFPercentage(2) }}
            renderItem={(props) => {
              return (
                <>
                  <TrendingNewsCard
                    matchStatus
                    // navigateTo={() => navigation.navigate('MatchNews', { isLive: props?.item?.isLive == true ? true : false })}
                    newDatalength={todaysMatch?.length}
                    item={props} />
                </>)
            }}
            keyExtractor={item => item.id}
          />
          {/* TRENDING NEWS */}

        </ScrollView>
      </View>
    </View >

  );
};

export default Live;
