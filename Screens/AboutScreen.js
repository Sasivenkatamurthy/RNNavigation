import { View, Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import React from 'react';

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>AboutScreen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
