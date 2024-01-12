import Home from './pages/Home.tsx'
import Login from './pages/Login.tsx'
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./state/store.ts"

const isAuthorized = store.getState().auth.authorized;

function App() {

    if (isAuthorized) {
        return (
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path={''} element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </>
        )
    } else {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App