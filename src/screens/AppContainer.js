import React from 'react';
import {StatusBar, Platform } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import Login  from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import MovieDetail from './MovieDetail/MovieDetails'

const AppNavigator = createStackNavigator({
  Login: Login,
  Dashboard: Dashboard,
  MovieDetail: MovieDetail

},{
  initialRouteName: 'Login',
  style: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  }
});

export default createAppContainer(AppNavigator);