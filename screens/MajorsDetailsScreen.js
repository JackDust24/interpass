/*jshint esversion: 6 */

import React from 'react';
import { SafeAreaView, 
  View, 
  Image,
  Text, 
  StyleSheet 
} from 'react-native';

import Colors from '../constants/Colors';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

Score = (type, min, max) => {
  this.type = type;
  this.min = min;
  this.max = max;
};

const MajorsDetailsScreen = props => {

  console.log('PRESSED');


  const selectedItem = props.navigation.getParam('selectedItem');
  // const selectedId = data.find(data => data.university === universityId);
  console.log('selectedItem = ' + Object.keys(selectedItem));

    // Create two arrays - filtered array and Main array to return
  let filteredScoresArray = [];
  let mainScoresArray = [];
  // const arraySelectedItem = [selectedItem];
  // console.log('arraySelectedItem = ' + arraySelectedItem);

  // Object.keys(selectedItem).forEach(function(key, value) {
  //   console.log('KEYS = ' + key);
  //   const addScoresToFilteredArray = key.includes("min-") >= 1 || key.includes("rec-") >= 1;
  //     { addScoresToFilteredArray ? 
  //       console.log("addScoresToFilteredArray " + key, value) &&
  //       filteredScoresArray.push(key, value)
  //       : 
  //       console.log("Did not addScoresToFilteredArray " + key, value)

  //     }    
  // });

  console.log('selectedItem dateRound8 = ' + selectedItem.dateRound8);

  console.log('selectedItem Value Min = ' + selectedItem.min_SAT_EN);
  console.log('selectedItem Value Rec = ' + selectedItem.rec_SAT_EN);

// ** Add the English ones
  checkIfScoreNeeded("English", "GPA", selectedItem.min_GPA, selectedItem.rec_GPA);
  checkIfScoreNeeded("English", "IELTS", selectedItem.min_IELTS, selectedItem.rec_IELTS);
  checkIfScoreNeeded("English", "TOEFL", selectedItem.min_TOEFL, selectedItem.rec_TOEFL);
  checkIfScoreNeeded("English", "CUTEP", selectedItem.min_CUTEP, selectedItem.rec_CUTEP);
  checkIfScoreNeeded("English", "TUGET", selectedItem.min_TUGET, selectedItem.rec_TUGET);
  checkIfScoreNeeded("English", "O-NET", selectedItem.min_O_NET, selectedItem.rec_O_NET);
  checkIfScoreNeeded("English", "GAT", selectedItem.min_GAT, selectedItem.rec_GAT);
  checkIfScoreNeeded("English", "PAT", selectedItem.min_PAT, selectedItem.rec_PAT);
  checkIfScoreNeeded("Aptitude Test", "G-SAT EN", selectedItem.min_G_SAT_EN, selectedItem.rec_G_SAT_EN);
  checkIfScoreNeeded("Aptitude Test", "G-SAT MATH", selectedItem.min_G_SAT_MATH, selectedItem.rec_G_SAT_MATH);
  checkIfScoreNeeded("Aptitude Test", "G-SAT TOTAL", selectedItem.min_G_SAT_TOTAL, selectedItem.rec_G_SAT_TOTAL);
  checkIfScoreNeeded("Aptitude Test", "SAT EN", selectedItem.min_SAT_EN, selectedItem.rec_SAT_EN);
  checkIfScoreNeeded("Aptitude Test", "SAT MATH", selectedItem.min_SAT_MATH, selectedItem.rec_SAT_MATH);
  checkIfScoreNeeded("Aptitude Test", "SAT TOTAL", selectedItem.min_SAT_TOTAL, selectedItem.rec_SAT_TOTAL);
  checkIfScoreNeeded("Aptitude Test", "CU AAT EN", selectedItem.min_CU_AAT_EN, selectedItem.rec_CU_AAT_EN);
  checkIfScoreNeeded("Aptitude Test", "CU MATH", selectedItem.min_CU_AAT_MATH, selectedItem.rec_CU_AAT_MATH);
  checkIfScoreNeeded("Aptitude Test", "CU AAT TOTAL", selectedItem.min_CU_AAT_TOTAL, selectedItem.rec_CU_AAT_TOTAL);
  checkIfScoreNeeded("Aptitude Test", "ACT MATH", selectedItem.min_ACT_MATH, selectedItem.rec_ACT_MATH);
  checkIfScoreNeeded("Science Proficiency", "MATH_II", selectedItem.min_MATH_II, selectedItem.rec_MATH_II);
  checkIfScoreNeeded("Science Proficiency", "Physics", selectedItem.min_Physics, selectedItem.rec_Physics);
  checkIfScoreNeeded("Science Proficiency", "Chemistry", selectedItem.min_Chemistry, selectedItem.rec_Chemistry);
  checkIfScoreNeeded("Science Proficiency", "Biology", selectedItem.min_Biology, selectedItem.rec_Biology);



  function checkIfScoreNeeded(type, test, minValue, recValue) {

    var object = Object.assign({});
    console.log('Check Item - ' + type, test);

    if ((minValue !== "" && typeof minValue !== "undefined" && minValue !== null) || (recValue !== "" && typeof recValue !== "undefined" && recValue !== null)) {
      console.log('There is a value');
      object.type = type;
      object.test = test;
      object.min = minValue;
      object.rec = recValue;
      console.log('Check Item - ' + object.min, object.recValue);
      mainScoresArray.push(object);
    } else {
      console.log('There is NO value');
    }
  }

  console.log('Check mainScoresArray - ' + (JSON.stringify(mainScoresArray, null, 2)));



  // const addScoresToMainArray = key.includes("min_O_NET") >= 1 || key.includes("rec_O_NET") >= 1
  // createScore = () => {
  //   let ScoreObj = {};
  //   let score = new this.Score('3', 'Hearts');
  //   console.log(score);
  // };



    // Filter through each key.
        // If key has value, add it to Filtered array.

    // const filteredArray = arraySelectedItem.filter(uni => uni.includes("min-") >= 1);
    // console.log('filteredArray = ' + filteredArray);
    // const scores = arraySelectedItem.map((score, key) => {
    //   console.log('PRESSED 2 + ' + key, score);



    //   const addScoresToFilteredArray = key.includes("min-") >= 1 || key.includes("rec-") >= 1;
    //   { addScoresToFilteredArray ? 
    //     console.log("addScoresToFilteredArray" + key, score) &&
    //     filteredScoresArray.push(key, score)
    //     : 
    //     console.log("Did not addScoresToFilteredArray" + key, score)

    //   }    
    // });

    // Filtered Array
        // If is part of English etc add to Eng Array
        // Add this to array 


  return (
    <SafeAreaView style={styles.mainContainer}>

    {/* <View style={styles.screen}>
      <Text>The Majors Detail Screen!</Text>
    </View> */}
      <View style={styles.topSection}>
        <Text 
          adjustsFontSizeToFit
            // numberOfLines={2}
          style={styles.topSectionText}>
          Roadmap
        </Text>
      </View>
      <View style={styles.subTopSection}>
        <Text style={styles.subTopSectionText}>
            Details of {selectedItem.faculty} {selectedItem.major} {selectedItem.roundType}
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image}
          source={ require('../images/Roadmap-yellow.png')}
          />
      </View>
      <View style={styles.middleSection}>
      <Text style={styles.middleSectionText}>
           {selectedItem.major} - {selectedItem.roundType}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
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
  subTopSection: {
    //flexGrow: 1,
    height: 60,
    backgroundColor: Colors.interPassDarkBlue,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 10,
  },
  subTopSectionText: {
    marginTop: 5,
    marginLeft: 10,
    fontSize: 16,
    //fontWeight: 'bold',
    color: Colors.interPassYellow,
  },
  middleSection: {
    //flexGrow: 1,
    height: 80,
    width: '100%',
    backgroundColor: Colors.interPassDarkBlue,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  middleSectionText: {
    marginTop: 5,
    marginLeft: 10,
    fontSize: 30,
    //fontWeight: 'bold',
    color: Colors.interPassYellow,
    alignItems: 'flex-end',

  },
  imageContainer: {
    height: 180,
    width: '100%',
    backgroundColor: Colors.interPassDarkBlue,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,

    // alignItems: "center", 
    // justifyContent: "center", 
  },
  image: {
    width: '40%', 
    height: '110%', 
    flex: 1,
    position: 'absolute', 
    left: '25%', 
    marginTop: 28,

  }
});

export default MajorsDetailsScreen;
