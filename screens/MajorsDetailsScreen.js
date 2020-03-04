/*jshint esversion: 6 */

import React, { Component } from 'react';
import { SafeAreaView, 
  View, 
  Image,
  Text, 
  StyleSheet,
  ScrollView
} from 'react-native';

import Colors from '../constants/Colors';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { TouchableOpacity } from 'react-native-gesture-handler';

// Score = (type, min, max) => {
//   this.type = type;
//   this.min = min;
//   this.max = max;
// };

class MajorsDetailsScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showComponent : false,
      tableHeaderScores: ['TYPE', 'Minimum', 'Recommended'],
      tableHeaderRounds: ['Round', 'Date', 'Seats'],
      customStyleIndex: 0,
    };

    this.handleCustomIndexSelect = this.handleCustomIndexSelect.bind(this);
  }

  handleCustomIndexSelect = (index: number) => {
    //handle tab selection for custom Tab Selection SegmentedControlTab
    this.setState(prevState => ({ ...prevState, customStyleIndex: index }));
  };

  render(){
    const state = this.state;
  // const MajorsDetailsScreen = props => {
  
    const selectedItem = this.props.navigation.getParam('selectedItem');
    console.log('selectedItem = ' + Object.keys(selectedItem));
    // Create two arrays - filtered array and Main array to return
    let mainScoresArray = [];
    let englishTypeArray = [];
    let aptitudeTypeArray = [];
    let scienceTypeArray = [];

  
    console.log('selectedItem dateRound8 = ' + selectedItem.dateRound8);
    console.log('selectedItem Value Min = ' + selectedItem.min_SAT_EN);
    console.log('selectedItem Value Rec = ' + selectedItem.rec_SAT_EN);
    
    // MARK:- Collecting the scores data
    // ** Get the scores if they have a value
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
    checkIfScoreNeeded("Science Proficiency", "BMAT Section 1", selectedItem.min_BMAT_Section1, selectedItem.rec_BMAT_Section1);
    checkIfScoreNeeded("Science Proficiency", "BMAT Section 2", selectedItem.min_BMAT_Section2, selectedItem.rec_BMAT_Section2);
    checkIfScoreNeeded("Science Proficiency", "BMAT Section 3", selectedItem.min_BMAT_Section3, selectedItem.rec_BMAT_Section3);

  
    // Check if there is a value.
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

    const englishTableTitles = [];
    const englishTableData = [];
    //* Separate into different arrays depending on the type:
    const filterByEnglishType = mainScoresArray.filter(
      score => score.type === "English");
    console.log(filterByEnglishType);
    filterByEnglishType.map(score => {
      console.log('type added to English - ' + score);
      englishTypeArray.push(score);
      englishTableTitles.push(score.test);
      englishTableData.push([score.min, score.rec]);
  
    });

    console.log('Check englishTableData - ' + (JSON.stringify(englishTableData, null, 2)));

    const aptitudeTableTitles = [];
    const aptitudeTableData = [];
    const filterByAptitudeType = mainScoresArray.filter(
      score => score.type === "Aptitude Test");
    console.log(filterByAptitudeType);
    filterByAptitudeType.map(score => {
      console.log('type added to Apptitude - ' + score);
      aptitudeTypeArray.push(score);
      aptitudeTableTitles.push(score.test);
      aptitudeTableData.push([score.min, score.rec]);
  
    });
  
    console.log('Check aptitudeTableData - ' + (JSON.stringify(aptitudeTableData, null, 2)));
    console.log('aptitudeTableData - ' + aptitudeTableData.length);


    const scienceTableTitles = [];
    const scienceTableData = [];
    const filterByScienceType = mainScoresArray.filter(
      score => score.type === "Science Proficiency");
    console.log(filterByScienceType);
    filterByScienceType.map(score => {
      console.log('type added to Science - ' + score);
      scienceTypeArray.push(score);
      scienceTableTitles.push(score.test);
      scienceTableData.push([score.min, score.rec]);
  
    });

    console.log('Check scienceTableData - ' + (JSON.stringify(scienceTableData, null, 2)));
    console.log('scienceTableData - ' + scienceTableData.length);

    // Get Icon for the screen depending if data available for each test

    let image;

    if ((englishTableData.length > 0) && (aptitudeTableData.length > 0) && (scienceTableData.length > 0)) {
      console.log('IF 1');
      image = require('../images/English-Apt-Science-icon-clear.png');
    } else if ((englishTableData.length > 0) && (aptitudeTableData.length > 0)) {
      console.log('IF 2');
      image = require('../images/English-Apt-icon-clear.png');
    } else if ((englishTableData.length > 0) && (scienceTableData.length > 0)) {
      console.log('IF 3');
      image = require('../images/English-Science-icon-clear.png');
    } else if (englishTableData.length > 0) {
      console.log('IF 4');
      image = require('../images/English-icon-clear.png');
    } else {
      console.log('IF 5');
      image = require('../images/English-icon-clear.png');
    }


    // MARK:- Collecting the Rounds Information
    let roundsTitlesArray = [];
    let roundsDatesAndSeatsArray = [];

    checkIfRoundDate("Early Round", selectedItem.earlyRound, selectedItem.earlyRoundSeats);
    checkIfRoundDate("Round 1", selectedItem.dateRound1, selectedItem.dateRound1Seats);
    checkIfRoundDate("Round 2", selectedItem.dateRound2, selectedItem.dateRound2Seats);
    checkIfRoundDate("Round 3", selectedItem.dateRound3, selectedItem.dateRound3Seats);
    checkIfRoundDate("Round 4", selectedItem.dateRound4, selectedItem.dateRound4Seats);
    checkIfRoundDate("Round 5", selectedItem.dateRound5, selectedItem.dateRound5Seats);
    checkIfRoundDate("Round 6", selectedItem.dateRound6, selectedItem.dateRound6Seats);
    checkIfRoundDate("Round 7", selectedItem.dateRound7, selectedItem.dateRound7Seats);
    checkIfRoundDate("Round 8", selectedItem.dateRound8, selectedItem.dateRound8Seats);

    // Check if there is a value.
    function checkIfRoundDate(round, date, seats) {
  
      var object = Object.assign({});
      console.log('Check Round Item - ' + round, date);
  
      if (date !== "" && typeof date !== "undefined" && date !== null) {
        object.round = round;
        object.date = date;
        object.seats = seats;
        console.log('Check Round Item Added- ' + object.date, object.seats);
        roundsTitlesArray.push(object.round);
        roundsDatesAndSeatsArray.push([object.date, object.seats]);

      } else {
        console.log('There is NO value');
      }
    }

    console.log('Check Recommended Course' + selectedItem.suggestedCourses);

    let suggestedCoursesText = selectedItem.suggestedCourses.replace('\n', '<br/>');

    return (
      <SafeAreaView style={styles.mainContainer}>
  
      {/* <View style={styles.screen}>
        <Text>The Majors Detail Screen!</Text>
      </View> */}
        <View style={styles.topSection}>
          <Text 
            adjustsFontSizeToFit
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
            source={image}
            />
        </View>
        <View style={styles.middleSection}>
          <Text style={styles.middleSectionText}>
             Rounds - {selectedItem.rounds}
          </Text>
        </View>
        {/* <View style={styles.segmentedSection}> */}
          <SegmentedControlTab
          values={['Admission Requirements', 'Dates & Courses']}
          selectedIndex={state.customStyleIndex}
          onTabPress={this.handleCustomIndexSelect}
          borderRadius={0}
          tabsContainerStyle={{ height: 50, backgroundColor: '#F2F2F2' }}
          tabStyle={{
            backgroundColor: '#F2F2F2',
            borderWidth: 0,
            borderColor: 'transparent',
          }}
          activeTabStyle={{ backgroundColor: 'yellow', marginTop: 2 }}
          tabTextStyle={{ color: '#111111', fontWeight: 'bold' }}
          activeTabTextStyle={{ color: '#888888' }}
        />

        {/* Admission Requirements Section */}
        {state.customStyleIndex === 0 && (
        <ScrollView>

        <View style={styles.adminRequirementsSection}>
          <Text style={styles.adminRequirementsText}> Available Faculty Seats: {selectedItem.availableSeatsFaculty}</Text>
          <Text style={styles.adminRequirementsSubText}> * Use = Please use the score the University suggests</Text>

        </View>           
          <View style={styles.adminRequirementsSection}>
            <Text style={styles.tableSectionHeader}> ENGLISH</Text>
          </View>
          {englishTableData.length > 0 ? 
          <View style={styles.tableContainer}>
            <Table>
            <Row data={state.tableHeaderScores}
            flexArr={[1, 1, 1]} 
            style={styles.tableHeaderScores} 
            textStyle={styles.tableText}/>
              <TableWrapper style={styles.wrapper}>
              <Col data={englishTableTitles} style={styles.title} heightArr={[28,28]} textStyle={styles.tableText}/>
              <Rows data={englishTableData} flexArr={[1, 1]} style={styles.row} textStyle={styles.tableText}/>
            </TableWrapper>
            </Table>
          </View>
          :           
          <View style={styles.adminRequirementsSection}>
            <Text style={styles.emptyTable}> NOT NEEDED</Text> 
          </View>}
          <View style={styles.adminRequirementsSection}>
            <Text style={styles.tableSectionHeader}> APTITUDE TESTS</Text>
          </View>
          {aptitudeTableData.length > 0 ? 
          <View style={styles.tableContainer}>
            <Table>
            <Row data={state.tableHeaderScores}
            flexArr={[1, 1, 1]} 
            style={styles.tableHeaderScores} 
            textStyle={styles.tableText}/>
              <TableWrapper style={styles.wrapper}>
              <Col data={aptitudeTableTitles} style={styles.title} heightArr={[28,28]} textStyle={styles.tableText}/>
              <Rows data={aptitudeTableData} flexArr={[1, 1]} style={styles.row} textStyle={styles.tableText}/>
            </TableWrapper>
            </Table>
          </View>
          :           
          <View style={styles.adminRequirementsSection}>
            <Text style={styles.emptyTable}> NOT NEEDED</Text> 
          </View>}
          <View style={styles.adminRequirementsSection}>
            <Text style={styles.tableSectionHeader}> SCIENCE PROFICIENCY / BMAT</Text>
          </View>
          {scienceTableData.length > 0 ? 
          <View style={styles.tableContainer}>
          <Table>
          <Row data={state.tableHeaderScores}
          flexArr={[1, 1, 1]} 
          style={styles.tableHeaderScores} 
          textStyle={styles.tableText}/>
          <TableWrapper style={styles.wrapper}>
            <Col data={scienceTableTitles} style={styles.title} heightArr={[28,28]} textStyle={styles.tableText}/>
            <Rows data={scienceTableData} flexArr={[1, 1]} style={styles.row} textStyle={styles.tableText}/>
            </TableWrapper>
          </Table>
          </View>
          :           
          <View style={styles.adminRequirementsSection}>
            <Text style={styles.emptyTable}> NOT NEEDED</Text> 
          </View>}
          </ScrollView>
          )}

          {/* Rounds and Dates Section */}
          {state.customStyleIndex === 1 && (
        <ScrollView>

        <View style={styles.adminRequirementsSection}>
        <Text style={styles.adminRequirementsText}> Rounds and Seats </Text>
      </View>           

        {roundsTitlesArray.length > 0 ? 
        <View style={styles.tableContainer}>
          <Table>
          <Row data={state.tableHeaderRounds}
          flexArr={[1, 2, 1]} 
          style={styles.tableHeaderScores} 
          textStyle={styles.tableText}/>
            <TableWrapper style={styles.wrapper}>
            <Col data={roundsTitlesArray} style={styles.title} heightArr={[28,28]} textStyle={styles.tableText}/>
            <Rows data={roundsDatesAndSeatsArray} flexArr={[2, 1]} style={styles.row} textStyle={styles.tableText}/>
          </TableWrapper>
          </Table>
        </View>
        :           
        <View style={styles.adminRequirementsSection}>
          <Text style={styles.emptyTable}> NO ROUNDS</Text> 
        </View>}
        <View style={styles.adminRequirementsSection}>
          <Text style={styles.adminRequirementsText}> Recommended Courses</Text> 
        </View>
        <View style={styles.suggestedCourseSection}>
          <Text style={styles.suggestedCoursesText}>{selectedItem.suggestedCourses}</Text> 
        </View>
        </ScrollView>
          )}
          {/* </View> */}

      </SafeAreaView>
    );
  }
}



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
    // paddingTop: 10,
  },
  middleSectionText: {
    marginTop: 5,
    marginLeft: 10,
    fontSize: 24,
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
  },
  image: {
    width: '50%', 
    height: '100%', 
    flex: 1,
    position: 'absolute', 
    left: '25%', 
    marginTop: 28,
  },
  segmentedSection: {
    //flexGrow: 1,
    height: 30,
    width: '100%',
    backgroundColor: Colors.interPassDarkBlue,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  adminRequirementsSection: {
    //flexGrow: 1,
    height: 58,
    width: '100%',
    backgroundColor: Colors.interPassDarkBlue,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  adminRequirementsText: {  
    // height: 20,  
    color: '#f1f8ff',
    fontSize: 26,
  },
  adminRequirementsSubText: {  
    // height: 20,  
    color: Colors.interPassYellow,
    fontSize: 12,
  },
  suggestedCourseSection: {
    //flexGrow: 1,
    backgroundColor: '#f1f8ff',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1, 
    padding: 5, 
    paddingTop: 5, 
    marginLeft: 20, 
    marginRight: 20, 
    marginTop: 10, 
    padding: 20,
  },
  suggestedCoursesText: {  
    // height: 20,  
    color: Colors.interPassDarkBlue,
    fontSize: 18,
    flexWrap: 'wrap',
    lineHeight: 40,
  },
  adminRequirementsStrongText: {  
    // height: 20,  
    color: '#f1f8ff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  tableSection: {
    //flexGrow: 1,
    height: 30,
    width: '100%',
    backgroundColor: Colors.interPassDarkBlue,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  tableSectionHeader: {
    // alignItems: 'flex-end',
    height: 30,
    // width: '100%',
    // backgroundColor: Colors.interPassDarkBlue,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: 10,
    // left: '42%',
    color: '#f1f8ff',
  },
  tableContainer: { 
    flex: 1, 
    padding: 5, 
    paddingTop: 5, 
    marginLeft: 20, 
    marginRight: 20, 
    marginTop: 10, 
    backgroundColor: '#fff',
  },
  tableHeaderScores: {  
    height: 60,  
    backgroundColor: '#f1f8ff',
  },
  tableText: {  
    height: 20,  
    backgroundColor: '#f1f8ff',
    textAlign: 'center', // <-- the magic
    textAlignVertical: "top",
    flexWrap: 'wrap',
  },
  emptyTable: {
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: 10,
    color: '#DF342A',
    fontSize: 20,
    fontWeight: 'bold',
  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa'},
  row: {  height: 28  },
});

export default MajorsDetailsScreen;
