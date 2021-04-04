import '../style/App.css';

import { useSelector, useDispatch, useStore } from "react-redux";

function App() {
    const status = useSelector(state => state.status.value)
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()
    const store = useStore()

    function getAsyncRequest() {
        dispatch({ type: 'USER_FETCH_REQUESTED' })
    }

    return (
        <div className="App">
            <header className="App-header">
                <h3>Test redux + saga</h3>

                <button onClick={ getAsyncRequest }>async request</button>

                <div>
                    status: { status }
                </div>
                <div>
                    users: { JSON.stringify(users)}
                </div>
                <div>
                    store: { JSON.stringify(store.getState()) }
                </div>
            </header>
        </div>
    );
}

export default App;
