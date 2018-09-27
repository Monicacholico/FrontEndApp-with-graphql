import './style/style.css';

import React from 'react';
import ReactDOM from 'react-dom';

import {HashRouter, Route} from 'react-router-dom';

import ApolloClient from 'apollo-client';

import App from './componenets/app';

const Root = () => {
    return (
        <HashRouter>
            <Route path="/" component={App}/>
        </HashRouter>
    );
};

ReactDOM.render(
    <Root />
    document.querySelector("#react-app")
);
