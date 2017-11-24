import React from 'react';
import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { ApolloProvider } from 'react-apollo';

import Inbox from 'pages/Inbox/Container';
import Message from 'pages/Message/Container';
import NewMessage from 'pages/NewMessage/Container';

import client from 'config/apollo';
import 'config/reactotron';

StatusBar.setBarStyle('light-content');

const Route = StackNavigator({
  Inbox: { screen: Inbox },
  Message: { screen: Message },
  NewMessage: { screen: NewMessage }
});

const App = () => (
  <ApolloProvider client={client}>
    <Route />
  </ApolloProvider>
);

export default App;
