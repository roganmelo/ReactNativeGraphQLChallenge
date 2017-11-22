import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from 'pages/Home/Container';

import 'config/reactotron';

const Route = StackNavigator({
  Home: { screen: Home }
});

const App = () => (
  <Route />
);

export default App;
