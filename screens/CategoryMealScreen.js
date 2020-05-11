import React from 'react';
import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealScreen = props => {

  const navigateToDetails = (data) => {
    props.navigation.navigate({routeName: 'MealDetails', params: { meal: data.item }});
  };

  const catId = props.navigation.getParam('categoryId');
  const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId ) >= 0);


  return <MealList listData={displayedMeals} navigation={navigateToDetails}/>;
};


export default CategoryMealScreen;