import React from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const ListItem = ({ data: { from, subject, createdAt }, open }) => (
  <TouchableWithoutFeedback onPress={open}>
    <View style={styles.listItem}>
      <View>
        <Text style={styles.listItemTitle}>{subject}</Text>
        <Text style={styles.listItemSubject}>{from}</Text>
      </View>
      <View>
        <Text style={styles.listItemDate}>{createdAt}</Text>
      </View>
    </View>
  </TouchableWithoutFeedback>
);

ListItem.propTypes = {
  data: PropTypes.shape({
    from: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired
  }).isRequired,
  open: PropTypes.func.isRequired
};

export default ListItem;
