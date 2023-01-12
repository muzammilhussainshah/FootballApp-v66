// @app
import React, { useEffect, useRef } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  View
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons'
import Carousel from 'react-native-snap-carousel';
import { RFPercentage } from 'react-native-responsive-fontsize';

// @components
import TitleBar from '../../components/TitleBar';
import Header from '../../components/Header';
import ScoreCard from '../../components/ScoreCard';
import CustomCarousel from '../../components/CustomCarousel';
import { styles } from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { LiveAll, NowTV, ThisWeek } from '../../store/action/action';
import SCColors from '../../styles/SCColors';
import moment from 'moment';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Loader from '../../components/Loader';

const windowWidth = Dimensions.get('window').width;
const flexW1 = windowWidth / 10

export const DUMMYBANNERS = [
  "https://i.picsum.photos/id/524/700/500.jpg?hmac=PuAKCqRNlpa6_UJLeKABjXH9l3MFgsv-LHMm0bDfey4",
  "https://i.picsum.photos/id/193/700/500.jpg?hmac=q5QJ9ieureq_dXwwsUmh7ub2pN-V1arRrqpMV7czc9g",
  "https://i.picsum.photos/id/971/700/500.jpg?hmac=kNTldtPvd24NEOfvd39iwsRBun4As0dYChiWQuyCFo4",
  "https://i.picsum.photos/id/524/700/500.jpg?hmac=PuAKCqRNlpa6_UJLeKABjXH9l3MFgsv-LHMm0bDfey4",
];

