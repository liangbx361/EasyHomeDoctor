/**
 * Created by Administrator on 2017/1/28.
 */
import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: "",
            verifyCode: ""
        };
    }

    render() {
        return (
            <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text) => this.setState({phoneNumber})}
                value={this.state.phoneNumber}
            />
        )
    }
}