import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from '../../styles/styles';

export default function Row({ children }) {
    return <View style={styles.row}>{children}</View>;
}

Row.propTypes = {
    children: PropTypes.node.isRequired
};