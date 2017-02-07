/**
 * Created by developer on 17/1/15.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Navigator
} from 'react-native';
import {
    Router,
    Scene,
    ActionConst
} from 'react-native-router-flux';
import {connect} from 'react-redux';
import Splash from '../page/Splash'
import TabIcon from '../component/TabIcon';
import HomeContainer from '../container/HomeContainer'

const RouterWithRedux = connect()(Router);
const backButton = require('../res/img/arrow_left.png');

const getSceneStyle = (props, computedProps) => {
    const style = {
        flex: 1,
        backgroundColor: '#fff',
        shadowColor: null,
        shadowOffset: null,
        shadowOpacity: null,
        shadowRadius: null,
    };
    if (computedProps.isActive) {
        style.marginTop = computedProps.hideNavBar ?
            0 : Navigator.NavigationBar.Styles.General.TotalNavHeight;
        style.marginBottom = computedProps.hideTabBar ? 0 : 50;
    }
    return style;
};

class Application extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <RouterWithRedux
                getSceneStyle={getSceneStyle}
                navigationBarStyle={styles.navBar}
                titleStyle={styles.navBarTitle}
                backButtonImage={backButton}
            >
                <Scene key="root">
                    <Scene
                        key="splash"
                        component={Splash}
                        hideNavBar
                        hideTabBar
                        initial
                    />
                    <Scene key="tabBar" tabs pressOpacity={0.8} type={ActionConst.REPLACE}>
                        <Scene
                            key="home"
                            component={HomeContainer}
                            hideNavBar
                            title="首页"
                            icon={TabIcon}
                            iconName="md-home"
                        />
                        <Scene
                            key="patient"
                            component={HomeContainer}
                            hideNavBar
                            title="患者"
                            icon={TabIcon}
                            iconName="md-sad"
                        />
                        <Scene
                            key="mine"
                            component={HomeContainer}
                            hideNavBar
                            title="我"
                            icon={TabIcon}
                            iconName="md-sad"
                        />
                    </Scene>
                </Scene>

            </RouterWithRedux>
        )
    }
}

const styles = StyleSheet.create({
    navBar: {
        backgroundColor: '#3e9ce9'
    },
    navBarTitle: {
        color: '#fff',
        fontSize: 20,
    }
});

export default Application;
