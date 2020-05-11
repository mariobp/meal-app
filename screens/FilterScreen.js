import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import Colors from '../constants/Colors';

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
    <Text>{props.label}</Text>
      <Switch
        trackColor={{true: Colors.primary}}
        thumbColor="white"
        value={props.state}
        onValueChange={props.onChange}/>
    </View>
  )
};

const FilterScreen = props => {
  const { navigation } = props;

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegeterian, setIsVegeterian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegeterian
    };
    console.log(appliedFilters);
  },[isGlutenFree, isLactoseFree, isVegan, isVegeterian]);

  useEffect(() => {
    props.navigation.setParams({save: saveFilters});
  },[saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch label="Gluten-free" state={isGlutenFree} onChange={newValue => setIsGlutenFree(newValue)}/>
      <FilterSwitch label="Lactose-free" state={isLactoseFree} onChange={newValue => setIsLactoseFree(newValue)}/>
      <FilterSwitch label="Vegan" state={isVegan} onChange={newValue => setIsVegan(newValue)}/>
      <FilterSwitch label="Vegeterian" state={isVegeterian} onChange={newValue => setIsVegeterian(newValue)}/>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    padding: 20
  },
  title: {
    fontFamily: 'open-sans-bold'
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 10
  }
});

export default FilterScreen;