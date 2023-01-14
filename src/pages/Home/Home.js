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
  const [seeAll, setseeAll] = React.useState(6);
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
          



            {/* LIVE SCORES */}
            <>
              <TitleBar title={`Live Scores`} seeAllEnable={seeAll>6?false:true} seeAllFunc={()=>{setseeAll(liveScore.length)}} />

              <View style={styles.liveScroreMainContainer}>
                {liveScore.length > 0 ?
                  <FlatList
                    data={liveScore}
                    // horizontal
                      numColumns={2}

                    renderItem={({ item,index }) => {
                      if(index<seeAll)
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
