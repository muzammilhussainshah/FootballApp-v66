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

export const MatchPreviewCarouselWithContainer = ({ navigation, data, preview, league }) => {
    return (
        <View style={{ height: RFPercentage(26) }}>
            <MatchPreviewCarousel
                data={data}
                preview={preview}
                league={league}
                navigateTo={() => navigation?.navigate('VideoScreen')} />
        </View>
    )
}
export const Preview = ({ navigation, leagues }) => {
    return (<>
        {/* MATCH HIGHLIGHT */}
        {leagues.map((item, index) => {
            return (
                <View key={index.toString()}>
                    < TitleBar title={item[0].league.name}  />
                    <MatchPreviewCarouselWithContainer preview data={item} league={item} navigation={navigation} />
                </ View>
            )
        })}
    </>)
}
export const MatchPreviewCarousel = ({ footer, footerText, navigateTo, data, news, league, preview }) => {
    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: RFPercentage(2), }}
            data={data ? data : DUMMYBANNERS}
            renderItem={({ item, index }) => {
                return (
                    <CustomCarousel
                        index={index}
                        preview={preview}
                        league={league ? league[index].league : league}
                        news={news}
                        navigateTo={() => navigateTo && navigateTo()}
                        footer={footer == true ? true : false}
                        footerText={footerText} item={item} />)
            }}
            keyExtractor={(item, index) => index.toString()}
        />
    )
}

export const NewsUpdate = ({ navigation, news }) => {
    return (
        <>
            {/* BANNERS */}
            < View style={styles.bannerContainer}>
                <MatchPreviewCarousel
                    footer={true}
                    news={true}
                    data={news}
                    footerText={`Player, Manager & Goal of the Month Premier League Awards?`} />
            </View>
            {/* BANNERS */}
            {/* TRENDING NEWS */}
            <TitleBar title={`Trending News`}   />
            <FlatList
                data={news}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ padding: RFPercentage(2) }}
                renderItem={(props) => <TrendingNewsCard
                    navigateTo={() => navigation.navigate('TrendingNews', { data: props.item })}
                    newDatalength={NEWSDATA.length}
                    item={props} />}
                keyExtractor={(item, index) => index.toString()}
            />
            {/* TRENDING NEWS */}
        </>
    )
}

const ColumnVal = ({ val, rank }) => {
    return (
        <View style={styles.columnValContainer}>
            <Text style={styles.TeamText}>{rank && rank} {val}</Text>
        </View>
    )
}

const Title = ({ color }) => <View style={styles.titleSign(color)}></View>

export const GoalScorerContainer = ({ position, rowVal, index }) => {
    const { all, goalsDiff, rank, points, team } = rowVal
    return (
        <View style={styles.goalScorerContainer(position)}>
            {position !== 'bottom' ?
                <>
                    <View style={styles.teamContainer}>
                        {/* <Title /> */}
                        {/* {rowVal?.title && */}
                        {index ?
                            <Title
                                color={
                                    index == 1 ?
                                        SCColors.lightGreen :
                                        (index == 2 || index == 3 || index == 4) ?
                                            SCColors.green :
                                            null} />
                            : <></>}
                        {/* } */}
                        <ColumnVal rank={rank} val={team.name} />
                    </View>
                    <ColumnVal val={all?.played} />
                    <ColumnVal val={all?.win} />
                    <ColumnVal val={all?.draw} />
                    <ColumnVal val={all?.lose} />
                    <ColumnVal val={all?.goals && all?.goals.for + '/' + all?.goals.against} />
                    <ColumnVal val={goalsDiff} />
                    <ColumnVal val={points} />
                </> :
                <>
                    <ColumnVal val={rowVal} />
                </>
            }

        </View >
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

export const Standing = ({ standings }) => {
    let headerData = {
        team: { name: 'Team' },
        all: { played: 'p', win: 'w', draw: 'd', lose: 'l', goals: { for: 'GF', against: 'GA', } },
        goalsDiff: 'GD',
        points: 'PTS'
    }
    return (
        <>
            <TitleBar title={standings[0]?.league?.name} downArrow={<Entypo name={`chevron-thin-down`} size={RFPercentage(2)} color={SCColors.white} />} />

            {/* {LEAGUEROWVAL.map((item, index) => <GoalScorerContainer position={index == 0 ? 'top' : 'mid'} rowVal={item} />)} */}

            <GoalScorerContainer position={'top'} rowVal={headerData} />
            {standings[0]?.league?.standings[0].map((item, index) => <GoalScorerContainer index={index} position={'mid'} rowVal={item} />)}
            <GoalScorerContainer position={'bottom'} rowVal={'See More'} />

            <Text style={[styles.TeamText, styles.keyText]}>{`key`}</Text>

            <Keys title='UEFA CHAMPION LEAGUE' />

            <Keys title='UEFA EUROPA LEAGUE' />

            <Keys title='RELEGATION' />
        </>
    )
}