import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

import graphql from './graphql';
import Header from './Header';
import styles from './styles';

class NewMessage extends Component {
  static propTypes = {
    addMessage: PropTypes.func.isRequired
  };

  static navigationOptions = ({ navigation }) => ({
    header: <Header back={() => navigation.goBack()} />
  });

  state = {
    to: '',
    from: 'Rogan',
    subject: '',
    text: ''
  };

  send = () => {
    const { to, from, subject, text } = this.state;

    if(!to || !subject || !text) {
      alert('Preencha os campos corretamente.');
      return;
    }

    this.setState({
      to: '',
      subject: '',
      text: ''
    });

    this.props.addMessage({ to, from, subject, text });
  }

  render = () => (
    <View style={styles.container}>
      <View style={styles.newMessageHeader}>
        <TextInput
          underlineColorAndroid='transparent'
          autoCorrect={false}
          autoCapitalize='none'
          placeholder='Para quem?'
          style={styles.input}
          onChangeText={to => this.setState({ to })}
          value={this.state.to}
        />
        <TextInput
          underlineColorAndroid='transparent'
          autoCorrect={false}
          autoCapitalize='none'
          placeholder='Qual assunto?'
          style={styles.input}
          onChangeText={subject => this.setState({ subject })}
          value={this.state.subject}
        />
      </View>
      <View style={styles.newMessageContent}>
        <TextInput
          underlineColorAndroid='transparent'
          autoCorrect={false}
          autoCapitalize='none'
          placeholder='Digite a mensagem...'
          style={styles.textarea}
          multiline
          numberOfLines={4}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
      </View>
      <View style={styles.sendButtonContainer}>
        <TouchableOpacity onPress={this.send}>
          <View style={styles.sendButton}>
            <Text style={styles.sendButtonText}>Enviar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default graphql(NewMessage);
