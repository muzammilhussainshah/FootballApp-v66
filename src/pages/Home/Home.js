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

  const noDataMsg = (title) => <Text style={styles.noDataMsg}> {title}</Text>
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
              {nowTv.length > 0 ?
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
                        <View style={[styles.leftBannerContainer,
                        { transform: [{ skewX: "-15deg" }] }
                        ]}>
                          {
                            index % 2 == 1 ?
                              <Image
                                resizeMode='cover'
                                source={{ uri: 'https://imageio.forbes.com/specials-images/imageserve/5f5be112e7f395dc08ef8e58/Lionel-Messi-celebrating-scoring-a-goal-in-the-2019-20-UEFA-Champions-League/1960x0.jpg?format=jpg&width=960' }}
                                style={{ height: "100%", width: "100%", marginLeft: '60%' }} />
                              :
                              index % 2 == 0 ?
                                <Image
                                  resizeMode='cover'
                                  source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjso8tbwnHE_BbtjJ1BRHDzy7KXsviTlUr5yCa5lKfQU38PpYzCuGM0BQrxBwKVtQ3eV8&usqp=CAU' }}
                                  style={{ height: "100%", width: "100%", marginLeft: '60%' }} />
                                :
                                <Image
                                  resizeMode='cover'
                                  source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoFT5Iv9fXv-Yvl9IHUFIWv4lIblQHtgz9Cw&usqp=CAU' }}
                                  style={{ height: "100%", width: "100%", marginLeft: '60%' }} />
                          }
                        </View>

                        <View style={[{ width: '100%', },
                        { transform: [{ skewX: "-15deg" }] }

                        ]}>
                          {
                            index % 2 == 1 ?
                              <Image resizeMode='cover'
                                source={{ uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JivMJTZ2jJJwFn-iWHrGHKsMxxJCVGltHzdMu1VsOXM5oZOH1OQhxo4cJ41dUARDVm8&usqp=CAU` }}
                                style={{ height: "100%", width: "70%", }} /> :
                              index % 2 == 0 ?
                                <Image resizeMode='cover'
                                  source={{ uri: `https://static.toiimg.com/thumb/msid-96137993,width-1070,height-580,imgsize-56006,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg` }}
                                  style={{ height: "100%", width: "70%", }} />
                                :
                                <Image resizeMode='cover'
                                  source={{ uri: "https://cdn.vox-cdn.com/thumbor/AdmJfVko83sIseDKzQxydcb_jm4=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/11541539/974400700.jpg.jpg" }}
                                  style={{ height: "100%", width: "70%", }} />
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
                          { transform: [{ skewX: "-15deg" }] }]}>
                          {moment(item?.fixture?.date).format('ddd, D MMM ') + new Date(item?.fixture?.date).toLocaleString("en-US", { hour: '2-digit', minute: '2-digit' })}
                        </Text>
                      </View>

                    )
                  }}
                  sliderWidth={windowWidth}
                  itemWidth={flexW1 * 8}
                />
                :
                noDataMsg(`No match this today`)
              }
            </View>
            {/* BANNERS */}

            {/* MATCH THIS WEEK */}
            <TitleBar title={`Match this Week`} seeAllEnable={true} />

            <View style={styles.matchThisWeekContainer}>
              {thisWeek.length > 0 ?
                <MatchPreviewCarousel data={thisWeek} thisWeek />
                :
                noDataMsg(`No match this week`)
              }

            </View>
            {/* MATCH THIS WEEK */}

            {/* LIVE SCORES */}
            <>
              <TitleBar title={`Live Scores`} seeAllEnable={true} />

              <View style={styles.liveScroreMainContainer}>
                {liveScore.length > 0 ?
                  <FlatList
                    data={liveScore}
                    horizontal
                    renderItem={({ item }) => {
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
                  noDataMsg(`No match this time`)
                }
              </View>
            </>


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
      renderItem={({ item, index }) => <CustomCarousel item={item} thisWeek={thisWeek} index={index} navigateTo={() => navigateTo && navigateTo()} />}
      keyExtractor={item => item.id}
    />
  )
}
export default Home;
