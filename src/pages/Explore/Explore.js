// @app
import React, {
  useEffect,
  useState
} from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import {
  useDispatch,
  useSelector
} from 'react-redux';

// @components
import Header from '../../components/Header';
import Loader from '../../components/Loader';

import { styles } from './styles';
import {
  Preview,
} from './Components/Component';
import {
  League,
  News,
  Standings
} from '../../store/action/action';
import { RFPercentage } from 'react-native-responsive-fontsize';
import SCColors from '../../styles/SCColors';

const Explore = ({ navigation }) => {
  const [activeCategory, setActiveCategory] = useState('LEAGUES')
  const [activeLeagueButton, setActiveLeagueButton] = useState('Classement Premier League')

  const dispatch = useDispatch()

  const leagues = useSelector((state) => state.root.leagues);
  const loader = useSelector((state) => state.root.loader);
  const standings = useSelector((state) => state.root.standings);
  console.log(standings, 'standingsstandings')

  useEffect(() => {
    dispatch(League())
    //Premier League
    dispatch(Standings('2022', '39'))
    //Ligue 1
    dispatch(Standings('2022', '186'))
    //La Liga
    dispatch(Standings('2022', '140'))
    //Championnat
    dispatch(Standings('2022', '415'))
    //Euro
    dispatch(Standings('2023', '960'))

  }, [])

  const categoryButton = (item) => {
    return (
      <TouchableOpacity
        onPress={() => setActiveCategory(item)}
        style={styles.caregoryBtnContainer(activeCategory == item ? true : false)}>
        <Text style={styles.caregoryBtnText(activeCategory == item ? true : false)}>{item}</Text>
      </TouchableOpacity>
    )
  }
  const leagueButton = (item) => {
    return (
      <TouchableOpacity
        onPress={() => setActiveLeagueButton(item)}
        style={styles.caregoryBtnContainer(activeLeagueButton == item ? true : false)}>
        <Text style={styles.caregoryBtnText(activeLeagueButton == item ? true : false)}>{item}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <>
      <View style={[styles.container,]}>
        {/* LOADER */}
        {loader &&
          <Loader />
        }
        {/* LOADER */}

        {/* HEADER */}
        <Header />
        {/* HEADER */}

        {/* CATEGORY BUTTONS */}
        <View style={{ height: RFPercentage(6.5) }}>
          <FlatList
            data={['LEAGUES', 'STANDINGS']}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ backgroundColor: SCColors.primary, paddingHorizontal: RFPercentage(2) }}
            renderItem={({ item }) => categoryButton(item)}
            keyExtractor={item => item.id}
          />
        </View>
        {/* CATEGORY BUTTONS */}

        {/* SELECTED COMPONENT */}
        <View style={[styles.container,]}>

          {activeCategory == 'LEAGUES' ?
            <ScrollView >
              <Preview navigation={navigation} leagues={leagues} />
            </ScrollView>
            :
            <FlatList
              data={['Classement Premier League', 'Classement Ligue 1 Uber Eats', 'Classement La Liga', "Championnat d'Espagne", 'Eurosport', 'Tables - Ligue 1 Uber Eats - LFP']}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ backgroundColor: SCColors.primary, paddingHorizontal: RFPercentage(2) }}
              renderItem={({ item }) => leagueButton(item)}
              keyExtractor={item => item.id}
            />

          }
        </View >
        {/* SELECTED COMPONENT */}
      </View>
    </>
  );
};
export default Explore;
