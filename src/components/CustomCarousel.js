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

const getImg = (index) => {
  return (
    index == 0 ? { uri: 'https://i.ytimg.com/vi/lrA_9Lx-0nU/maxresdefault.jpg' } :
      index == 1 ? { uri: `https://i.ytimg.com/vi/SyYX87Xbcws/maxresdefault.jpg` }
        :
        index == 2 ? { uri: `https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/285918493/original/0e2ecc85c80687f00698b23d92c1f17c706bd405.png` }
          :
          index == 3 ? { uri: `https://a57.foxsports.com/static-media.fox.com/ms/stg1/sports/1280/720/play-6129ab61000004b--spain_vs_morocco_site_thumb_1670349093281.png?ve=1&tl=1` }
            :
            index == 4 ? { uri: 'https://a57.foxsports.com/static-media.fox.com/ms/stg1/sports/1280/720/play-6109c8282001519--cameroon_brazil_site_1670014727644.png?ve=1&tl=1' }
              :
              index == 5 ? { uri: 'https://images.beinsports.com/1MZmFPdaz4srIVaP0lhIyfoOpes=/670x424/smart/4561215-2022-12-28T215942Z_12591199_UP1EICS1P3G76_RTRMADP_3_SOCCER-FRANCE-PSG-STR-REPORT.JPG' } :
                index % 2 == 0 ?
                  { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYlQz7OiOA0pFG60uSSqqMhNtff5EVpkkoCfjYuhOT9F2icGweaB-RTf7a2dAUGp6mKcU&usqp=CAU' }
                  :
                  { uri: 'https://i.ytimg.com/vi/GoSZGThGrSU/maxresdefault.jpg' }
  )
}
const CustomCarousel = ({ item, index, thisWeek, footer, footerText, news, navigateTo, league, preview }) => {
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

            thisWeek ? getImg(index)
              :
              news ?
                { uri: item?.urlToImage }
                :
                preview ?
                  { uri: league?.logo } :

                  null
          }
          style={
            {
              height:
                news ?
                  '70%'
                  : '100%', width: '100%',
              backgroundColor: SCColors.ScoreCart
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
