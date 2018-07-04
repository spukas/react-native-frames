import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import { Header } from './src/components/common';

const store = createStore(reducers);
console.log(store.getState());

const styles = StyleSheet.create({
  container: {

  },
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Header headerText="Tech Stack" />
        </View>
      </Provider>
    );
  }
}
