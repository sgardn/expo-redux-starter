import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import PlaceholderScreen from '../screens/PlaceholderScreen'
import PostsScreen from '../screens/PostsScreen'
import PostScreen from '../screens/PostScreen'

const NewStack = createStackNavigator({
  New: PlaceholderScreen,
})

NewStack.navigationOptions = {
  tabBarLabel: 'New',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
}

const PostsStack = createStackNavigator({
  Posts: PostsScreen,
  Post: PostScreen
})

PostsStack.navigationOptions = {
  tabBarLabel: 'Posts',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
}

export default createBottomTabNavigator({
  PostsStack,
  NewStack
})
