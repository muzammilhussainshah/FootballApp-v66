// @app
import React, { useEffect, useState } from 'react';
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
import { styles } from './styles';
import Loader from '../../components/Loader';
import {
  NewsUpdate,
} from '../Explore/Components/Component';
import {
  News,
} from '../../store/action/action';

const Live = ({ navigation }) => {
  const dispatch = useDispatch()
  const loader = useSelector((state) => state.root.loader);
  const news = useSelector((state) => state.root.news);
  
  useEffect(() => {
    dispatch(News())
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
        {/* <ScrollView > */}
              <NewsUpdate navigation={navigation} news={news} />
        {/* </ScrollView> */}
      </View >
      {/* SELECTED COMPONENT */}
    </View>
  </>
  );
};

export default Live;
