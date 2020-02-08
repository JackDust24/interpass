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
import data from '../data/universities.js'; // JSON file includes the data

const basketIcon = require('../images/basket.png');
const chulaIcon = require('../images/ChulalongkornUniversity-Logo.png');
let PATH_SEARCH = '../images/';

  const HomeScreen = (props) => {

      // super(props);
  
      console.log("Check Props = " + this.props)

    const [selected, setSelected] = React.useState(new Map());
    
      const onSelect = React.useCallback(
        id => {
          const newSelected = new Map(selected);
          newSelected.set(id, !selected.get(id));
    
          setSelected(newSelected);
        },
        [selected],
      );

      const Item = ({ id, title, subtitle, icon, selected, onSelect }) => {

        ///props = Item

        var image = PATH_SEARCH;
        const imageURL = {url:image};
        //import urlImage from imageURL;
        
        console.log("Props " + this.props);
        console.log("Props ID " + id);


      // let iconPath = require({$image});
      console.log("Icon Path " + icon);
      console.log("Title" + title);
      
      
        return (
          <TouchableOpacity 
            onPress={() => 
              props.navigation.navigate('Faculties')
              //onSelect(id)
            }
            style={[
              styles.item,
              { backgroundColor: selected ? '#0063A7' : '#1B3D6D' },
            ]}
          >
            <View style={styles.row}>
              <View style={styles.iconContainer}>
                  <Image source={icon} style={styles.icon} />
              </View>
              <View style={styles.info}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.address}>{subtitle}</Text>
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
            data={data}
            renderItem={({ item }) => (
              <Item
                id={item.uniId}
                title={item.university}
                subtitle={item.faculty}
                icon={item.icon}
                selected={!!selected.get(item.items)}
                onSelect={onSelect}
              />
            )}
            keyExtractor={item => item.uniId}
            extraData={selected}
          />
        </SafeAreaView>
      );
  
}

HomeScreen.navigationOptions = {
  title: 'InterPASS',
  // headerStyle:{ backgroundColor: '#FFF'},
  headerTitleStyle:{ fontSize: 24, marginTop: -35, color: '#FFF', justifyContent: 'center'},
  headerStyle: {
    backgroundColor: '#1B3D6D',
  },  
};



const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#1B3D6D',
  },
  topSection: {
    flexGrow: 1,
    backgroundColor: '#1B3D6D',
    alignItems: 'flex-start',
  },
  topSectionText: {
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 10,
    fontSize: 30,
    color: '#fff',
  },
  middleSection: {
    flexGrow: 1,
    backgroundColor: '#1B3D6D',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  middleSectionText: {
    marginTop: 5,
    marginLeft: 10,
    fontSize: 16,
    //fontWeight: 'bold',
    color: '#FFD100',
  },
  bottomSection: {
    flexGrow: 3,
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

