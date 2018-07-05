import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  static propTypes = {
    libs: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  }

  render() {
    const { libs } = this.props;

    return (
      <FlatList
        data={libs}
        renderItem={lib => <ListItem lib={lib} />}
        keyExtractor={lib => String(lib.id)}
      />
    );
  }
}

const mapStateToProps = state => ({
  libs: state.libraries,
});

export default connect(mapStateToProps)(LibraryList);
