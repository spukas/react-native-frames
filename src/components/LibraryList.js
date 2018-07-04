import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends Component {
  render() {
    const { libs } = this.props;

    return (
      <View>
        <Text>{libs.map(({ id, title }) => <Text key={id}>{title}</Text>)} </Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state: ', state);

  return {
    libs: state.libraries,
  };
};


export default connect(mapStateToProps)(LibraryList);
