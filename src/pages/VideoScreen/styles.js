
import { Dimensions, StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import SCColors from '../../styles/SCColors';

const windowHeight = Dimensions.get('window').height;
const heightFlex1 = windowHeight / 10

export const styles = StyleSheet.create({
    VideoContainer: {
        flexDirection: "row",
        justifyContent: "center",
        flex: 3.4,
    },
    VideoBody: {
        flex: 7.5,
        backgroundColor: SCColors.primary,
        paddingHorizontal: RFPercentage(2)
    },
    videoTitle: {
        flex: 2,
        justifyContent: 'space-evenly',
    },
    videoTabs: {
        flex: 1,
        flexDirection: "row",
    },
    videoTabComponent: { flex: 7, },
    TitleBarTile: {
        fontWeight: '700',
        fontSize: RFPercentage(2.6),
        color: 'white',
        width: "95%"
    },
    TeamText: {
        color: SCColors.white,
        lineHeight: RFPercentage(3),
        fontSize: RFPercentage(1.7)
    },
    caregoryBtnContainer: activeCategory => ({
        height: RFPercentage(5),
        marginVertical: RFPercentage(.5),
        marginRight: RFPercentage(3),
        justifyContent: "center",
        borderBottomWidth: activeCategory ? 2 : 0,
        borderBottomColor: activeCategory ? SCColors.white : null
    }),
    caregoryBtnText: activeCategory => ({ color: activeCategory ? SCColors.white : SCColors.tabInactive }),
    scoreBoardContainer: {
        height: RFPercentage(17),
        marginVertical: RFPercentage(1),
        flexDirection: 'row',
        paddingHorizontal: RFPercentage(4),
        backgroundColor: SCColors.ScoreCart,
        borderRadius: RFPercentage(2)
    },
    // scoreContainer:{flexDirection:'row',justifyContent:'space-between'}
    scoreTeam1Container: {
        flex: 1,
        justifyContent: 'center',
    },
    scoreContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: RFPercentage(3.5)
    },
    scoreTeam2Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "flex-end"
    },
    GoalText: {
        color: SCColors.white,
        fontSize: RFPercentage(4.5),
        fontWeight: '600'
    },
    WillStartIn: {
        color: SCColors.white,
        fontSize: RFPercentage(3.5),
        fontWeight: '600'
    },
    goalScorerContainer: (position) => ({
        height: RFPercentage(5), backgroundColor: SCColors.ScoreCart,
        borderTopLeftRadius: position == 'top' ? RFPercentage(2) : 0,
        borderTopRightRadius: position == 'top' ? RFPercentage(2) : 0,
        marginVertical: RFPercentage(0.2),
        borderBottomLeftRadius: position == 'bottom' ? RFPercentage(2) : 0,
        borderBottomRightRadius: position == 'bottom' ? RFPercentage(2) : 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center", paddingHorizontal: RFPercentage(2)
    }),
    breakColumn: {
        height: '80%',
        backgroundColor: SCColors.tabActive,
        width: RFPercentage(0.1)
    },
    thumbnailImage: {
        height: "100%",
        width: "100%",
        position: 'absolute',
        zIndex: -1
    },
    thumbnailContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: 'space-between',
        padding: RFPercentage(1),
    },
    thumbnailHeader: {
        flexDirection: 'row',
        width: '20%',
        height: RFPercentage(3),
        justifyContent: "space-around"
    },
    uploadIcon: {
        transform: [{ rotate: "270deg" }],
        height: RFPercentage(3)
    },
    playBtn: {
        position: "absolute",
        alignSelf: "center",
    },
    thumbnailFooter: {
        flexDirection: 'row',
        position: "absolute",
        bottom: RFPercentage(1),
        right: RFPercentage(1),
        width: '20%',
        justifyContent: "space-around"
    },
    addMargin: {
        marginHorizontal: RFPercentage(2)
    },
    commentContainer: {
        borderWidth: RFPercentage(0.08),
        borderColor: SCColors.tabInactive,
        borderRadius: RFPercentage(1),
        marginLeft: RFPercentage(2),
        padding: 0,
        paddingHorizontal: RFPercentage(2),
        color: SCColors.tabInactive
    },
    commentFooterButtons: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: "center"
    },
    footerContainer: {
        height: RFPercentage(8),
        backgroundColor: SCColors.primary,
        width: "100%",
        flexDirection: 'row'
    },
    commentSection: {
        flex: 8,
        justifyContent: 'center'
    },
    newsContainer: {
        backgroundColor: SCColors.primary,
        paddingBottom: RFPercentage(5)
    },
    newsText: {
        color: SCColors.tabActive,
        marginVertical: RFPercentage(2),
        width: '95%',
        lineHeight: RFPercentage(2.5),
        fontSize: RFPercentage(1.8)
    },
    pictureSection: {
        height: heightFlex1 * 3,
        backgroundColor: 'blue',
        marginBottom: RFPercentage(2)
    },
    videoIcons: {
        height: RFPercentage(5),
        width: RFPercentage(5),
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: SCColors.ScoreCart,
        borderRadius: RFPercentage(5)
    },
    footerBtnContainer: {
        height: '70%',
        width: '80%',
        borderRadius: RFPercentage(5),
        backgroundColor: SCColors.skyBlue,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerBtnText: {
        color: SCColors.white,
        fontSize: RFPercentage(2)
    },
    WillStartInContainer: {
        height: RFPercentage(12),
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: RFPercentage(2),
        width: RFPercentage(25),
        backgroundColor: SCColors.tabInactive
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
    liveIconPosition: {
        position: 'absolute',
        bottom: RFPercentage(2),
        left: RFPercentage(4)
    }
});