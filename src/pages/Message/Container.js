import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import moment from 'moment';

import Header from './Header';
import styles from './styles';

const Message = ({ navigation: { state: { params: { message } } } }) => (
  <View style={styles.container}>
    <View style={styles.messageHeader}>
      <Text style={styles.messageHeaderTitle}>{message.subject}</Text>
      <Text style={styles.messageHeaderDate}>{moment(message.createdAt).format('DD/MM')}</Text>
    </View>
    <View style={styles.messageContent}>
      <Text style={styles.messageContentText}>{message.text}</Text>
    </View>
  </View>
);

Message.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        message: PropTypes.shape({
          subject: PropTypes.string.isRequired,
          createdAt: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired
        }).isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};

Message.navigationOptions = ({ navigation }) => ({
  header: <Header back={() => navigation.goBack()} title={navigation.state.params.message.from} />
});

export default Message;
