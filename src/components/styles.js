import SCColors from '../styles/SCColors';
import { RFPercentage } from 'react-native-responsive-fontsize';
import {
  Dimensions,
  StyleSheet
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const flexW1 = windowWidth / 10
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    paddingTop: Platform.OS === 'ios' ?RFPercentage(4):0,
    marginBottom: Platform.OS === 'ios' ?RFPercentage(2):0,
    height: RFPercentage(7),
    backgroundColor: SCColors.primary,
    width: "100%",
    paddingHorizontal: RFPercentage(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerHeading: {
    flexDirection: 'row',
    alignItems: "center"
  },
  headerHeadingText1: {
    fontWeight: '700',
    fontSize: RFPercentage(3),
    color: 'white',
    fontStyle: 'italic'
  },
  TitleBarTile: {
    fontWeight: '700',
    fontSize: RFPercentage(2.6),
    color: 'white',
  },
  headerHeadingText2: {
    fontWeight: '700',
    color: SCColors.white,
    fontSize: RFPercentage(3),
    fontStyle: 'italic'
  },
  iconsMargin: {
    marginRight: RFPercentage(2.5),
    fontWeight: "bold"
  },
  TitleBarContainer: {
    height: RFPercentage(5),
    backgroundColor: SCColors.primary,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: RFPercentage(2),
  },
  TitleBarBtn: {
    fontWeight: '700',
    color: SCColors.tabInactive,
    fontSize: RFPercentage(1.9),
  },
  liveScroreContainer: {
    height: RFPercentage(25),
    width: '48%',
    borderRadius: RFPercentage(2), overflow: 'hidden',
    backgroundColor: SCColors.tabInactive
  },
  ScoreHeaderContainer: {
    flex: 2,
    backgroundColor: SCColors.ScoreCart,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: RFPercentage(2)
  },
  ScoreTeamLogoContainer: {
    flex: 2.5,
    backgroundColor: SCColors.ScoreCart,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: RFPercentage(1),
  },
  ScoreTeamNameContainer: {
    flex: 1.5,
    backgroundColor: SCColors.ScoreCart,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: RFPercentage(1),
  },
  ScoreContainer: {
    flex: 4,
    backgroundColor: SCColors.ScoreCart,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: RFPercentage(1),
  },
  liveIconContainer: (size, direction) => ({
    height: size == 'medium' ? RFPercentage(2.6) : RFPercentage(2),
    width: size == 'medium' ? RFPercentage(5.7) : RFPercentage(4.5),
    justifyContent: 'center',
    alignSelf: direction == 'right' ? 'flex-end' : null,
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: SCColors.red
  }),
  liveText: (size) => ({
    color: SCColors.white,
    fontSize: size == 'medium' ? RFPercentage(1.7) : RFPercentage(1.2)
  }),
  VSText: {
    color: SCColors.white,
    fontSize: RFPercentage(1.8)
  },
  GoalText: {
    color: SCColors.white,
    fontSize: RFPercentage(4),
    fontWeight: '700'
  },
  TeamText: {
    color: SCColors.white,
    fontSize: RFPercentage(1.6)
  },
  MinsText: {
    color: SCColors.white,
    fontSize: RFPercentage(1.5)
  },
  subCrousalBaner: footer => ({
    height: footer ? RFPercentage(21) : RFPercentage(23),
    borderRadius: RFPercentage(2),
    borderBottomRightRadius: footer ? 0 : RFPercentage(2),
    borderBottomLeftRadius: footer ? 0 : RFPercentage(2)
  }),
  carouselContainer: footer => ({
    borderRadius: RFPercentage(2),
    borderBottomRightRadius: footer ? 0 : RFPercentage(2),
    borderBottomLeftRadius: footer ? 0 : RFPercentage(2),
    height: footer ? RFPercentage(29) : RFPercentage(22),
    width: footer ? flexW1 * 7.5 : flexW1 * 6.5,
    marginRight: flexW1 * 0.3,
    marginVertical: RFPercentage(1)
  }),
  carouselFooterContainer: {
    height: RFPercentage(7),
    backgroundColor: SCColors.ScoreCart,
    borderBottomRightRadius: RFPercentage(2),
    borderBottomLeftRadius: RFPercentage(2),
    width: "100%",
    justifyContent: "center",
    alignItems: 'center'
  },
  carouselFooterText: {
    color: SCColors.white,
    width: '90%',
    fontSize: RFPercentage(1.8)
  },
  newsCartContainer: (topCurve, bottomCurve,) => ({
    height: RFPercentage(12),
    width: '100%',
    margin: 1,
    backgroundColor: SCColors.ScoreCart,
    borderBottomLeftRadius: bottomCurve ? RFPercentage(2) : 0,
    borderBottomRightRadius: bottomCurve ? RFPercentage(2) : 0,
    borderTopRightRadius: topCurve ? RFPercentage(2) : 0,
    borderTopLeftRadius: topCurve ? RFPercentage(2) : 0,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
  }),
  trendNewsProfileContainer: {
    height: "100%",
    width: '23%',
    justifyContent: 'center',
    alignItems: "center",

  },
  trendNewsBody: {
    height: "100%",
    width: '77%',
    justifyContent: 'space-evenly',
    alignItems: "center",
    paddingHorizontal: RFPercentage(2)
  },
  trendNewsProfile: {
    height: '85%',
    width: '85%',
    borderRadius: RFPercentage(2)
  },
  trendNewsFooterText: {
    marginLeft: RFPercentage(2),
    color: SCColors.tabInactive
  },
  trendNewsFooterText2: {
    marginLeft: RFPercentage(1),
    color: SCColors.tabInactive
  },
  TrendingNewsCardFooterContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: "center"
  },
  matchStatusSubContainer: {
    flex: 1,
    height: '100%',
    paddingHorizontal: RFPercentage(2),
    justifyContent: 'center'
  },
  liveMatchTimeContainer: {
    height: RFPercentage(4.2),
    width: '75%',
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingHorizontal: RFPercentage(1),
    alignSelf: 'flex-end',
    alignItems: 'center',
    borderRadius: RFPercentage(2.2),
    backgroundColor: SCColors.lightGray
  },
  bellIconContainer: {
    height: RFPercentage(3.2),
    width: RFPercentage(3.2),
    backgroundColor: SCColors.ScoreCart,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFPercentage(1.6)
  },
  caregoryBtnText: {
    color: SCColors.white,
    fontWeight: '600'
  },
  team1Container: {
    flex: 1,
    alignItems: "center",
    flexDirection: 'row'
  },
  team1ProfileContainer: {
    width: RFPercentage(6),
  },
  teamLogo: {
    height: RFPercentage(3),
    width: RFPercentage(3)
  },
  matchTitleContainer:(position)=>({ position: "absolute",  bottom:position, alignSelf: "center", flexDirection: "row" }),
matchText:(color,size)=>({
  // backgroundColor:'rgba(0,0,0,0.5)',
  // paddingHorizontal:RFPercentage(1),
   color:color,
   fontSize: size?size:RFPercentage(1.5),
   fontWeight:"600"
})
});