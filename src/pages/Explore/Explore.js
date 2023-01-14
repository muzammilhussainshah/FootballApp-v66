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

import { RFPercentage } from 'react-native-responsive-fontsize';
import {
  useDispatch,
  useSelector
} from 'react-redux';

// @components
import Header from '../../components/Header';
import SCColors from '../../styles/SCColors';
import Loader from '../../components/Loader';

import { styles } from './styles';
import {
  EXPLORECATEGORY
} from './DummyData';
import {
  NewsUpdate,
  Preview,
  Standing
} from './Components/Component';
import {
  League,
  News,
  Standings
} from '../../store/action/action';

const Explore = ({ navigation }) => {
  const [activeCategory, setActiveCategory] = useState('All')
  const dispatch = useDispatch()

  const leagues = useSelector((state) => state.root.leagues);
  const standings = useSelector((state) => state.root.standings);
  const loader = useSelector((state) => state.root.loader);
  const news = useSelector((state) => state.root.news);

  useEffect(() => {
    dispatch(League())
    dispatch(Standings())
    dispatch(News())
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
            data={EXPLORECATEGORY}
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
          <ScrollView >
            {activeCategory == 'All' ?
              <>
                <NewsUpdate navigation={navigation} news={news} />
                <Preview navigation={navigation} leagues={leagues} />
                <Standing standings={standings} />
              </>
              :
              (activeCategory == 'Preview' || activeCategory == 'Highlight') ?
                <Preview navigation={navigation} leagues={leagues} />
                :
                (activeCategory == 'News Update') ?
                  <NewsUpdate navigation={navigation} news={news} />
                  :
                  (activeCategory == 'Standings') ?
                    <Standing standings={standings} />
                    : <></>}

          </ScrollView>
        </View >
        {/* SELECTED COMPONENT */}
      </View>
    </>
  );
};
export default Explore;
