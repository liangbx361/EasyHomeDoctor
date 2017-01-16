/**
 * Created by developer on 17/1/16.
 */
import * as types from '../constant/ActionType';

export function requestHomeInfo(doctorId) {
    return {
        type: types.REQUEST_HOME_INFO,
        doctorId: doctorId
    };
}

export function fetchHomeInfo() {
    return {
        type: types.FETCH_HOME_INFO
    }
}

export function receiveHomeInfo(doctorInfo) {
    return {
        type: types.RECEIVE_HOME_INFO,
        doctorInfo
    }
}