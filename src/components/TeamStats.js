// @app
import React from 'react';
import {
  Text,
  Image,
  View
} from 'react-native';

// @components
import { styles } from './styles'

const TeamStats = (item, whichTeam, index) => {

  const getImgTeam1 = (index) => {
    return (
      index == 0 ? 'https://i.ytimg.com/vi/lrA_9Lx-0nU/maxresdefault.jpg' :
        index == 1 ? `https://i.ytimg.com/vi/SyYX87Xbcws/maxresdefault.jpg`
          :
          index == 2 ? `https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/285918493/original/0e2ecc85c80687f00698b23d92c1f17c706bd405.png`
            :
            index == 3 ? `https://a57.foxsports.com/static-media.fox.com/ms/stg1/sports/1280/720/play-6129ab61000004b--spain_vs_morocco_site_thumb_1670349093281.png?ve=1&tl=1`
              :
              index == 4 ? 'https://a57.foxsports.com/static-media.fox.com/ms/stg1/sports/1280/720/play-6109c8282001519--cameroon_brazil_site_1670014727644.png?ve=1&tl=1'
                :
                index == 5 ? 'https://images.beinsports.com/1MZmFPdaz4srIVaP0lhIyfoOpes=/670x424/smart/4561215-2022-12-28T215942Z_12591199_UP1EICS1P3G76_RTRMADP_3_SOCCER-FRANCE-PSG-STR-REPORT.JPG' :
                  index % 2 == 0 ?
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYlQz7OiOA0pFG60uSSqqMhNtff5EVpkkoCfjYuhOT9F2icGweaB-RTf7a2dAUGp6mKcU&usqp=CAU'
                    :
                    'https://i.ytimg.com/vi/GoSZGThGrSU/maxresdefault.jpg'
    )
  }
  const getImgTeam2 = (index) => {
    return (
      index == 0 ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYlQz7OiOA0pFG60uSSqqMhNtff5EVpkkoCfjYuhOT9F2icGweaB-RTf7a2dAUGp6mKcU&usqp=CAU' :
        index == 1 ? 'https://images.beinsports.com/1MZmFPdaz4srIVaP0lhIyfoOpes=/670x424/smart/4561215-2022-12-28T215942Z_12591199_UP1EICS1P3G76_RTRMADP_3_SOCCER-FRANCE-PSG-STR-REPORT.JPG'
          :
          index == 2 ? `https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/285918493/original/0e2ecc85c80687f00698b23d92c1f17c706bd405.png`
            :
            index == 3 ? `https://a57.foxsports.com/static-media.fox.com/ms/stg1/sports/1280/720/play-6129ab61000004b--spain_vs_morocco_site_thumb_1670349093281.png?ve=1&tl=1`
              :
              index == 4 ? 'https://a57.foxsports.com/static-media.fox.com/ms/stg1/sports/1280/720/play-6109c8282001519--cameroon_brazil_site_1670014727644.png?ve=1&tl=1'
                :
                index == 5 ? `https://i.ytimg.com/vi/SyYX87Xbcws/maxresdefault.jpg` :
                  index % 2 == 0 ?
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYlQz7OiOA0pFG60uSSqqMhNtff5EVpkkoCfjYuhOT9F2icGweaB-RTf7a2dAUGp6mKcU&usqp=CAU'
                    :
                    'https://i.ytimg.com/vi/lrA_9Lx-0nU/maxresdefault.jpg'
    )
  }
  return (
    <View style={styles.team1Container}>
      <View style={styles.team1ProfileContainer}>
        <Image
          source={{ uri: whichTeam == 1 ? getImgTeam1(index) : getImgTeam2(index) }}
          style={styles.teamLogo} />
      </View>
      <Text style={styles.caregoryBtnText}>{whichTeam == 1 ? item?.teams?.home?.name : item?.teams?.away?.name}</Text>
    </View>
  )
};

export default TeamStats;
