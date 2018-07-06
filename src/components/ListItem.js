import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  LayoutAnimation, TouchableWithoutFeedback, View, Text, StyleSheet,
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
      expandableText: PropTypes.bool,
    }

    static defaultProps = {
      expandableText: false,
    }

    componentWillUpdate() {
      LayoutAnimation.spring();
    }

    renderDescription = () => {
      const { lib: { item: { description } }, expandableText } = this.props;

      if (expandableText) {
        return (
          <CardSection>
            <Text>{description}</Text>
          </CardSection>
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

const mapStateToProps = (state, ownProps) => {
  // .ownProps.lib.item.id
  const { lib: { item: { id } } } = ownProps;
  const { selectedLibId } = state;

  const expandableText = selectedLibId === id;

  return {
    expandableText,
  };
};

export default connect(mapStateToProps, actions)(ListItem);
