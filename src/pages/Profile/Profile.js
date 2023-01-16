// @app
import React from 'react';
import { Text, Share, TouchableOpacity, View ,Linking} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
// import Share from 'react-native-share';

import SCColors from '../../styles/SCColors';
import Rate, { AndroidMarket } from 'react-native-rate'

import { styles } from './styles';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
// @components

const Profile = ({ navigation }) => {
  const CustomButtons = ({ position, title, icon, callBack, icon2 }) => {
    return (
      <TouchableOpacity
        activeOpacity={.8}
        onPress={callBack}
        style={styles.buttonContainer(position)}>
        <View style={styles.buttonSubContainer}>
          {icon}
        </View>
        <View style={{ flex: 7 }}>
          <Text style={styles.buttonTitle}>{title}</Text>
        </View>
        <View style={styles.buttonSubContainer}>
          {icon2}
        </View>
      </TouchableOpacity>
    )
  }

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Would you like to share Football App ',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  
    const onPrivacy = async () => {
      const url = 'https://www.privacypolicygenerator.info/live.php?token=9p8Dc49ur2o0jI6khh9RZTCUnT6dntzr'
      const supported = await Linking.canOpenURL(url); //To check if URL is supported or not.
      if (supported) {
      await Linking.openURL(url); // It will open the URL on browser.
      } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
      }
      
  }

  const rateUs = () => {
    const options = {
      AppleAppID: "2193813192",
      GooglePackageName: "com.mywebsite.myapp",
      AmazonPackageName: "com.mywebsite.myapp",
      OtherAndroidURL: "http://www.randomappstore.com/app/47172391",
      preferredAndroidMarket: AndroidMarket.Google,
      preferInApp: true,
      openAppStoreIfInAppFails: true,
      fallbackPlatformURL: "http://www.mywebsite.com/myapp.html",
    }
    Rate.rate(options, (success, errorMessage) => {
      if (success) {
        console.log(success, errorMessage)
        // this technically only tells us if the user successfully went to the Review Page. Whether they actually did anything, we do not know.
        // this.setState({ rated: true })
      }
      if (errorMessage) {
        // errorMessage comes from the native code. Useful for debugging, but probably not for users to view
        console.error(`Example page Rate.rate() error: ${errorMessage}`)
      }
    })
  }
  return (
    <View style={styles.container}>
      <CustomButtons
        position={'top'}
        callBack={rateUs}
        title={`Rate us`}
        icon={<Entypo name='star'
          color={SCColors.red}
          size={RFPercentage(3.5)} />}
        icon2={<AntDesign name='right'
          color={SCColors.tabActive}
          size={RFPercentage(2.5)} />}
      />
      <CustomButtons
        position={'mid'}
        title={`Share the App`}
        callBack={onShare}
        icon={<Entypo name='share'
          color={SCColors.red}
          size={RFPercentage(3)} />}
        icon2={<AntDesign name='right'
          color={SCColors.tabActive}
          size={RFPercentage(2.5)} />}
      />
      <CustomButtons
        position={'bottom'}
        title={`Privacy policy`}
        callBack={onPrivacy}

        icon={<MaterialIcons name='privacy-tip'
          color={SCColors.red}
          size={RFPercentage(3)} />}
        icon2={<AntDesign name='right'
          color={SCColors.tabActive}
          size={RFPercentage(2.5)} />}
      />
    </View>
  );
};

export default Profile;
