/**
 * Created by developer on 17/1/15.
 */
import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions
} from 'react-native';

import ViewPager from 'react-native-viewpager'
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

class Home extends React.Component {

    //定义默认的State状态
    getInitialState() {
        var bannerDataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });
        return {
            bannerDataSource: bannerDataSource.cloneWithPages(IMGS),
        };
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this._renderBanner()
                }
            </View>
        );
    }

    _renderBanner() {
        return (
            <ViewPager
                style={this.props.styles}
                dataSource={this.state.bannerDataSource}
                renderPage={this._renderBannerPage}
                isLoop={true}
                autoPlay={true}
            />
        )
    }

    _renderBannerPage(bannerData: Object, pageID: number | string) {
        return (
            <Image
                source={{uri: bannerData}}
                style={styles.banner} />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    banner: {
        width: deviceWidth,
    },
});

export default Home;

