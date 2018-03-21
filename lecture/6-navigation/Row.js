import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  row: { padding: 20 },
});

const Row = props => (
  <TouchableOpacity
    style={styles.row}
    onPress={() => props.onSelectContact(props)}>
    <Text>{props.name}</Text>
    <Text>{props.phone}</Text>
  </TouchableOpacity>
);

Row.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
};

export default Row;
