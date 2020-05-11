import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import TouchableCmp from '../components/TouchableCmp';

const MealItem = props => {
  return (
    <View style={styles.mealItem}>
      <TouchableCmp style={styles.touchable} onPress={props.onSelected}>
        <View style={styles.mealBody}>
          <View style={{...styles.mealRow, ...styles.mealHeader}}>
            <ImageBackground source={{uri: props.image}} style={styles.image}>
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{...styles.mealRow, ...styles.mealDetails}}>
            <Text>{props.duration}m</Text>
            <Text>{props.complexity}</Text>
            <Text>{props.affordability}</Text>
          </View>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    flex: 1,
    height: 200,
    margin: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 1
  },
  touchable: {
    flex: 1,
  },
  mealBody: {
    flex: 1
  },
  mealRow: {
    flexDirection: 'row'
  },
  mealHeader: {
    height: '85%',
  },
  mealDetails: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    justifyContent: 'flex-end'
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  }
});

export default MealItem;