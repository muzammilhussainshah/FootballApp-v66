// @app
import moment from 'moment';
import React, {
    useState
} from 'react';
import {
    Dimensions,
    FlatList,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import { RFPercentage } from 'react-native-responsive-fontsize';

import SCColors from '../../../styles/SCColors';
import { styles } from '../../VideoScreen/styles';
import { TRENDINGNEWSDATA } from '../DummyData';
import {
    VIDEOSECTION,
    VideoTitle
} from '../../VideoScreen/Components/Components';

const TrendingNews = ({ navigation }) => {
    const [text, onChangeText] = React.useState("Comment here");

    return (<>
        <View style={{ flex: 1, }}>
            <ScrollView contentContainerStyle={{ backgroundColor: SCColors.primary, }}>
                {/* VIDEO SECTION */}
                <View style={styles.pictureSection}>

                    <VIDEOSECTION
                        navigation={navigation}
                        backButton
                        type={'image'}
                        photoURL={"https://i.picsum.photos/id/193/700/500.jpg?hmac=q5QJ9ieureq_dXwwsUmh7ub2pN-V1arRrqpMV7czc9g"}
                    />
                </View>
                {/* VIDEO SECTION */}

                <View style={[styles.VideoBody, {}]}>
                    {/* VIDEO TITLE */}
                    <VideoTitle
                        subTitle={moment().calendar()}
                        title={`Real Madrid Are Still Confident In Signing Mbappe This Summer`} />
                    {/* VIDEO TITLE */}

                    {/* VIDEO TABS */}
                    <View style={[styles.videoTabs, {}]}>
                        <TouchableOpacity>
                            <AntDesign
                                name='hearto'
                                size={RFPercentage(3)}
                                color={SCColors.tabInactive} />
                        </TouchableOpacity>
                        <Text style={[styles.TeamText, {
                            color: SCColors.tabInactive
                        }, styles.addMargin]}>{`19`}</Text>
                        <TouchableOpacity style={styles.addMargin}>
                            <Octicons
                                name='comment'
                                size={RFPercentage(3)}
                                style={styles.trendNewsFooterText}
                                color={SCColors.tabInactive} />
                        </TouchableOpacity>
                        <Text style={[styles.TeamText, {
                            color: SCColors.tabInactive
                        }]}>{`4`}</Text>

                    </View>
                    {/* VIDEO TABS */}
                    <View style={{ flex: 7 }}>
                        <FlatList
                            data={TRENDINGNEWSDATA}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={styles.newsContainer}
                            renderItem={({ item }) => <Text style={styles.newsText}>{item}</Text>}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </View>
            </ScrollView>
            <View style={styles.footerContainer}>
                <View style={styles.commentSection}>
                    <TextInput
                        style={styles.commentContainer}
                        onChangeText={onChangeText}
                        value={text}
                    />
                </View>
                <View style={styles.commentFooterButtons}>
                    <TouchableOpacity>
                        <AntDesign
                            name='hearto'
                            size={RFPercentage(2.5)}
                            color={SCColors.tabInactive} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}  >
                        <MaterialIcons
                            name={`logout`}
                            size={RFPercentage(3)}
                            style={styles.uploadIcon}
                            color={SCColors.tabInactive} />
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    </>
    );
};

export default TrendingNews;
