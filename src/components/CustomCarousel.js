// @app
import moment from 'moment';
import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import SCColors from '../styles/SCColors';

// @components
import { styles } from './styles'

const CustomCarousel = ({ item, index, thisWeek, footer, footerText, navigateTo }) => {
  // const { item, footer, footerText, navigateTo } = props
  return (
    <>
      <TouchableOpacity
        onPress={() => navigateTo && navigateTo()}
        activeOpacity={.8}
        style={[styles.carouselContainer(footer ? true : false), { overflow: "hidden", backgroundColor: 'red' }]}>
        <Image
          source={
            index % 2 == 1 ?
              require('../assets/thisWeekThumbnail2.jpeg')
              :
              index % 2 == 0 ?
                require('../assets/thisWeekThumbnail.jpeg')
                :

                require('../assets/thisWeekThumbnail2.jpeg')
          }
          style={
            // styles.subCrousalBaner(footer ? true : false)

            {
              height: '100%', width: '100%'
            }}
        // resizeMode='contain' 
        />
        {thisWeek &&
          <>
            <View style={styles.matchTitleContainer('15%')}>
              <Text style={styles.matchText(SCColors.white)}>{item?.teams?.home?.name}</Text>
              <Text style={styles.matchText(SCColors.tabInactive)}>{`  VS  `}</Text>
              <Text style={styles.matchText(SCColors.white)}>{item?.teams?.away?.name}</Text>
            </View>
            <View style={styles.matchTitleContainer('5%')}>
              <Text style={styles.matchText(SCColors.white,RFPercentage(1.2))}>{moment(item.fixture.date).format('ddd, D MMM -HH:MM A ')}
              </Text>
            </View>
          </>
        }
        {footer &&
          <View style={styles.carouselFooterContainer}>
            <Text style={styles.carouselFooterText}>{footerText}</Text>
          </View>}

      </TouchableOpacity>
    </>
  )
};

export default CustomCarousel;
