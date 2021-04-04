import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import usersSaga from './sagas'

function status(state = { value: 'waiting' }, action) {
    switch (action.type) {
        case 'STATUS_LOADING':
            return { value: 'loading' }
        case 'STATUS_WAITING':
            return { value: 'waiting' }
        case 'STATUS_ERROR':
            return { value: 'error: ' + action.message }
        case 'STATUS_SUCCESS':
            return { value: 'success' }
        default:
            return state
    }
}

function users(state = [], action) {
    switch (action.type) {
        case 'FETCH_USERS_SUCCESS':
            return { users: action.users }
        default:
            return state
    }
}

const reducers = combineReducers({
    status,
    users
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(usersSaga)

export default store

