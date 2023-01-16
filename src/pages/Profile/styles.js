import SCColors from '../../styles/SCColors';
import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: RFPercentage(10),
    paddingHorizontal: RFPercentage(1),
    backgroundColor: SCColors.primary
  },
  buttonContainer: (position) => ({
    height: RFPercentage(8),
    marginVertical: RFPercentage(.1),
    // marginHorizontal: RFPercentage(1),
    backgroundColor: SCColors.ScoreCart,
    borderTopRightRadius: position == 'top' ? RFPercentage(2) : 0,
    borderTopLeftRadius: position == 'top' ? RFPercentage(2) : 0,
    borderBottomLeftRadius: position == 'bottom' ? RFPercentage(2) : 0,
    borderBottomRightRadius: position == 'bottom' ? RFPercentage(2) : 0,

    flexDirection: 'row',
    alignItems: "center",

  }),
  buttonSubContainer: { flex: 1.5, justifyContent: "center", alignItems: "center" },
  buttonTitle: { color: SCColors.tabActive, fontSize: RFPercentage(2.5), }

});