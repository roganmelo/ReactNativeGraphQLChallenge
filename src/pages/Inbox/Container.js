import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import moment from 'moment';

import graphql from './graphql';
import Header from './Header';
import ListItem from './ListItem';
import styles from './styles';

class Inbox extends Component {
  static propTypes = {
    subscribeToMore: PropTypes.func.isRequired,
    inbox: PropTypes.shape({
      loading: PropTypes.loading,
      allMessages: PropTypes.array
    }).isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired
    }).isRequired
  };

  static navigationOptions = ({ navigation }) => ({
    header: <Header newMessage={() => navigation.navigate('NewMessage')} />
  });

  componentDidMount = () => {
    this.props.subscribeToMore();
  }

  openMessage = message => this.props.navigation.navigate('Message', { message });

  render = () => (
    <View style={styles.container}>
      <Choose>
        <When condition={this.props.inbox.loading}>
          <ActivityIndicator style={styles.loading} />
        </When>
        <Otherwise>
          <ScrollView contentContainerStyle={styles.list}>
            <For each='item' of={this.props.inbox.allMessages || []}>
              <ListItem
                key={item.id}
                open={() => this.openMessage(item)}
                data={{
                  from: item.from,
                  subject: item.subject,
                  createdAt: moment(item.createdAt).format('DD/MM')
                }}
              />
            </For>
          </ScrollView>
        </Otherwise>
      </Choose>
    </View>
  )
}

export default graphql(Inbox);
