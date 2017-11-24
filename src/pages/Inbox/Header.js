import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import styles from './styles';

const Header = ({ newMessage }) => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>RocketMailer</Text>
    <TouchableOpacity onPress={newMessage}>
      <Icon name='send-o' style={styles.headerIcon} />
    </TouchableOpacity>
  </View>
);

Header.propTypes = {
  newMessage: PropTypes.func.isRequired
};

export default Header;
