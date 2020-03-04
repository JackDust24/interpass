/*jshint esversion: 6 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
  Image,
  Button,
  Text,
} from 'react-native';
import Colors from '../constants/Colors';

import data from '../data/InterpassData.js'; // JSON file includes the data

const MajorsScreen = props => {

  // Get the University selection, we will need this for filtering.
  const universityId = props.navigation.getParam('id');
  const selectedId = data.find(data => data.university === universityId);
  console.log('MAJ SelectedId = ' + selectedId.university);

  // Get the University selection, we will need this for filtering.
  const facultyId = props.navigation.getParam('facultyId');
  const selectedFacultyId = data.find(data => data.faculty === facultyId);
  console.log('MAJ SelectedFaculty = ' + selectedFacultyId.faculty);

  // Create the filtered array
  var majorsData = [];

  // Round and date that we will pass to the Details etc.
  let round = "";
  let roundDate = "";

  // *** Filter to incluce only the Majors for that University
  const filterMajorsByFacultyAndUni = data.filter(
    uni => uni.university === selectedId.university 
    && uni.faculty === selectedFacultyId.faculty);
  console.log(filterMajorsByFacultyAndUni);
  filterMajorsByFacultyAndUni.map(Uni => {
    console.log('Uni - ' + Uni);
    majorsData.push(Uni);

  });

  console.log('Check Majors Data - ' + majorsData);

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

      const { id, major, faculty, round, icon, selected, onSelect, item } = itemData;

      console.log('Test round pass1 - ' + faculty);

      console.log('Test round pass 2- ' + round);

      console.log('Test round pass 3- ' + major);


      return (
        <TouchableOpacity 
          style={[
            styles.item,
            { backgroundColor: selected ? Colors.interPassBlue : Colors.interPassDarkBlue },
          ]}
          onPress={() => {       
            props.navigation.navigate({routeName: 'Details',
              params: {
                selectedItem: item
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
              <Text 
              style={styles.faculty}>Faculty: {faculty}</Text>
              <Text style={styles.major}>Major: {major}</Text>
              <Text style={styles.round}>Round: {round}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    }

    return (
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.topSection}>
          <Text 
          adjustsFontSizeToFit
          // numberOfLines={2}
          style={styles.topSectionText}>
          Majors for {selectedId.faculty}
          </Text>
      </View>
      <View style={styles.middleSection}>
      <Text style={styles.middleSectionText}>
            {selectedId.university}  
        </Text>
        <Text style={styles.middleSectionText}>
          Scroll down to find the Major of your choice.
        </Text>
      </View>
        <FlatList
          data={majorsData}
          renderItem={({ item }) => (
            <Item
              id={item.id}
              faculty={item.faculty}
              major={item.major}
              round={item.rounds}
              icon={item.icon}
              selected={!!selected.get(item.items)}
              onSelect={onSelect}
              item={item}
            />
          )}
          keyExtractor={item => item.id}
          extraData={selected}
        />
      </SafeAreaView>
    );

}

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
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
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
    justifyContent: 'space-evenly',
    height: 50,
    width: 50,
    marginTop: 20,
  },
  icon: {
    //tintColor: '#fff',
    height: 48,
    width: 48,
    //paddingTop: 40,
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
  faculty: {
    // backgroundColor: '#0f1b29',
    color: Colors.interPassYellow,
    fontSize: 18,
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'left',
  },
  major: {
    // backgroundColor: '#0f1b29',
    color: '#ccc',
    fontSize: 14,
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'left',
  },
  round: {
    // backgroundColor: '#0f1b29',
    color: Colors.interPassYellow,
    fontSize: 18,
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

export default MajorsScreen;
