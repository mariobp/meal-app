import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Platform, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import FilterScreen from '../screens/FilterScreen';
import HeaderIconButton from '../components/HeaderIconButton';
import Colors from '../constants/Colors';

/**
 *  Globals constants 
 */

 const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  }
};

/**
 * Stacks Navigators
 */

const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
    navigationOptions:  ({ navigation }) => {
      return {
        headerTitle: 'Meal Categories',
        headerLeft: () => <HeaderIconButton name="menu" onClick={navigation.toggleDrawer}/>
      }
    }
  },
  CategoryMeals: {
    screen: CategoryMealScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: navigation.getParam('categoryTitle'),
      }
    }
  },
  MealDetails: {
    screen: MealDetailScreen,
    navigationOptions: ({ navigation }) => {      
      return {
        headerTitle: navigation.getParam('title'),
        headerRight: () => <HeaderIconButton name="favorite"/>,
      }
    }
  }
},{
  defaultNavigationOptions: defaultNavOptions
});

const FavoriteNavigator = createStackNavigator({
  Favorite: {
    screen: FavoriteScreen,
    navigationOptions:  ({ navigation }) => {
      return {
        headerTitle: 'Your Favorites',
        headerLeft: () =>  <HeaderIconButton name="menu" onClick={navigation.toggleDrawer}/>
      }
    }
  },
  MealDetails: {
    screen: MealDetailScreen
  }
},{
  defaultNavigationOptions: defaultNavOptions
});

/**
 * Bottom Tabs Navigators
 */

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <MaterialIcons name="restaurant" size={25} color={tabInfo.tintColor}/>
      },
      tabBarColor: Colors.primary,
      tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans'}}>Meals</Text> : 'Meals'
    }
  },
  Favorites: {
    screen: FavoriteNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <MaterialIcons name="star" size={25} color={tabInfo.tintColor}/>
      },
      tabBarColor: Colors.accentColor,
      tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans'}}>Favorites</Text> : 'Favorites'
    },
  }
};

const MealsFavTabNavigatorIOs = createBottomTabNavigator(tabScreenConfig,{
  tabBarOptions: {
    activeTintColor: Colors.accentColor,
    labelStyle: {
      fontFamily: 'open-sans-bold'
    }
  }
});

const MealsFavTabNavigatorAndroid = createMaterialBottomTabNavigator(tabScreenConfig, {
  activeTintColor: 'white',
  shifting: true,
});

const MealsFavTabNavigator = Platform.OS === 'android'
  ? MealsFavTabNavigatorAndroid
  : MealsFavTabNavigatorIOs;

/**
 * Drawer Navigator
 */

const FilterNavigator = createStackNavigator({
  Filters: {
    screen: FilterScreen,
    navigationOptions:  ({ navigation }) => {
      return {
        headerTitle: 'Filters',
        headerLeft: () =>  (
          <HeaderIconButton
            name="menu"
            onClick={navigation.toggleDrawer}/>
        ),
        headerRight: () => (
          <HeaderIconButton
            name="save"
            onClick={navigation.getParam('save')}/>
        )
      }
    }
  }
}, {
  defaultNavigationOptions: defaultNavOptions
});

const MainNavigator = createDrawerNavigator({
  MealFavs: {
    screen: MealsFavTabNavigator,
    navigationOptions: {
      title: 'Meals'
    }
  },
  Filters: {
    screen: FilterNavigator,
    navigationOptions: {
      title: 'Filter Meal'
    }
  }
},{
  contentOptions: {
    activeTintColor: Colors.accentColor,
    labelStyle: {
      fontFamily: 'open-sans'
    }
  }
});

export default createAppContainer(MainNavigator);