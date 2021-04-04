export function fetchUsers(dispatch, payload) {
    return dispatch({ type: 'FETCH_USERS', payload })
}