/**
 * Created by developer on 17/1/15.
 */
import React, { Component, PropTypes } from 'react';
import {
    Dimensions,
    Animated
} from 'react-native'
import Storage from '../util/Storage';

const contextTypes = {
    routes: PropTypes.object.isRequired
};

const maxHeight = Dimensions.get('window').height;
const maxWidth = Dimensions.get('window').width;
const splashImg = require("../res/img/splash.png");

/**
 * 闪屏页
 */
class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bounceValue: new Animated.Value(1)
        };
    }

    componentDidMount() {
        const { routes } = this.context;
        Animated.timing(
            this.state.bounceValue,
            { toValue:1.2, duration: 10000 }
        ).start();
        this.timer = setTimeout(() => {
            // 跳转到tabBar
            routes.tabBar();
        }, 1000);
    }

    render() {
        return (
            <Animated.Image
                style={{ width: maxWidth, height: maxHeight,
                transform: [{scale: this.state.bounceValue }] }}
                source={splashImg}
                />
        );
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }
}

// FIXME 什么用处?
Splash.contextTypes = contextTypes;

export default Splash;