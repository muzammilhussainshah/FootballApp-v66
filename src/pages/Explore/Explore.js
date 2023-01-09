// @app
import React, { useState } from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize';

// @components
import Header from '../../components/Header';
import SCColors from '../../styles/SCColors';
import { styles } from './styles';
import {
  EXPLORECATEGORY
} from './DummyData';
import {
  All,
  NewsUpdate,
  Preview,
  Standing
} from './Components/Component';

const Explore = ({ navigation }) => {
  const [activeCategory, setActiveCategory] = useState('All')

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
              <All navigation={navigation} />
              :
              (activeCategory == 'Preview' || activeCategory == 'Highlight') ?
                <Preview navigation={navigation} />
                :
                (activeCategory == 'News Update') ?
                  <NewsUpdate navigation={navigation} />

                  :
                  (activeCategory == 'Standings') ?
                    <Standing />

                    : <></>}
            {/* SELECTED COMPONENT */}
          </ScrollView>
        </View >
      </View>
    </>
  );
};
export default Explore;
