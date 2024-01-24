import Home from './pages/Home.tsx';
import Contact from './pages/Contact.tsx';
import Login from './pages/Login.tsx';
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./state/store.ts";
import PrivateRoute from "./components/PrivateRoute.tsx";
import Navigation from "./components/Navigation.tsx";
import {HelpButton} from "./components/HelpButton";
function App() {


    return (
        <>
                <Provider store={store}>
                    <BrowserRouter>
                        <PrivateRoute>
                            <Navigation/>
                            <HelpButton />
                        </PrivateRoute>
                        <Routes>
                            <Route path={'/'} element={
                                <PrivateRoute>
                                    <Home/>
                                </PrivateRoute>
                            }/>
                            <Route path={'/contact'} element={
                                <PrivateRoute>
                                    <Contact/>
                                </PrivateRoute>
                            }/>
                            <Route path={'/login'} element={<Login/>}/>
                            <Route path={'*'} element={<Navigate to={'/'}/>}/>
                        </Routes>
                    </BrowserRouter>
                </Provider>
        </>
    );
}

export default App