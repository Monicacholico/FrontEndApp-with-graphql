import './style/style.css';

import React from 'react';
import ReactDOM from 'react-dom';

import {HashRouter, Route} from 'react-router-dom';

import ApolloClient from 'apollo-client';

import App from './componenets/app';

const link = new HttpLink({uri: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql'});

const client = new ApolloClient({
link,
cache: new InMemoryCache()
});

const Root = () => {
    return (
        <ApolloProvider client={client}>
        <HashRouter>
            <Route path="/" component={App}/>
        </HashRouter>
        </ApolloProvider>
    );
};

ReactDOM.render(
    <Root />
    document.querySelector("#react-app")
);
