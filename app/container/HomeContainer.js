/**
 * Created by developer on 17/1/15.
 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as homeCreators from '../action/HomeAction'
import Home from '../page/Home'

class HomeContainer extends  React.Component {

    render() {
        return (
            <Home {...this.props} />
        );
    }
}

const mapStateToProps = (state) => {
    const { read } = state;
    return {
        read
    };
};

const mapDispatchToProps = (dispatch) => {
    //绑定Action
    const homeAction = bindActionCreators(homeCreators, dispatch);
    return {
        homeAction
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);