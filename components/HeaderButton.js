import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { MaterialIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import Colors from '../constants/Colors';

const CustomHeaderButton = props => {
  const color = Platform.OS === 'ios' ? Colors.primary : 'white';

  return <HeaderButton {...props} IconComponent={MaterialIcons} iconSize={23} color={color}/>
};

export default CustomHeaderButton;