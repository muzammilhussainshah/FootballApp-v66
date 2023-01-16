// @app
import React, {
    useState
} from 'react';
import {
    FlatList,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import SCColors from '../../styles/SCColors';
import { styles } from './styles';
import { VIDEOTABS } from './DummyData';
import {
    VIDEOSECTION,
    VIDEOTABTIMELINECOMPONENT,
    VideoTitle
} from './Components/Components';

const VideoScreen = ({ navigation }) => {
    const [activeCategory, setActiveCategory] = useState('Timeline')

    // TABS BUTTON
    const videoTabs = (item) => {
        return (
            <TouchableOpacity
                onPress={() => setActiveCategory(item)}
                style={styles.caregoryBtnContainer(activeCategory == item ? true : false)}>
                <Text style={styles.caregoryBtnText(activeCategory == item ? true : false)}>{item}</Text>
            </TouchableOpacity>
        )
    }
    // TABS BUTTON

    return (<>
        <View style={{ flex: 1 }}>
            {/* VIDEO SECTION */}
            <VIDEOSECTION
                navigation={navigation}
                backButton
                photoURL={"https://i.picsum.photos/id/193/700/500.jpg?hmac=q5QJ9ieureq_dXwwsUmh7ub2pN-V1arRrqpMV7czc9g"} />
            {/* VIDEO SECTION */}

            <View style={styles.VideoBody}>
                {/* VIDEO TITLE */}
                <VideoTitle title={`Manchester United vs Newcastle`}
                    subTitle2={`Old Trafford Stadium`}
                    subTitle={`Premier League Gameweek 4 - Sep 11`} />
                {/* VIDEO TITLE */}

                {/* VIDEO TABS */}
                <View style={styles.videoTabs}>
                    <FlatList
                        data={VIDEOTABS}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ backgroundColor: SCColors.primary, }}
                        renderItem={({ item }) => videoTabs(item)}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                {/* VIDEO TABS */}

                {/* TIMELINE COMPONENT */}
                <VIDEOTABTIMELINECOMPONENT />
                {/* TIMELINE COMPONENT */}
            </View>
        </View >
    </>
    );
};

export default VideoScreen;
