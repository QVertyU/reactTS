import Home from './pages/Home.tsx';
import Login from './pages/Login.tsx';
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./state/store.ts";
import PrivateRoute from "./components/PrivateRoute.tsx";

function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={
                        <PrivateRoute>
                            <Home/>
                        </PrivateRoute>
                    }/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'*'} element={<Navigate to={'/'}/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App