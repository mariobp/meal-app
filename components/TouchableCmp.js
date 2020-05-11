import React from 'react';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
 } from 'react-native';

const TochableCmp = props => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  };
  return <TouchableCmp {...props}>{props.children}</TouchableCmp>;
};

export default TochableCmp;