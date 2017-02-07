/**
 * Created by developer on 17/1/15.
 */
import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    ListView,
    Dimensions
} from 'react-native';

import ViewPager from 'react-native-viewpager'
import GridView from 'react-native-gridview'

var deviceWidth = Dimensions.get('window').width;
var IMGS = [
    'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024',
    'https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?h=1024',
    'https://images.unsplash.com/photo-1441448770220-76743f9e6af6?h=1024',
    'https://images.unsplash.com/photo-1441260038675-7329ab4cc264?h=1024',
    'https://images.unsplash.com/photo-1441126270775-739547c8680c?h=1024',
    'https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?h=1024',
    'https://images.unsplash.com/photo-1440847899694-90043f91c7f9?h=1024'
];

var shortcutIconPhone = require('../res/img/shortcut_icon_phone.png')
var iconHotNews = require('../res/img/icon_hot_news.png')

var SHORTCUT = [
    {
        type: 0,
        title: "电话",
        state: 1,
        icon_state_0: shortcutIconPhone,
        icon_state_1: shortcutIconPhone,

    },
    {
        type: 1,
        icon: shortcutIconPhone,
        title: "图文",
        state: 1,
        icon_state_0: shortcutIconPhone,
        icon_state_1: shortcutIconPhone,
    },
    {
        type: 2,
        icon: shortcutIconPhone,
        title: "订单",
        state: 0,
        icon_state_0: shortcutIconPhone,
        icon_state_1: shortcutIconPhone,
    },
    {
        type: 3,
        title: "每日签到",
        state: 1,
        icon_state_0: shortcutIconPhone,
        icon_state_1: shortcutIconPhone,
    }
]

class Home extends React.Component {

    constructor(props) {
        super(props);
        var bannerDataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });
        var shortcutDataSource = new GridView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2,
        })
        this.state = {
            bannerDataSource: bannerDataSource.cloneWithPages(IMGS),
            shortcutDataSource: shortcutDataSource.cloneWithRows(SHORTCUT)
        };
    }

    render() {
        return (
            <View style={styles.container}>
                { this._renderBanner() }
                { this._renderShortcut() }
                { this._renderHotNewsHeader() }
                { this._renderHotNewsList() }
            </View>
        );
    }

    _renderBanner() {
        console.log("_renderBanner");
        return (
            <ViewPager
                dataSource={this.state.bannerDataSource}
                renderPage={this._renderBannerPage}
                isLoop={true}
                autoPlay={true}
            />
        )
    }

    _renderBannerPage(bannerData, pageID) {
        console.log("_renderBannerPage", bannerData);
        return (
            <Image
                source={{uri: bannerData}}
                style={styles.bannerItem} />
        );
    }

    _renderShortcut() {
        return (
            <GridView
                data={SHORTCUT}
                itemsPerRow={4}
                renderItem={(item, sectionID, rowID, itemIndex, itemID) => {
                    return (
                        <View
                            style={styles.shortcut}
                        >
                            <Image
                                source={item.state == 0 ? item.icon_state_0 : item.icon_state_1}
                                style={styles.shortcutIcon}
                            />
                            <Text style={item.state == 0 ? styles.shortcutTitleState0: styles.shortcutTitleState1}>
                                {item.title}
                            </Text>
                        </View>
                    )
                }}
            />
        )
    }

    _renderHotNewsHeader() {
        return (
            <View style={styles.hotNewsHeader}>
                <Image
                    source={iconHotNews}
                    style={styles.hotNewsIcon}/>
                <Text style={styles.hotNewsTxt}>热点新闻</Text>
            </View>
        )
    }

    _renderHotNewsList() {
        return (
            <ListView
                renderRow={(rowData) => {

                }}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        //TODO 背景颜色
        backgroundColor: '#F5FCFF',
    },
    banner: {
        flex:1
    },
    bannerItem: {
        width: deviceWidth,
        height: 150
    },
    //快捷功能
    shortcut: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    shortcutIcon: {
        width: 32,
        height: 32
    },
    //离线
    shortcutTitleState0: {
        fontSize: 16,
        color: '#f00'
    },
    //上线
    shortcutTitleState1: {
        fontSize: 16,
        color: '#000'
    },
    hotNewsHeader: {
        flexDirection: 'row'
    },
    //热点新闻图片
    hotNewsIcon: {
        width: 32,
        height: 32
    },
    hotNewsTxt: {
        fontSize: 16,
    }
});

export default Home;

