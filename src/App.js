import React from 'react';
import { Route , Switch} from "react-router-dom"
//components
import Login from './components/Login';
import Chats from './components/Chats';
// context
import AuthContextProvider from './context/AuthContextProvider';
const App = () => {
    return (
        <div>
            <AuthContextProvider>
            <Switch>
                <Route path="/chats" component={Chats} />
                <Route path="/" component={Login} />
            </Switch>
            </AuthContextProvider>
        </div>
    );
};

export default App;