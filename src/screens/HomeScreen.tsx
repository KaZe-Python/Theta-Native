import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5d5f71',
    flex: 1,
  }
})

export default HomeScreen;