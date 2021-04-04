export function setStatusLoading(dispatch) {
    return dispatch({ type: 'STATUS_LOADING' })
}

export function setStatusWaiting(dispatch) {
    return dispatch({ type: 'STATUS_WAITING' })
}

export function setStatusError(dispatch) {
    return dispatch({ type: 'STATUS_ERROR' })
}