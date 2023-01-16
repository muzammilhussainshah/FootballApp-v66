// @app
import React, { useEffect, useRef } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView, SafeAreaView,
  TextInput,
  Text,Alert,Share,
  View
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Carousel from 'react-native-snap-carousel';
import { RFPercentage } from 'react-native-responsive-fontsize';

// @components
import TitleBar from '../../components/TitleBar';
import Header from '../../components/Header';
import ScoreCard from '../../components/ScoreCard';
import CustomCarousel from '../../components/CustomCarousel';
import { styles } from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { LiveAll, NowTV, ThisWeek } from '../../store/action/action';
import SCColors from '../../styles/SCColors';
import moment from 'moment';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Loader from '../../components/Loader';

const windowWidth = Dimensions.get('window').width;
const flexW1 = windowWidth / 10
import { WebView } from 'react-native-webview';

const Reward = ({ navigation }) => {
  const [url, seturl] = React.useState('https://www.google.com/');
  const [uri, seturi] = React.useState('');
  const webViewRef = useRef(null)

  const eventOfWeb = (method) => {
    method
  };
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
  return (
    <>
      <View style={[styles.container,]}>

        <View style={{ flex: 1.3 }}>

          <SafeAreaView style={{ flex: 1, flexDirection: 'row', justifyContent: "space-around" }}>
            <View style={{ backgroundColor: '#494646', flex: .9, flexDirection: 'row', borderRadius: RFPercentage(1), marginBottom: "3%" }}>

              <TextInput
                style={{ paddingLeft: "5%", flex: 8.5, color: 'white' }}
                onChangeText={(text) => { seturi(text) }}
                value={uri}
                placeholder="Enter URL here"
                placeholderTextColor={'#5c5c5c'}
              // keyboardType="numeric"
              />

              <AntDesign
                onPress={() => { seturl(uri) }}
                name={`search1`} size={RFPercentage(2.5)} color='#5c5c5c' style={{ flex: 1.5, alignSelf: 'center', textAlign: 'center' }} />

              {/* <TextInput
                style={{ backgroundColor: 'blue', flex: 8.5 }}
                // onChangeText={onChangeNumber}
                // value={number}
                placeholder="useless placeholder"
                keyboardType="numeric"
              />

              <View
                style={{ backgroundColor: 'grey', flex: 1.5, justifyContent: "center", alignItems: "center" }}
              >
                <AntDesign
                onPress={()=>{alert()}}
                name={`search1`} size={RFPercentage(2.5)} color={SCColors.white} />

              </View> */}
            </View>

            {/* <View style={{flex:1}}>
              <TextInput
                style={{backgroundColor:'blue',flex:1}}
                // onChangeText={onChangeNumber}
                // value={number}
                placeholder="useless placeholder"
                keyboardType="numeric"
              />
            </View>
            <View
                style={{backgroundColor:'grey',flex:1}}
                >
            <Ionicons name={`chevron-back`} size={RFPercentage(4)} color={SCColors.white} />

            </View> */}
          </SafeAreaView>




        </View >
        <View style={{ backgroundColor: 'green', flex: 8 }}>
          <WebView ref={webViewRef}
            source={{
              uri: url,
            }}
            style={{}}
          />

        </View >
        <View style={{ backgroundColor: SCColors.primary, flex: .7, flexDirection: 'row' }}>
          <AntDesign
            onPress={() => { eventOfWeb(webViewRef.current.goBack()) }}
            name={`left`} size={RFPercentage(2.5)} color='#5c5c5c' style={{ flex: 1.5, alignSelf: 'center', textAlign: 'center' }} />
          <AntDesign
            onPress={() => { eventOfWeb(webViewRef.current.goForward()) }}
            name={`right`} size={RFPercentage(2.5)} color='#5c5c5c' style={{ flex: 1.5, alignSelf: 'center', textAlign: 'center' }} />
          <AntDesign
            onPress={() => { eventOfWeb(webViewRef.current.reload()) }}
            name={`reload1`} size={RFPercentage(2.5)} color='#5c5c5c' style={{ flex: 1.5, alignSelf: 'center', textAlign: 'center' }} />
          <Entypo
            onPress={() => {onShare() }}
            name={`share-alternative`} size={RFPercentage(2.5)} color='#5c5c5c' style={{ flex: 1.5, alignSelf: 'center', textAlign: 'center' }} />
        </View>
      </View>
    </>
  );
};

export default Reward;
