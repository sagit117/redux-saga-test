import { call, put, takeEvery } from 'redux-saga/effects'

function api() {
    console.log('api')
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
}

function* fetchUser(/* action */) {
    try {
        yield put({ type: 'STATUS_LOADING' })

        const users = yield call(api);
        yield put({ type: "FETCH_USERS_SUCCESS", users });

        yield put({ type: 'STATUS_SUCCESS' })
    } catch (e) {
        yield put({ type: "STATUS_ERROR", message: e.message });
    }
}

function* userSaga() {
    yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

export default userSaga