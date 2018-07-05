import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  TouchableWithoutFeedback, View, Text, StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    paddingLeft: 15,
  },
});


class ListItem extends Component {
    static propTypes = {
      lib: PropTypes.shape({
        index: PropTypes.number.isRequired,
        item: PropTypes.shape({
          id: PropTypes.number.isRequired,
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
        }).isRequired,
        separators: PropTypes.shape({ }).isRequired,
      }).isRequired,
      selectLibrary: PropTypes.func.isRequired,
      selectedLibId: PropTypes.number,
    }

    static defaultProps = {
      selectedLibId: null,
    }

    renderDescription = () => {
      const { lib: { item: { id, description } }, selectedLibId } = this.props;

      if (id === selectedLibId) {
        return (
          <Text>{description}</Text>
        );
      }

      return null;
    }

    render() {
      const { lib: { item: { title, id } }, selectLibrary } = this.props;

      return (
        <TouchableWithoutFeedback
          onPress={() => selectLibrary(id)}
        >
          <View>
            <CardSection>
              <Text style={styles.title}>{title}</Text>
            </CardSection>
            {this.renderDescription()}
          </View>
        </TouchableWithoutFeedback>
      );
    }
}

const mapStateToProps = state => ({
  selectedLibId: state.selectedLibId,
});

export default connect(mapStateToProps, actions)(ListItem);
