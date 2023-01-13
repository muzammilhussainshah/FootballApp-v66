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
    useWindowDimensions,
    View
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import { RFPercentage } from 'react-native-responsive-fontsize';
import RenderHtml from 'react-native-render-html';


import SCColors from '../../../styles/SCColors';
import { styles, tagsStyles } from '../../VideoScreen/styles';
import { TRENDINGNEWSDATA } from '../DummyData';
import {
    VIDEOSECTION,
    VideoTitle
} from '../../VideoScreen/Components/Components';

const TrendingNews = ({ navigation, route }) => {
    const [text, onChangeText] = React.useState("Comment here");
    const { data } = route.params
    console.log(data, 'datadatadata')
    const { width } = useWindowDimensions();
    const source = {
        html: data.description
    };
    return (<>
        <View style={{ flex: 1, backgroundColor: SCColors.primary, }}>
            <ScrollView contentContainerStyle={{ backgroundColor: SCColors.primary, }}>
                {/* VIDEO SECTION */}
                <View style={styles.pictureSection}>

                    <VIDEOSECTION
                        navigation={navigation}
                        backButton
                        type={'image'}
                        photoURL={data?.urlToImage}
                    />
                </View>
                {/* VIDEO SECTION */}

                <View style={[styles.VideoBody, {}]}>
                    {/* VIDEO TITLE */}
                    <VideoTitle
                        subTitle={moment(data.publishedAt).calendar()}
                        title={data?.title} />
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
                    <View style={{ flex: 7, }}>
                            <RenderHtml
                                contentWidth={width}
                                source={source}
                                    tagsStyles={tagsStyles}

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
