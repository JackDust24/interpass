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

// Colours and Data are for the default colours, while data is for the Universities data
import Colors from '../constants/Colors';
import data from '../data/InterpassData.js'; // JSON file includes the data

const FacultyScreen = props => {

  // Get the University selection, we will need this for filtering.
  const universityId = props.navigation.getParam('universityId');
  const selectedId = data.find(data => data.university === universityId);
  console.log('SelectedId = ' + selectedId.university);

  // Create the filtered array for pushing all the faculties in that University into an array
  var facultyData = [];

  const filterFacultyByUni = data.filter(uni => uni.university === selectedId.university);
  console.log(filterFacultyByUni);
  filterFacultyByUni.map(Uni => {
    console.log('Uni - ' + Uni);
    facultyData.push(Uni);
  });

  // Sometimes there are more than one faculty, so we will have one array for the faculty names
  var facultyNames = [];
  // We don't want to add more than one faculty of the same name, so we will add a record if that faculty is unique
  var facultyFilteredData = [];

  facultyData.map(Uni => {
    console.log(facultyNames.includes(Uni.faculty) >= 1);
    const isAlreadyInList = facultyNames.includes(Uni.faculty) >= 1;
    {
      isAlreadyInList ?
        console.log("Already in list" + Uni.faculty)
        : facultyFilteredData.push(Uni) &&
        facultyNames.push(Uni.faculty)
    }
  });

  // Debugging
  // console.log("Universities Array = " + facultyData);

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

  // Iterate through the Faculties data one by one, that gets called by the render below
  const Item = itemData => {

    const { id, uni, faculty, icon, selected, onSelect } = itemData;

    return (
      <TouchableOpacity
        style={[
          styles.item,
          { backgroundColor: selected ? Colors.interPassBlue : Colors.interPassDarkBlue },
        ]}
        onPress={() => {
          props.navigation.navigate({
            routeName: 'Majors',
            params: {
              id: uni,
              facultyId: faculty
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
              style={styles.title}>{faculty}</Text>
            {/* <Text style={styles.address}>{subtitle}</Text> */}
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
          numberOfLines={2}
          style={styles.topSectionText}>
          Faculties of {selectedId.university}
        </Text>
      </View>
      <View style={styles.middleSection}>
        <Text style={styles.middleSectionText}>
          Scroll down to find the Faculty of your choice.
        </Text>
      </View>
      <FlatList
        data={facultyFilteredData}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            uni={item.university}
            faculty={item.faculty}
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

// Stylesheet
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

export default FacultyScreen;
