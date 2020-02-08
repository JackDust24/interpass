import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const FacultyScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Faculty Screen!</Text>
      <Button title="Go To Majors" onPress={() => {
        props.navigation.navigate({
          routeName: 'Majors'
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

export default FacultyScreen;
