/*jshint esversion: 6 */

/* CAN DELETE IN LATER VERSION */

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
    console.log('Uni - ' + Uni)
    majorsData.push(Uni);

  });

  console.log('Check Majors Data - ' + majorsData)

  // console.log("Majors Array = " + majorsData.university, majorsData.faculty, majorsData.major);


  // Now filter array so that if there are more than one round we duplicate this round
  // 1. Create a loop which is a copy of the rounds.
  // 2. Map through the majors array and if rounds more than 1, then add this record again.

  var majorsDataWithRounds = [];
  majorsData.map(Uni => {
   //  console.log('majorsData - ' + Uni.major, Uni.university)
 
    let indexCount = 0;

    var earlyItem = Object.assign({}, Uni);
    console.log('Check Copy - ' + earlyItem);

    const haveEarlyRound = checkIfRoundDate("earlyRound", earlyItem, Uni.earlyRound, indexCount);

    if (haveEarlyRound) {
      console.log('There is an early round');
      indexCount ++;
      earlyItem.roundType = "Early Round";
      earlyItem.index = indexCount;
      earlyItem.roundDate = Uni.earlyRound;
      majorsDataWithRounds.push(earlyItem);
      console.log('Check Early - ' + earlyItem.major, 'Index - ' + earlyItem.index, 'Round - ' + earlyItem.roundType, earlyItem.roundDate)
      // console.log('Check Early MajorsData - ' + (JSON.stringify(majorsDataWithRounds, null, 2)));
    }

    var round1Item = Object.assign({}, Uni);
    console.log('Check Copy - ' + round1Item);
    const haveRound1 = checkIfRoundDate("round1", Uni, Uni.dateRound1, indexCount);

    if (haveRound1) {
      console.log('There is a round 1');
      indexCount ++;
      round1Item.roundType = 'Round 1';
      round1Item.index = round1Item.id + '-' + indexCount;
      round1Item.roundDate = Uni.dateRound1;
      majorsDataWithRounds.push(round1Item);

    }


    var round2Item = Object.assign({}, Uni);
    console.log('Check Copy - ' + round2Item);
    const haveRound2 = checkIfRoundDate("round2", Uni, Uni.dateRound2, indexCount);

    if (haveRound2) {
      console.log('There is a round 2')
      indexCount ++;
      round2Item.roundType = 'Round 2';
      round2Item.index = round2Item.id + '-' + indexCount;
      round2Item.roundDate = Uni.dateRound2;
      majorsDataWithRounds.push(round2Item);
      console.log('Check Round 2 - ' + round2Item.major, 'Index - ' + round2Item.index, 'Round - ' + round2Item.roundType, round2Item.roundDate)
    }

    var round3Item = Object.assign({}, Uni);
    console.log('Check Copy - ' + round3Item);
    const haveRound3 = checkIfRoundDate("round3", Uni, Uni.dateRound3, indexCount);

    if (haveRound3) {
      console.log('There is a Round 3')
      indexCount ++;
      round3Item.roundType = 'Round 3';
      round3Item.index = round3Item.id + '-' + indexCount;
      round3Item.roundDate = Uni.dateRound3;
      majorsDataWithRounds.push(round3Item);
      console.log('Check Round 3 - ' + round3Item.major, 'Index - ' + round3Item.index, 'Round - ' + round3Item.roundType, round3Item.roundDate)
    }

    var round4Item = Object.assign({}, Uni);
    console.log('Check Copy - ' + round4Item);
    const haveRound4 = checkIfRoundDate("round4", Uni, Uni.dateRound4, indexCount);
 
    if (haveRound4) {
      console.log('There is a Round 4')
      indexCount ++;
      round4Item.roundType = 'Round 4';
      round4Item.index = round4Item.id + '-' + indexCount;
      round4Item.roundDate = Uni.dateRound4;
      majorsDataWithRounds.push(round4Item);
    }

    var round5Item = Object.assign({}, Uni);
    console.log('Check Copy - ' + round5Item);
    const haveRound5 = checkIfRoundDate("round5", Uni, Uni.dateRound5, indexCount);
    if (haveRound5) {
      console.log('There is a Round 5')
      indexCount ++;
      round5Item.roundType = 'Round 5';
      round5Item.index = round5Item.id + '-' + indexCount;
      round5Item.roundDate = Uni.dateRound5;
      majorsDataWithRounds.push(round5Item);
  
    }

    var round6Item = Object.assign({}, Uni);
    console.log('Check Copy - ' + round6Item);
    const haveRound6 = checkIfRoundDate("round6", Uni, Uni.dateRound6, indexCount);
    if (haveRound6) {
      console.log('There is a Round 6')
      indexCount ++;
      round6Item.roundType = 'Round 6';
      round6Item.index = round6Item.id + '-' + indexCount;
      round6Item.roundDate = Uni.dateRound6;
      majorsDataWithRounds.push(round6Item);

    }

    var round7Item = Object.assign({}, Uni);
    console.log('Check Copy - ' + round7Item);
    const haveRound7 = checkIfRoundDate("round7", Uni, Uni.dateRound7, indexCount);
    if (haveRound7) {
      console.log('There is a Round 7')
      indexCount ++;
      round7Item.roundType = 'Round 7';
      round7Item.index = round7Item.id + '-' + indexCount;
      round7Item.roundDate = Uni.dateRound7;
      majorsDataWithRounds.push(round7Item);

    }

    var round8Item = Object.assign({}, Uni);
    console.log('Check Copy - ' + round8Item);
    const haveRound8 = checkIfRoundDate("round8", Uni, Uni.dateRound8, indexCount);
    if (haveRound8) {
      console.log('There is a Round 8')
      indexCount ++;
      round8Item.roundType = 'Round 8';
      round8Item.index = round8Item.id + '-' + indexCount;
      round8Item.roundDate = Uni.dateRound8;
      majorsDataWithRounds.push(round8Item);
    }
    
  });

  console.log('Check majorsDataWithRounds - ' + (JSON.stringify(majorsDataWithRounds, null, 2)));

  // If has round value we will index this and add the details to the record in the DB.
  // We have the parameters of the 
  function checkIfRoundDate(round, Uni, roundValue, indexCount) {

    let roundContainsDate;

    if (roundValue !== "" && typeof roundValue !== "undefined") {
      roundContainsDate = true;
      console.log("Contains a Value " + round, roundValue);
      return true;
    } else {
      roundContainsDate = false;
      console.log("Does not contain a Value " + round, roundValue);
      return false;
    }

    // if (roundContainsDate) {
    //   Uni.index = indexCount;
    //   Uni.roundDate = roundValue;
    //   // Uni.index = index;
    //   console.log("roundContainsDate " + round, roundValue);
    //   switch(round) {
    //     case 'earlyRound':
    //       console.log("earlyRound");
    //       Uni.roundType = 'Early Round';
    //       break;
    //     case 'round1':
    //       Uni.roundType = 'Round 1';
    //       break;
    //     case 'round2':
    //       Uni.roundType = 'Round 2';
    //       break;
    //     case 'round3':
    //       Uni.roundType = 'Round 3';
    //       break;
    //     case 'round4':
    //       Uni.roundType = 'Round 4';
    //       break;
    //     case 'round5':
    //       Uni.roundType = 'Round 5';
    //       break;
    //     case 'round6':
    //       Uni.roundType = 'Round 6';
    //     default:
    //       //console.log("default");
    //       Uni.roundType = '';
    //       break;
    //   }
    //   return true
    // }
    // // Does not contain a value
    // return false
  };

  // majorsData.sort
  // console.log('Check MajorsData - ' + (JSON.stringify(majorsDataWithRounds, null, 2)));


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

      const { id, major, faculty, round, icon, selected, roundTest, onSelect, item } = itemData;

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
          data={majorsDataWithRounds}
          renderItem={({ item }) => (
            <Item
              id={item.id}
              faculty={item.faculty}
              major={item.major}
              round={item.roundType}
              roundTest={item.roundType}
              icon={item.icon}
              selected={!!selected.get(item.items)}
              onSelect={onSelect}
              item={item}
            />
          )}
          keyExtractor={item => item.index}
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
    height: 50,
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
