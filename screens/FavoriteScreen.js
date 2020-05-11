import React from 'react';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';

const FavoriteScreen = props => {
  const navigateToDetails = (data) => {
    props.navigation.navigate({routeName: 'MealDetails', params: { meal: data.item }});
  };

  const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');

  return <MealList
            listData={favMeals}
            navigation={navigateToDetails}/>;
};


export default FavoriteScreen;