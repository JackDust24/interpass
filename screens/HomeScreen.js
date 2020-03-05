/*jshint esversion: 6 */

import React, { Component, useState } from 'react';
import { navigation } from 'react-navigation';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
  Image,
  Text,
} from 'react-native';

// Colours and Data are for the default colours, while data is for the Universities data
import Colors from '../constants/Colors';
import data from '../data/InterpassData.js'; // JSON file includes the data

const HomeScreen = (props) => {

  // Set up the arrays for filtering the data
  var universitiesNames = [];
  var uniData = [];

  // Debuggging Only
  data.map(Uni => (
    console.log('Uni - ' + Uni.university)
  ));

  // Filter the json data to display the 
  data.map(Uni => {
    console.log(universitiesNames.includes(Uni.university) >= 1);
    const isAlreadyInList = universitiesNames.includes(Uni.university) >= 1;
    {
      isAlreadyInList ?
        console.log("Already in list" + Uni.university)
        : uniData.push(Uni)
      universitiesNames.push(Uni.university)
    }
  }
  );

  // Debugging
  // console.log("universitiesNames Array = " + universitiesNames);
  // console.log("Universities Array = " + uniData);

  // For when the user selects a row
  const [selected, setSelected] = React.useState(new Map());
  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));
      setSelected(newSelected);
    },
    [selected]
  );

  // Iterate through the Universities data one by one, that gets called by the render below
  const Item = itemData => {

    const { id, title, subtitle, icon, selected, onSelect } = itemData;

    /* DEBUGGING
    var image = PATH_SEARCH;
    const imageURL = {url:image};  
    console.log("Props " + this.props);
    console.log("Props ID " + id);
    console.log("Icon Path " + icon);
    console.log("Title" + title); */

    return (
      <TouchableOpacity
        style={[
          styles.item,
          { backgroundColor: selected ? Colors.interPassBlue : Colors.interPassDarkBlue },
        ]}
        onPress={() => {
          props.navigation.navigate({
            routeName: 'Faculties',
            params: {
              universityId: title
            }
            //onSelect(id)
          });
        }}
      >
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <Image source={icon} style={styles.icon} />
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>{title}</Text>
            {/* <Text style={styles.address}>{subtitle}</Text> */}
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.topSection}>
        <Text style={styles.topSectionText}>
          Universities
            </Text>
      </View>
      <View style={styles.middleSection}>
        <Text style={styles.middleSectionText}>
          Scroll down to find the University of your choice.
          </Text>
      </View>
      <FlatList
        style={styles.flatListSection}
        data={uniData}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            title={item.university}
            // subtitle={item.faculty}
            icon={item.icon}
            selected={!!selected.get(item.items)}
            onSelect={onSelect}
          />
        )}
        keyExtractor={item => item.id}
        extraData={selected}
      />
    </SafeAreaView>
  );

}

// HomeScreen.navigationOptions = {
//   header: {
//     style: { shadowColor: 'transparent' },
//   },
// };

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.interPassDarkBlue,
  },
  topSection: {
    //flexGrow: 1,
    // flex: 1,

    height: 90,
    backgroundColor: Colors.interPassDarkBlue,
    alignItems: 'flex-start',
    paddingTop: 30,
  },
  topSectionText: {
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 10,
    fontSize: 26,
    color: '#fff',
  },
  middleSection: {
    //flexGrow: 1,
    height: 60,
    backgroundColor: Colors.interPassDarkBlue,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 10,
  },
  middleSectionText: {
    marginTop: 5,
    marginLeft: 10,
    fontSize: 14,
    //fontWeight: 'bold',
    color: Colors.interPassYellow,
  },
  flatListSection: {
    flexGrow: 4,
  },
  bottomSection: {
    flexGrow: 1,
    backgroundColor: '#FD909E',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  title: {
    // backgroundColor: '#0f1b29',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'left',
  },
  row: {
    borderColor: '#f1f1f1',
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  iconContainer: {
    alignItems: 'center',
    // backgroundColor: '#feb401',
    borderColor: '#feaf12',
    borderRadius: 25,
    borderWidth: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    height: 50,
    width: 50,
  },
  icon: {
    //tintColor: '#fff',
    height: 48,
    width: 48,
    overflow: "hidden",
  },
  info: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
    justifyContent: 'center',
  },
  items: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  }
});

export default HomeScreen;

