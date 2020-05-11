import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from '../components/MealItem';

const MealList = props => {

  
  const renderMealItem = (data) => {
    return <MealItem
              title={data.item.title}
              duration={data.item.duration}
              complexity={data.item.complexity.toUpperCase()}
              affordability={data.item.affordability.toUpperCase()}
              image={data.item.imageUrl}
              onSelected={() => props.navigation(data)}/>;
  }

  return (
    <View style={styles.screen}>
      <FlatList
        centerContent
        style={styles.list}
        data={props.listData}
        renderItem={renderMealItem}/>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  list: {
    width: '100%',
  }
});

export default MealList;