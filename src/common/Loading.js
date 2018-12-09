import React, { Component } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

class Loading extends Component {
    render() {
       return (
          <View style={[styles.container, styles.horizontal]}>
             <ActivityIndicator size="large" color="green" />
          </View>
       )
    };
} 

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#22222220',
   },
   horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
   }
});

export default Loading;