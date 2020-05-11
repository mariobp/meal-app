import React from 'react';
import { View, ScrollView, Image, StyleSheet, Text } from 'react-native';
import DefaultText from '../components/DefaultText';

const MealDetailScreen = props => {
  const mealItem = props.navigation.getParam('meal');

  const renderList = list => {
    return list.map((item, index) => {      
      return (
        <View key={index} style={styles.itemList}>
          <DefaultText>{item}</DefaultText>
        </View>
      );
    });
  };

  return (
    <ScrollView style={{ overflow: 'hidden'}}>
      <Image source={{uri: mealItem.imageUrl}} style={styles.image}/>
      <View style={styles.details}>
        <DefaultText>{mealItem.duration}m</DefaultText>
        <DefaultText>{mealItem.complexity}</DefaultText>
        <DefaultText>{mealItem.affordability}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {renderList(mealItem.ingredients)}
      <Text style={styles.title}>Steps</Text>
      {renderList(mealItem.steps)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    textAlign:'center'
  },
  image: {
    width: '100%',
    height: 200,
  },
  itemList: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  }
});

export default MealDetailScreen;