/*jshint esversion: 6 */

import React, { Component, useState }  from 'react';
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
import Colors from '../constants/Colors';

import data from '../data/InterpassData.js'; // JSON file includes the data
/* FOR TESTING PURPOSES
const basketIcon = require('../tableHeaderScoress/basket.png');
const chulaIcon = require('../images/ChulalongkornUniversity-Logo.png');
let PATH_SEARCH = '../images/'; */

  const HomeScreen = (props) => {

    // Set up the arrays for filtering the data
    var universitiesNames = [];
    var uniData = [];
  
    // Debuggging
    data.map(Uni => (
      console.log('Uni - ' + Uni.university)
      ));
    
    // Filter the json data to display the 
    data.map(Uni => { 
      console.log(universitiesNames.includes(Uni.university) >= 1);
      const isAlreadyInList = universitiesNames.includes(Uni.university) >= 1;
      { isAlreadyInList ? 
        console.log("Already in list" + Uni.university) 
        : uniData.push(Uni)
        universitiesNames.push(Uni.university)
      }
    }
    );

        console.log("universitiesNames Array = " + universitiesNames);

        console.log("Universities Array = " + uniData);

      // data.map((item, key) => (
      //   universities.key = item.university
      //   universities.va = item.university

      // ));

    const [selected, setSelected] = React.useState(new Map());
    
      const onSelect = React.useCallback(
        id => {
          const newSelected = new Map(selected);
          newSelected.set(id, !selected.get(id));
    
          setSelected(newSelected);
        },
        [selected],
      );

      const Item = itemData => {

        const { id, title, subtitle, icon, selected, onSelect } = itemData

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
              props.navigation.navigate({routeName: 'Faculties',
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
//   headerTitle: 'InterPASS',
//   // headerStyle:{ backgroundColor: '#FFF'},
//   headerTitleStyle:{ fontSize: 24, marginTop: -35, color: '#FFF', justifyContent: 'center'},
//   headerStyle: {
//     backgroundColor: Colors.interPassDarkBlue,
//   },  
// };



const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.interPassDarkBlue,
  },
  topSection: {
    //flexGrow: 1,
    height: 60,
    backgroundColor: Colors.interPassDarkBlue,
    alignItems: 'flex-start',
  },
  topSectionText: {
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10,
    fontSize: 30,
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
    fontSize: 16,
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
    height: 50,
    width: 50,
  },
  icon: {
    //tintColor: '#fff',
    height: 48,
    width: 48,
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
  },
  address: {
    // backgroundColor: '#0f1b29',
    color: '#ccc',
    fontSize: 14,
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'left',
  },
  total: {
    width: 80,
  },
  date: {
    fontSize: 12,
    marginBottom: 5,
  },
  price: {
    color: '#1cad61',
    fontSize: 25,
    fontWeight: 'bold',
  }
});

export default HomeScreen;

