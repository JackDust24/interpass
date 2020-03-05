/*jshint esversion: 6 */

/* FOR Showing Promotions */

import React, { Component, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    View,
    FlatList,
    Dimensions,
    Image,
    Text,
} from 'react-native';
import Colors from '../constants/Colors';

// Promotion image to load.
const image = require('../images/InterPass-Promo2.jpg');

// Get the width and height of the device
const { width, height } = Dimensions.get("window");


export default function PromosScreen() {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.topSection}>
                <Text style={styles.topSectionText}>Promotions</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image}
                    resizeMode='contain'
                    source={image}
                />
            </View>

        </View>
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
        alignItems: 'center',
        paddingTop: 15,
    },
    topSectionText: {
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 10,
        fontSize: 24,
        color: '#fff',
    },
    middleSection: {
        //flexGrow: 1,
        flex: 2,
        backgroundColor: Colors.interPassDarkBlue,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop: 10,
    },
    middleSectionText: {
        marginTop: 5,
        marginLeft: 20,
        fontSize: 16,
        //fontWeight: 'bold',
        color: 'white',
        lineHeight: 20,
    },
    contactInfoText: {
        marginTop: 5,
        // marginLeft: 60,
        fontSize: 20,
        // fontWeight: 'bold',
        color: 'white',
        lineHeight: 20,
        left: '25%',
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
    imageContainer: {
        alignItems: 'center',
        // backgroundColor: '#feb401',
        borderColor: '#feaf12',
        borderRadius: 25,
        borderWidth: 3,
        margin: 5,
        // padding: 20,
        justifyContent: 'center',
        height: height,
        width: width - 10,
        //left: '10%',
        padding: 5,
        // flex: 1,
        flex: 1,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    image: {
        position: 'relative',
        paddingLeft: 20,

        paddingRight: 0,
        flex: 1,
        // //    resizeMode: 'cover',
        //            aspectRatio: 0.7,
        maxHeight: undefined,
        maxWidth: undefined,

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