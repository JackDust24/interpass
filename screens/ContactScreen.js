/*jshint esversion: 6 */
/* This is screen for to contact Interpass */


import React, { Component, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    View,
    FlatList,
    Image,
    Text,
    Clipboard,
    Linking,
} from 'react-native';

import Colors from '../constants/Colors';

export default function ContactScreen() {

    return (
        <View style={styles.mainContainer}>
            <View style={styles.topSection}>
                <Text style={styles.topSectionText}>Contact Us</Text>
            </View>
            <View style={styles.middleSection}>
            {/* <TouchableOpacity> */}
            <ScrollView>
                <Text style={styles.middleSectionText}>🔥ฉีกทุกข้อจำกัดการเรียน 🔥</Text>
                <Text style={styles.middleSectionText}>📣เตรียมพร้อมสำหรับ TCAS ทั้ง INTER และหมอรอบ 1</Text>
                <Text style={styles.middleSectionText}>🌟New Unlimited Inter Package</Text>
                <Text style={styles.middleSectionText}>📌 เรียนได้ไม่อั้นทุกคอร์ส ทุกที่ ทุกเวลา</Text>
                <Text style={styles.middleSectionText}>IELTS / SAT / CU-TEP / TU-GET / BMAT / SAT Subject Test</Text>
                <Text style={styles.middleSectionText}>>😮 เลือกเรียนได้ตามใจ จัดเต็ม 22 คอร์สทั้ง Inter และหมอ รวมมูลค่าคอร์สเรียน และกิจกรรมกว่า 400,000 บาท</Text>
                <Text style={styles.middleSectionText}>👍 สะดวกเรียนที่บ้าน หรือที่สาขาก็ได้ สะดวกสบายผ่านระบบ New S.E.L.F.</Text>
                <Text style={styles.middleSectionText}>😍 เลือก Package ได้เองตามที่ต้องการ พร้อม Service สูงสุด 11 รายการ</Text>
                <Text></Text>
                <Text style={styles.middleSectionText}>แพ็กเกจที่ออกแบบมาอย่างดี การันตีความสำเร็จ‼️</Text>
                <Text style={styles.middleSectionText}>✅SET A : เรียนไม่อั้น 6 เดือน เพียง 26,500.-</Text>
                <Text style={styles.middleSectionText}>✅SET B : เรียนไม่อั้น 1 ปี เพียง 46,500.-</Text>
                <Text style={styles.middleSectionText}>✅SET C : เรียนไม่อั้น 3 ปี เพียง 66,500.- มี Personal Coach ดูแล 3 ปีเต็ม ร่วมกันทำ Inter Planner วางแผนการเรียนอย่างมีทิศทาง พร้อมให้คำปรึกษาการทำ Portfolio</Text>
                <Text></Text>
                <View>
                    <Text style={styles.contactInfoText}>สอบถามข้อมูลเพิ่มเติมได้ที่</Text>
                    <Text style={styles.contactInfoText} onPress={()=>Clipboard.setString('Interpass ทุกสาขา')}>🏢 : Interpass ทุกสาขา</Text>
                    <Text style={styles.contactInfoText} onPress={()=>Clipboard.setString('m.me/interpassinstitute')}>📤 : m.me/interpassinstitute</Text>
                    {/* <TouchableOpacity
                     onPress={()=>{this.dialCall(0899964256)}}> */}
                    <Text onPress={()=>{Linking.openURL('tel:0899964256');}} style={styles.contactInfoText}>📞 : 089-9964256</Text>
                    {/* </TouchableOpacity> */}
                    <Text onPress={()=>{Linking.openURL('tel:0899923965');}} style={styles.contactInfoText}>📞 : 089-9923965</Text>
                    <Text style={styles.contactInfoText} onPress={()=>Clipboard.setString('@InterPass')}>Line : @InterPass</Text>
                </View>
                {/* </TouchableOpacity> */}
                     </ScrollView>
             </View>
        </View>

    );
}

//   ContactScreen.navigationOptions = {
//     title: 'Contact',
//   };

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
        fontSize: 12,
        //fontWeight: 'bold',
        color: 'white',
        lineHeight: 15,
    },
    contactInfoText: {
        marginTop: 5,
        // marginLeft: 60,
        fontSize: 15,
        // fontWeight: 'bold',
        color: 'white',
        lineHeight: 18,
        left: '10%',
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
    }
});


