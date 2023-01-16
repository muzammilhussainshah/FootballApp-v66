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
  Preview, Standing,
} from './Components/Component';
import {
  League,
  News,
  Standings
} from '../../store/action/action';
import { RFPercentage } from 'react-native-responsive-fontsize';
import SCColors from '../../styles/SCColors';

const Explore = ({ navigation }) => {
  const [activeCategory, setActiveCategory] = useState('STANDINGS')
  const [activeLeagueButton, setActiveLeagueButton] = useState('39')

  const dispatch = useDispatch()

  const leagues = useSelector((state) => state.root.leagues);
  const loader = useSelector((state) => state.root.loader);
  const standings = useSelector((state) => state.root.standings);

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
        onPress={() => setActiveLeagueButton(item.id)}
        style={styles.caregoryBtnContainer(activeLeagueButton == item.id ? true : false)}>
        <Text style={styles.caregoryBtnText(activeLeagueButton == item.id ? true : false)}>{item?.name}</Text>
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
            data={[ 'STANDINGS']}
            // data={['LEAGUES', 'STANDINGS']}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ backgroundColor: SCColors.primary, paddingHorizontal: RFPercentage(2) }}
            renderItem={({ item }) => categoryButton(item)}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        {/* CATEGORY BUTTONS */}

        {/* SELECTED COMPONENT */}
        <View style={[styles.container,]}>

          {activeCategory == 'LEAGUES' ?
            <ScrollView >
              {/* <Preview navigation={navigation} leagues={leagues} /> */}
            </ScrollView>
            :
            <>
              <FlatList
                data={[{ name: 'Classement Premier League', id: 39 }, { name: 'Classement Ligue 1 Uber Eats', id: 186 }, { name: 'Classement La Liga', id: 140 }, { name: "Championnat d'Espagne", id: 415 }, { name: 'Eurosport, and Tables - Ligue 1 Uber Eats - LFP', id: 960 }]}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ backgroundColor: SCColors.primary, paddingHorizontal: RFPercentage(2) }}
                renderItem={({ item }) => leagueButton(item)}
                keyExtractor={(item, index) => index.toString()}
              />
              <ScrollView style={{ marginVertical: RFPercentage(1) }}>
                <Standing standings={standings.filter((key) => key.id == activeLeagueButton)[0]} />
              </ScrollView>
            </>
          }
        </View >
        {/* SELECTED COMPONENT */}
      </View>
    </>
  );
};
export default Explore;
