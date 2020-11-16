import {call, put, takeLatest} from 'redux-saga/effects';
import {CURRENTER} from '@/store/actions';
import {getCurrentUser} from '@/services'
import {removeToken} from "@/utils/cookie";

// workder Saga : 将在 USER_FETCH_REQUESTED action 被发起时调用
function* fetchUser(action: any) {
    try {
        // console.log('redux 获取用户信息');
        const {data} = yield call(getCurrentUser);
        // console.log(data,'response:getCurrentUser');
        yield put({type: CURRENTER.UPDATECURRENTER, payload: data});
    } catch (e) {
        removeToken();
        window.location.reload();
    }
}

/*
  在每个 `USER_FETCH_REQUESTED` action 被发起时调用 fetchUser
  允许并发（译注：即同时处理多个相同的 action）
*/
/*
  也可以使用 takeLatest

  不允许并发，发起一个 `USER_FETCH_REQUESTED` action 时，
  如果在这之前已经有一个 `USER_FETCH_REQUESTED` action 在处理中，
  那么处理中的 action 会被取消，只会执行当前的
*/
function* userSaga() {
    yield takeLatest(CURRENTER.GETCURRENTER, fetchUser);
    // yield takeLatest(CURRENTER.UPDATECURRENTER, fetchUser);
}


export default userSaga