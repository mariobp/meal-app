import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform
} from 'react-native';
import TouchableCmp from '../components/TouchableCmp';

const GridItem = (props) => {

  return (
    <View style={styles.gridItem}>
      <TouchableCmp
        onPress={props.onSelect}
        style={styles.touchable}>  
        <View style={{...styles.container, backgroundColor: props.color}}>
          <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
        </View>
      </TouchableCmp>
    </View>
  )
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    elevation: 5,
    overflow: Platform.OS === 'android' && Platform.Version >= 21
      ? 'hidden'
      : 'visible',
  },
  container: {
    flex: 1,
    padding: 15,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    textShadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
  },
  touchable: {
    flex: 1
  }
});

export default GridItem;