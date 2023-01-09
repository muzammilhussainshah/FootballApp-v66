// @app
import React, {
    useState
} from 'react';
import {
    FlatList,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import moment from 'moment';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { RFPercentage } from 'react-native-responsive-fontsize';

import SCColors from '../../../styles/SCColors';
import { styles } from '../../VideoScreen/styles';
import {
    VIDEOTABS,
    TRENDINGNEWSDATA
} from '../DummyData';
import {
    VIDEOSECTION,
    VideoTitle
} from '../../VideoScreen/Components/Components';

const MatchNews = ({ navigation, route }) => {
    const { isLive } = route.params
    const [activeCategory, setActiveCategory] = useState('Description')
    const FooterButtons = ({ title }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.footerBtnContainer}>
                <Text style={styles.footerBtnText}>{title}</Text>
            </TouchableOpacity>
        )
    }

    // TABS BUTTON
    const videoTabs = (item) => {
        return (
            <TouchableOpacity
                onPress={() => setActiveCategory(item)}
                style={styles.caregoryBtnContainer(activeCategory == item ? true : false)}>
                <Text style={[styles.caregoryBtnText(activeCategory == item ? true : false), { fontSize: RFPercentage(1.8) }]}>{item}</Text>
            </TouchableOpacity>
        )
    }
    // TABS BUTTON

    return (<>
        <View style={{ flex: 1, backgroundColor: SCColors.primary }}>
            <ScrollView   >
                {/* VIDEO SECTION */}
                <View style={styles.pictureSection}>

                    <VIDEOSECTION
                        navigation={navigation}
                        backButton
                        type={isLive ? 'video' : 'image'}
                        isLive={isLive}
                        willStartIn={isLive == false && new Date()}
                        photoURL={"https://i.picsum.photos/id/193/700/500.jpg?hmac=q5QJ9ieureq_dXwwsUmh7ub2pN-V1arRrqpMV7czc9g"}
                    />
                </View>
                {/* VIDEO SECTION */}

                <View style={[styles.VideoBody, {}]}>
                    {/* VIDEO TITLE */}
                    <VideoTitle
                        subTitle={moment().format('dddd, ') + moment().format('D MMM - hh:mm a')}
                        subTitle2={`Seria A - Gameweek 12`}
                        title={`Real Madrid Are Still Confident In Signing Mbappe This Summer`} />
                    {/* VIDEO TITLE */}
                    {isLive == false &&
                        <View style={[styles.videoTabs, { marginVertical: RFPercentage(1) }]}>
                            <TouchableOpacity style={styles.videoIcons}>
                                <Fontisto
                                    name='bell'
                                    size={RFPercentage(2.8)}
                                    color={SCColors.white}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.addMargin, styles.videoIcons]}>
                                <MaterialIcons name={`logout`} size={RFPercentage(3)} style={styles.uploadIcon} color={SCColors.white} />
                            </TouchableOpacity>
                        </View>
                    }

                    {/* VIDEO TABS */}
                    <View style={styles.videoTabs}>
                        <FlatList
                            data={VIDEOTABS}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ backgroundColor: SCColors.primary, }}
                            renderItem={({ item }) => videoTabs(item)}
                            keyExtractor={item => item.id}
                        />
                    </View>
                    {/* VIDEO TABS */}
                    <View style={{ flex: 7 }}>
                        <FlatList
                            data={TRENDINGNEWSDATA}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={[styles.newsContainer, { paddingBottom: 0 }]}
                            renderItem={({ item }) => <Text style={styles.newsText}>{item}</Text>}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </View>
            </ScrollView>
            {isLive == false &&
                <View style={[styles.footerContainer, { justifyContent: 'center' }]}>
                    <FooterButtons title={`Buy Streaming Access`} />
                </View>
            }
        </View >
    </>
    );
};

export default MatchNews;
