import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import styles from './styles';

const Header = ({ back, title }) => (
  <View style={styles.header}>
    <TouchableOpacity onPress={back}>
      <Icon name='angle-left' style={styles.headerIcon} />
    </TouchableOpacity>
    <View style={styles.headerTitle}>
      <Text style={styles.headerTitleText}>{title}</Text>
    </View>
  </View>
);

Header.propTypes = {
  back: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default Header;
