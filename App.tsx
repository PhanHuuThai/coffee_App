

import React from 'react';

import Navigation from './src/navigation/index';

import { SafeAreaView, StyleSheet, Text, View, } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC'
  },
});

export default App;
