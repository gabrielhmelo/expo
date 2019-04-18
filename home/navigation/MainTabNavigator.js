/* @flow */
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';

import Colors from '../constants/Colors';
import ExploreStack from './ExploreNavigator';
import ProfileStack from './ProfileNavigator';
import ProjectsStack from './ProjectsNavigator';

export default createBottomTabNavigator(
  {
    ProjectsStack,
    ExploreStack,
    ProfileStack,
  },
  {
    navigationOptions: {
      header: null,
    },
    initialRouteName: 'ProjectsStack',
    tabBarOptions: {
      style: {
        backgroundColor: Colors.tabBar,
        borderTopColor: '#f2f2f2',
        paddingBottom: 4,
      },
    },
  }
);
