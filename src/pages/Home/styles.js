import { Platform, StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import SCColors from '../../styles/SCColors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SCColors.primary
  },
  crousalContainer: {
    height: RFPercentage(28),
    marginVertical: RFPercentage(2.5),
    alignItems: 'center',
    justifyContent: "center"
  },
  subCrousalContainer: {
    margin: 1,
    height: RFPercentage(23),
    marginVertical: RFPercentage(2.5),
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  crousalBaner2: {
    flexDirection: 'row',
    overflow: 'hidden',
    justifyContent: "center"
  },
  crousalBaner: {
    height: Platform.OS === 'ios' ? RFPercentage(25) : RFPercentage(28),
    borderRadius: RFPercentage(3),
  },
  liveScroreMainContainer: {
    margin: RFPercentage(2),
    height: RFPercentage(25),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  homeName: (top, position, color, left) => ({
    position: "absolute", paddingVertical: RFPercentage(0.5)
    , fontSize: Platform.OS === 'ios' ? RFPercentage(1.5) : RFPercentage(2.5), fontWeight: '700'
    , paddingHorizontal: RFPercentage(1),
    top: top,
    left: left,
    alignSelf: position,
    backgroundColor: color,
  }),
  matchDate: {
    paddingVertical: RFPercentage(0),
    fontSize: RFPercentage(2),
    fontStyle: 'italic',
  },
  noDataMsg: {
    fontSize: Platform.OS === 'ios' ? RFPercentage(2) : RFPercentage(2.3),
    color: SCColors.tabActive,
    fontWeight: '600',
    width: "100%",
    textAlign: "center",
  },
  matchThisWeekContainer: {
    height: RFPercentage(26),
    justifyContent: 'center'
  },
  leftBannerContainer: {
    width: '100%',
    justifyContent: "center",
    alignItems: "center"
  }

});