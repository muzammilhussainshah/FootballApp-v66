// @app
import React from 'react';
import {
    FlatList,
    Text,
    View
} from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize';

// @components
import Entypo from 'react-native-vector-icons/Entypo'

import TitleBar from '../../../components/TitleBar';
import TrendingNewsCard from '../../../components/TrendingNewsCard';
import CustomCarousel from '../../../components/CustomCarousel';
import SCColors from '../../../styles/SCColors';
import { styles } from '../styles';
import { DUMMYBANNERS } from '../../Home/Home';
import {
    LEAGUEROWVAL,
    NEWSDATA
} from '../DummyData';

export const All = ({ navigation }) => {
    return (
        <>
            {/* BANNERS */}
            < View style={styles.bannerContainer}>
                <MatchPreviewCarousel
                    footer={true}
                    footerText={`Player, Manager & Goal of the Month Premier League Awards?`} />
            </View>
            {/* BANNERS */}

            {/* MATCH HIGHLIGHT */}
            <TitleBar title={`Match Highlight`} seeAllEnable={true} />

            <View style={{ height: RFPercentage(26) }}>
                <MatchPreviewCarousel
                    navigateTo={() => navigation?.navigate('VideoScreen')} />
            </View>
            {/* MATCH HIGHLIGHT */}

            {/* TRENDING NEWS */}
            <TitleBar title={`Trending News`} seeAllEnable={true} />
            <FlatList
                data={NEWSDATA}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ padding: RFPercentage(2) }}
                renderItem={(props) => <TrendingNewsCard
                    navigateTo={() => navigation.navigate('TrendingNews')}
                    newDatalength={NEWSDATA.length}
                    item={props} />}
                keyExtractor={item => item.id}
            />
            {/* TRENDING NEWS */}
        </>
    )
}
export const MatchPreviewCarouselWithContainer = ({ navigation }) => {
    return (
        <View style={{ height: RFPercentage(26) }}>
            <MatchPreviewCarousel
                navigateTo={() => navigation?.navigate('VideoScreen')} />
        </View>
    )
}
export const Preview = ({ navigation }) => {
    return (<>
        {/* MATCH HIGHLIGHT */}
        < TitleBar title={`UEFA Champions League`} seeAllEnable={true} />

        <MatchPreviewCarouselWithContainer navigation={navigation} />
        <MatchPreviewCarouselWithContainer navigation={navigation} />
        <MatchPreviewCarouselWithContainer navigation={navigation} />
        {/* MATCH HIGHLIGHT                  : */}
    </>)
}
export const MatchPreviewCarousel = ({ footer, footerText, navigateTo }) => {
    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: RFPercentage(2), }}
            data={DUMMYBANNERS}
            renderItem={(item) => (
                <CustomCarousel
                    navigateTo={() => navigateTo && navigateTo()}
                    footer={footer == true ? true : false}
                    footerText={footerText} item={item} />)}
            keyExtractor={item => item.id}
        />
    )
}

export const NewsUpdate = ({ navigation }) => {
    return (
        <>
            {/* BANNERS */}
            < View style={styles.bannerContainer}>
                <MatchPreviewCarousel
                    footer={true}
                    footerText={`Player, Manager & Goal of the Month Premier League Awards?`} />
            </View>
            {/* BANNERS */}
            {/* TRENDING NEWS */}
            <TitleBar title={`Trending News`} seeAllEnable={true} />
            <FlatList
                data={NEWSDATA}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ padding: RFPercentage(2) }}
                renderItem={(props) => <TrendingNewsCard
                    navigateTo={() => navigation.navigate('TrendingNews')}
                    newDatalength={NEWSDATA.length}
                    item={props} />}
                keyExtractor={item => item.id}
            />
            {/* TRENDING NEWS */}
        </>
    )
}

const ColumnVal = ({ val }) => {
    return (
        <View style={styles.columnValContainer}>
            <Text style={styles.TeamText}>{val}</Text>
        </View>
    )
}

const Title = ({ color }) => <View style={styles.titleSign(color)}></View>

export const GoalScorerContainer = ({ position, rowVal }) => {
    return (
        <View style={styles.goalScorerContainer(position)}>
            {position !== 'bottom' ?
                <>
                    <View style={styles.teamContainer}>
                        {/* <Title /> */}
                        {rowVal.title &&
                            <Title
                                color={rowVal.title == "UEFA CHAMPION LEAGUE" ?
                                    SCColors.lightGreen :
                                    rowVal.title == "UEFA EUROPA LEAGUE" ?
                                        SCColors.green :
                                        SCColors.red} />}
                        <ColumnVal val={rowVal.team} />
                    </View>
                    <ColumnVal val={rowVal.p} />
                    <ColumnVal val={rowVal.w} />
                    <ColumnVal val={rowVal.d} />
                    <ColumnVal val={rowVal.l} />
                    <ColumnVal val={rowVal.gfga} />
                    <ColumnVal val={rowVal.gd} />
                    <ColumnVal val={rowVal.pts} />
                </> :
                <>
                    <ColumnVal val={rowVal} />
                </>}

        </View>
    )
}
const Keys = ({ title }) => {
    return (
        <View style={styles.keyContainer}>
            <View style={styles.keyColorContainer(title)}></View>
            <Text style={[styles.TeamText,]}>{title}</Text>
        </View>
    )
}

export const Standing = () => {
    return (
        <>
            <TitleBar title={`Premier League`} downArrow={<Entypo name={`chevron-thin-down`} size={RFPercentage(2)} color={SCColors.white} />} />

            {LEAGUEROWVAL.map((item, index) => <GoalScorerContainer position={index == 0 ? 'top' : 'mid'} rowVal={item} />)}

            <GoalScorerContainer position={'bottom'} rowVal={'See More'} />

            <Text style={[styles.TeamText, styles.keyText]}>{`key`}</Text>

            <Keys title='UEFA CHAMPION LEAGUE' />

            <Keys title='UEFA EUROPA LEAGUE' />

            <Keys title='RELEGATION' />
        </>
    )
}