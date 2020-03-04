/*jshint esversion: 6 */

/* TO COME IN LATER VERSION */

/*This is an example of Segmented Control Tab in React Native*/
import React, { Component } from 'react';
//Import React

import { StyleSheet, Text, View } from 'react-native';
//Import Basic React Native Component

import SegmentedControlTab from 'react-native-segmented-control-tab';
//Import SegmentedControlTab

class FavouritesScreen extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
      //Default selected Tab Index for single select SegmentedControlTab
      selectedIndices: [0],
      //Default selected Tab Indexes for multi select SegmentedControlTab
      customStyleIndex: 0,
      //Default selected Tab Indexes for cusatom SegmentedControlTab
    };
    this.handleSingleIndexSelect = this.handleSingleIndexSelect.bind(this);
  }

  handleSingleIndexSelect = (index: number) => {
    //handle tab selection for single Tab Selection SegmentedControlTab
    this.setState(prevState => ({ ...prevState, selectedIndex: index }));
  };

  handleMultipleIndexSelect = (index: number) => {
    //handle tab selection for multi Tab Selection SegmentedControlTab
    const { selectedIndices } = this.state;
    if (selectedIndices.includes(index)) {
      //if included in the selected array then remove
      this.setState(prevState => ({
        ...prevState,
        selectedIndices: selectedIndices.filter(i => i !== index),
      }));
    } else {
      //if not included in the selected array then add
      this.setState(prevState => ({
        ...prevState,
        selectedIndices: [...selectedIndices, index],
      }));
    }
  };

  handleCustomIndexSelect = (index: number) => {
    //handle tab selection for custom Tab Selection SegmentedControlTab
    this.setState(prevState => ({ ...prevState, customStyleIndex: index }));
  };

  render() {
    const { selectedIndex, selectedIndices, customStyleIndex } = this.state;
    return (
      <View style={styles.container}>
        {/* Simple Segmented Control*/}
        <Text style={styles.headerText}>
          Simple Segmented Control with Single Selection
        </Text>
        <SegmentedControlTab
          values={['Segment One', 'Segment two']}
          selectedIndex={selectedIndex}
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          onTabPress={this.handleSingleIndexSelect}
        />
        <View style={styles.Seperator} />

        {/* Additional badges in Simple Segmented Control*/}
        <Text style={styles.headerText}>
          Simple Segmented Control with Single Selection + Badges
        </Text>
        <SegmentedControlTab
          badges={[12, 24]}
          values={['Segment One', 'Segment two']}
          selectedIndex={selectedIndex}
          onTabPress={this.handleSingleIndexSelect}
        />
        <View style={styles.Seperator} />

        {/* Simple Segmented Control with multi Select*/}
        <Text style={styles.headerText}>
          Simple Segmented Control with Multiple Selection
        </Text>
        <SegmentedControlTab
          values={['Segment One', 'Segment two', 'Segment Three']}
          multiple
          //You need to add the multiple as conpared to single select
          selectedIndices={selectedIndices}
          //pass the selected index array for the default selection
          onTabPress={this.handleMultipleIndexSelect}
          //Pushing the selected option index in selected item array
        />
        <View style={styles.Seperator} />
        <Text style={styles.headerText}>
          Custom segmented control with custom styles
        </Text>

        {/* Simple Segmented with Custom Styling*/}
        <SegmentedControlTab
          values={['one', 'two']}
          selectedIndex={customStyleIndex}
          onTabPress={this.handleCustomIndexSelect}
          borderRadius={0}
          tabsContainerStyle={{ height: 50, backgroundColor: '#F2F2F2' }}
          tabStyle={{
            backgroundColor: '#F2F2F2',
            borderWidth: 0,
            borderColor: 'transparent',
          }}
          activeTabStyle={{ backgroundColor: 'white', marginTop: 2 }}
          tabTextStyle={{ color: '#444444', fontWeight: 'bold' }}
          activeTabTextStyle={{ color: '#888888' }}
        />
        {customStyleIndex === 0 && (
          <Text style={styles.tabContent}> Tab one</Text>
        )}
        {customStyleIndex === 1 && (
          <Text style={styles.tabContent}> Tab two</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
  headerText: {
    padding: 8,
    fontSize: 14,
    color: '#444444',
    textAlign: 'center',
  },
  tabContent: {
    color: '#444444',
    fontSize: 18,
    margin: 24,
  },
  Seperator: {
    marginHorizontal: -10,
    alignSelf: 'stretch',
    borderTopWidth: 1,
    borderTopColor: '#888888',
    marginTop: 24,
  },
  tabStyle: {
    borderColor: '#D52C43',
  },
  activeTabStyle: {
    backgroundColor: '#D52C43',
  },
});

export default FavouritesScreen;