const Home = ({ navigation }) => {

  const carouselRef = useRef(null);
  const dispatch = useDispatch()
  const nowTv = useSelector((state) => state.root.nowTv);
  const thisWeek = useSelector((state) => state.root.thisWeek);
  const liveScore = useSelector((state) => state.root.liveScore);
  const loader = useSelector((state) => state.root.loader);

  useEffect(() => {
    dispatch(NowTV())
    dispatch(ThisWeek())
    dispatch(LiveAll())
  }, [])

  return (
    <>
      <View style={[styles.container,]}>
        {/* LOADER */}
        {loader &&
          <Loader />
        }
        {/* LOADER */}

        <Header />
        <View style={[styles.container,]}>
          <ScrollView >
            {/* BANNERS */}
            <View style={styles.crousalContainer}>
              <Carousel
                ref={carouselRef}
                layout={'default'}
                scrollEnabled={false}
                loop={true}
                useNativeDriver
                autoplay={true}
                autoplayInterval={5000}
                data={nowTv}
                renderItem={({ item, index }) => {
                  return (
                    <View style={[styles.crousalBaner, styles.crousalBaner2]}>
                      <View style={[{ width: '100%', backgroundColor: 'green', justifyContent: "center", alignItems: "center" },
                      { transform: [{ skewX: "-15deg" }] }
                      ]}>
                        {
                          index % 2 == 1 ?
                            <Image resizeMode='stretch' source={require('../../assets/bannerImg.jpeg')} style={{ height: "100%", width: "100%", marginLeft: '80%' }} />
                            :
                            index % 2 == 0 ?
                              <Image resizeMode='stretch' source={require('../../assets/bannerImg2.jpeg')} style={{ height: "100%", width: "100%", marginLeft: '80%' }} />
                              :
                              <Image resizeMode='stretch' source={require('../../assets/bannerImg3.jpeg')} style={{ height: "100%", width: "100%", marginLeft: '80%' }} />
                        }
                      </View>

                      <View style={[{ width: '100%', backgroundColor: 'red' },
                      { transform: [{ skewX: "-15deg" }] }

                      ]}>
                        {
                          index % 2 == 1 ?
                            <Image resizeMode='stretch' source={require('../../assets/bannerImg3.jpeg')} style={{ height: "100%", width: "70%", }} /> :
                            index % 2 == 0 ?
                              <Image resizeMode='stretch' source={require('../../assets/bannerImg3.jpeg')} style={{ height: "100%", width: "70%", }} />
                              :
                              <Image resizeMode='stretch' source={require('../../assets/bannerImg.jpeg')} style={{ height: "100%", width: "70%", }} />
                        }
                      </View>
                      <Text style={[styles.homeName('40%', 'flex-end', SCColors.gradientRight, '5%'), {
                        transform: [{ skewX: "-15deg" }],
                        zIndex: 2,
                        width: '45%'

                      }]}>
                        {item?.teams?.home?.name}
                      </Text>
                      <Text style={[styles.homeName('60%', 'flex-start', SCColors.green, '50%'), {
                        transform: [{ skewX: "-15deg" }],
                        zIndex: 2,

                      }]}>
                        {item?.teams?.away?.name}
                      </Text>
                      <Text style={[
                        styles.homeName('85%', 'center', SCColors.white),
                        { transform: [{ skewX: "-15deg" }] }

                      ]}>
                        {moment(item?.fixture?.date).format('ddd, D MMM ') + new Date(item?.fixture?.date).toLocaleString("en-US", { hour: '2-digit', minute: '2-digit' })}
                      </Text>
                    </View>
                  )
                }}
                sliderWidth={windowWidth}
                itemWidth={flexW1 * 8}
              />
            </View>
            {/* BANNERS */}

            {/* MATCH THIS WEEK */}
            <TitleBar title={`Match this Week`} seeAllEnable={true} />

            <View style={{ height: RFPercentage(26) }}>
              <MatchPreviewCarousel data={thisWeek} thisWeek />
            </View>
            {/* MATCH THIS WEEK */}

            {/* LIVE SCORES */}
            {/* {liveScore.length > 0 ? */}
            <>
              <TitleBar title={`Live Scores`} seeAllEnable={true} />

              <View style={styles.liveScroreMainContainer}>
                {liveScore.length > 0 ?
                  <FlatList
                    data={liveScore}
                    horizontal
                    renderItem={({ item }) => {
                      console.log(item, '.fixture.fixture.fixture.fixture ')

                      // console.log(new Date(item.fixture.periods.first).getHours(), "4:59")


                      // var x = item.fixture.periods.first
                      // // var x2 = item.fixture.periods.second
                      // var tempTime = moment.duration(x);
                      // // var tempTime2 = moment.duration(x2);
                      // var y = tempTime.hours() + tempTime.minutes();
                      // console.log(
                      //   // tempTime2.minutes()
                      //   tempTime.hours() , tempTime.minutes()
                      //   ,
                      //   'tempTimetempTimetempTime', y) 
                      return (
                        <>
                          <ScoreCard
                            isLive={true}

                            team1Logo={
                              <Image
                                source={{ uri: item.teams.home.logo }}
                                style={{ height: RFPercentage(4), width: RFPercentage(4) }}
                              />
                            }
                            leagueIcon={
                              <Image
                                source={{ uri: item.league.logo }}
                                style={{ height: RFPercentage(2.5), width: RFPercentage(2.5) }}
                              />
                            }
                            team2Logo={
                              <Image
                                source={{ uri: item.teams.away.logo }}
                                style={{ height: RFPercentage(4), width: RFPercentage(4) }}
                              />
                            }
                            team1Name={item.teams.home.name}
                            team2Name={item.teams.away.name}
                            matchDuration={item.fixture.status.elapsed + ` mins`}
                            team1Score={item.goals.home}
                            team2Score={item.goals.away} />

                        </>
                      )
                    }}
                    keyExtractor={item => item.id}
                  />
                  :
                  <>
                    <ScoreCard
                      isLive={true}
                      leagueIcon={
                        <Ionicons name='logo-firefox' color="white" size={RFPercentage(2.5)} />
                      }
                      team1Logo={
                        <Ionicons
                          name='logo-firefox'
                          color="white"
                          size={RFPercentage(4)}
                        />
                      }
                      team2Logo={
                        <Ionicons
                          name='logo-firefox'
                          color="white"
                          size={RFPercentage(4)}
                        />
                      }
                      team1Name={`Leeds United`}
                      team2Name={`Liverpool`}
                      matchDuration={`83 mins`}
                      team1Score={`0`}
                      team2Score={2} />
                    <ScoreCard
                      isLive={true}
                      leagueIcon={
                        <Ionicons name='logo-firefox' color="white" size={RFPercentage(2.5)} />

                      }
                      team1Logo={
                        <Ionicons
                          name='logo-firefox'
                          color="white"
                          size={RFPercentage(4)}
                        />}
                      team2Logo={
                        <Ionicons
                          name='logo-firefox'
                          color="white"
                          size={RFPercentage(4)}
                        />}
                      team1Name={`Leeds United`}
                      team2Name={`Liverpool`}
                      matchDuration={`83 mins`}
                      team1Score={`0`}
                      team2Score={2} />
                  </>
                }
                {/* {liveScore.map((item) => {
                console.log(item.teams,
                  'itemitemitem123321')
                return (
                  <ScoreCard
                    isLive={true}
                    team1Logo={
                      <Ionicons
                        name='logo-firefox'
                        color="white"
                        size={RFPercentage(4)}
                      />
                    }
                    team2Logo={
                      <Ionicons
                        name='logo-firefox'
                        color="white"
                        size={RFPercentage(4)}
                      />
                    }
                    team1Name={item.teams.home.name}
                    team2Name={item.teams.away.name}
                    matchDuration={`83 mins`}
                    team1Score={`0`}
                    team2Score={2} />
                )
              })} */}
                {/* <ScoreCard
                isLive={true}
                team1Logo={
                  <Ionicons
                    name='logo-firefox'
                    color="white"
                    size={RFPercentage(4)}
                  />
                }
                team2Logo={
                  <Ionicons
                    name='logo-firefox'
                    color="white"
                    size={RFPercentage(4)}
                  />
                }
                team1Name={`Leeds United`}
                team2Name={`Liverpool`}
                matchDuration={`83 mins`}
                team1Score={`0`}
                team2Score={2} />
              <ScoreCard
                isLive={true}
                team1Logo={
                  <Ionicons
                    name='logo-firefox'
                    color="white"
                    size={RFPercentage(4)}
                  />}
                team2Logo={
                  <Ionicons
                    name='logo-firefox'
                    color="white"
                    size={RFPercentage(4)}
                  />}
                team1Name={`Leeds United`}
                team2Name={`Liverpool`}
                matchDuration={`83 mins`}
                team1Score={`0`}
                team2Score={2} /> */}
              </View>
            </>

            {/* LIVE SCORES */}

            {/* MATCH HIGHLIGHT */}
            <TitleBar title={`Match Highlight`} seeAllEnable={true} />

            <View style={{ height: RFPercentage(26) }}>
              <MatchPreviewCarousel data={DUMMYBANNERS} navigateTo={() => navigation?.navigate('VideoScreen')} />
            </View>
            {/* MATCH HIGHLIGHT */}

            {/* MATCH PREVIEW */}
            <TitleBar title={`Match Preview`} seeAllEnable={true} />
            <View style={{ height: RFPercentage(28) }}>
              <MatchPreviewCarousel data={DUMMYBANNERS} />
            </View>
            {/* MATCH PREVIEW */}

          </ScrollView>
        </View >
      </View>
    </>
  );
};

const MatchPreviewCarousel = ({ data, navigateTo, thisWeek }) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: RFPercentage(2), }}
      data={data}
      renderItem={({ item, index }) => {
        return (
          <CustomCarousel item={item} thisWeek={thisWeek} index={index} navigateTo={() => navigateTo && navigateTo()} />
        )
      }}
      keyExtractor={item => item.id}
    />
  )
}
export default Home;
