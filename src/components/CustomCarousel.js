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

const CustomCarousel = ({ item, index, thisWeek, footer, footerText, news, navigateTo, league, preview }) => {
  // const { item, footer, footerText, navigateTo } = props
  console.log(item, index, thisWeek, footer, footerText, news, navigateTo, league, preview, 'laskdjsdjakladjsk')
  return (
    <>
      <TouchableOpacity
        onPress={() => navigateTo && navigateTo()}
        activeOpacity={.8}
        style={[styles.carouselContainer(footer ? true : false), { overflow: "hidden", }]}>
        {/* {preview ? */}
        <Image
          resizeMode='stretch'
          source={


            news ?
              { uri: item?.urlToImage }
              :
              preview ?
                { uri: league?.logo }
                // index == 1 ?
                //   require(`../assets/highlight1.jpeg`)
                //   :
                //   index == 2 ?
                //     require(`../assets/highlight2.jpeg`)
                //     :
                //     index == 3 ?
                //       require(`../assets/highlight3.jpeg`)
                //       :
                //       index == 4 ?
                //         require(`../assets/highlight4.jpeg`)
                //         :
                //         index == 5 ?
                //           require(`../assets/highlight5.jpeg`)
                //           :
                //           index == 6 ?
                //             require(`../assets/highlight6.jpeg`)

                //             :
                //             require(`../assets/download.jpeg`)
                :

                // thisWeek ?
                //  { uri: item&&item } 
                // require('')
                null
            // require('../assets/download.jpeg')
            //  :
            // index % 2 == 1 ?
            // require('../assets/thisWeekThumbnail2.jpeg')
            // :
            // index % 2 == 0 ?
            // require('../assets/thisWeekThumbnail.jpeg')
            // :

            // require('../assets/thisWeekThumbnail2.jpeg') :

          }
          style={
            // styles.subCrousalBaner(footer ? true : false)

            {
              height:
                news ?
                  '70%'
                  : '100%', width: '100%',
              backgroundColor: SCColors.ScoreCart
            }}
        // resizeMode='contain' 
        />
        {/* : <></>} */}
        {thisWeek &&
          <>
            <View style={styles.matchTitleContainer('15%')}>
              <Text style={styles.matchText(SCColors.white)}>{item?.teams?.home?.name}</Text>
              <Text style={styles.matchText(SCColors.tabInactive)}>{`  VS  `}</Text>
              <Text style={styles.matchText(SCColors.white)}>{item?.teams?.away?.name}</Text>
            </View>
            <View style={styles.matchTitleContainer('5%')}>
              <Text style={styles.matchText(SCColors.white, RFPercentage(1.2))}>{moment(item.fixture.date).format('ddd, D MMM -HH:MM A ')}
              </Text>
            </View>
          </>
        }
        {footer &&
          <View style={styles.carouselFooterContainer}>
            <Text style={styles.carouselFooterText}>{news ? item?.title : footerText}</Text>
          </View>}

      </TouchableOpacity>
    </>
  )
};

export default CustomCarousel;
