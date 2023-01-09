import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import SCColors from '../../styles/SCColors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SCColors.primary
  },
  caregoryBtnContainer: activeCategory => ({
    height: RFPercentage(5),
    marginVertical: RFPercentage(.5),
    marginRight: RFPercentage(2),
    paddingHorizontal: RFPercentage(2),
    borderRadius: RFPercentage(1),
    backgroundColor: activeCategory ? SCColors.white : SCColors.ScoreCart,
    justifyContent: "center",
    alignItems: 'center',
  }),
  caregoryBtnText: activeCategory => ({ color: activeCategory ? SCColors.black : SCColors.tabInactive }),
  bannerContainer: { height: RFPercentage(29), marginVertical: RFPercentage(1), marginBottom: RFPercentage(2) },


  TeamText: {
    color: SCColors.white,
    lineHeight: RFPercentage(3),
    fontSize: RFPercentage(1.7)
  },
  breakColumn: {
    height: '80%',
    backgroundColor: SCColors.tabActive,
    width: RFPercentage(0.1)
  },
  goalScorerContainer: (position) => ({
    height: RFPercentage(5), backgroundColor: (position == 'top' || position == 'bottom') ? SCColors.lightGray : SCColors.ScoreCart,
    borderTopLeftRadius: position == 'top' ? RFPercentage(2) : 0,
    borderTopRightRadius: position == 'top' ? RFPercentage(2) : 0,
    marginVertical: RFPercentage(0.2),
    borderBottomLeftRadius: position == 'bottom' ? RFPercentage(2) : 0,
    borderBottomRightRadius: position == 'bottom' ? RFPercentage(2) : 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: "center",
    marginHorizontal: RFPercentage(2)
  }),
  keyText: { marginLeft: RFPercentage(4), marginTop: RFPercentage(2) },
  keyColorContainer: (title) => ({
    height: RFPercentage(1.4),
    width: RFPercentage(1.4),
    backgroundColor: title == "UEFA CHAMPION LEAGUE" ? SCColors.lightGreen : title == 'UEFA EUROPA LEAGUE' ? SCColors.green : SCColors.red,
    borderRadius: RFPercentage(0.7),
    marginRight: RFPercentage(2)
  }
  ),
  keyContainer: {
    flexDirection: 'row',
    marginHorizontal: RFPercentage(4),
    alignItems: 'center'
  },
  teamContainer: {
    flex: 2,
    justifyContent: "center",
    flexDirection: 'row'
  },
  titleSign: (color) => ({
    width: RFPercentage(0.7),
    height: '100%',
    backgroundColor: color
  }),
  columnValContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },


});