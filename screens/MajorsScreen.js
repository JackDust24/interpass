import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MajorsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Majors Screen!</Text>
      <Button title="Go To Details" onPress={() => {
        props.navigation.navigate({
          routeName: 'Details'
        })
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MajorsScreen;
