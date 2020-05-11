import React from 'react';
import { FlatList  } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import GridItem from '../components/GridItem';

const CategoriesScreen = props => {
  const navigateToMeals = (itemData) => {
    props.navigation.navigate({routeName: 'CategoryMeals', params: {
      categoryId: itemData.id,
      categoryTitle: itemData.title,
      categoryColor: itemData.color
    }});
  };
  const renderGridItem = (itemData) => {
    return <GridItem  
             title={itemData.item.title}
             color={itemData.item.color}
             onSelect={navigateToMeals.bind(this, itemData.item)}/>;
  };

  return (
    <FlatList data={CATEGORIES} numColumns={2} renderItem={renderGridItem}/>
  );
};

export default CategoriesScreen;