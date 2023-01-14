// @app
import React, {
  useEffect,
  useState
} from 'react';
import {
  ScrollView,
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

const Explore = ({ navigation }) => {
  const dispatch = useDispatch()

  const leagues = useSelector((state) => state.root.leagues);
  const loader = useSelector((state) => state.root.loader);

  useEffect(() => {
    dispatch(League())
  }, [])

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

        {/* SELECTED COMPONENT */}
        <View style={[styles.container,]}>
          <ScrollView >
          <Preview navigation={navigation} leagues={leagues} />
          </ScrollView>
        </View >
        {/* SELECTED COMPONENT */}
      </View>
    </>
  );
};
export default Explore;
