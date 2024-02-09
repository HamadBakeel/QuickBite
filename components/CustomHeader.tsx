import { Text, View, StyleSheet, Image, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {  TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors'
import { Link } from 'expo-router'

const SearchBar = ()=>{
   return (

       <View style={styles.searchContainer}>
        <View style={styles.searchSection}>
            <View style={styles.searchField}>
                <Ionicons name='ios-search' size={20} color={Colors.meduim} style={styles.searchIcon}/>
                <TextInput placeholder='Resturants, Gorceries, dishes' style={styles.input}/>
            </View>
            <Link href={'/'} asChild>
                <TouchableOpacity style={styles.optionButton}>
                    <Ionicons name='options-outline' size={20} color={Colors.primary} style={{paddingTop: 5}}/>
                </TouchableOpacity>
            </Link>

        </View>

    </View>
    )
}

const CustomHeader = () => {
  return (
    <SafeAreaView style={styles.safeArea} >
        <View style={styles.container}>
            <View style={styles.leftSide}>
                <TouchableOpacity>
                    <Image source={require('../assets/images/bike.png')} style={styles.bike}/>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.titleContainer}>
                    <Text style={styles.title}>Delivery . now</Text>
                    <View style={styles.location}>
                        <Text style={styles.subtitle}>Riyadh, Hassan</Text>
                        <Ionicons name='chevron-down' size={20} color={Colors.primary} style={{paddingTop: 5}}/>
                    </View>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.profileButton}>
                <Ionicons name='person-outline' size={20} color={Colors.primary}/>
            </TouchableOpacity>
        </View>
        <SearchBar />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'fff'
    },
    container: {
        height: 60,
        backgroundColor: '#fff',
        gap: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    bike:{
        height: 30,
        width: 30
    },
    leftSide: {
        flexDirection: 'row',
        gap: 20
    },
    location: {
        flexDirection: 'row', 
        justifyContent: 'center',
    },
    titleContainer:{
        // flex: 1,
        alignItems: 'flex-start' 
    },
    title: {
        fontSize: 14,
        color: Colors.meduim
    },
    profileButton: {
        backgroundColor: Colors.lightGray,
        padding: 10,
        borderRadius: 50
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    searchContainer:{
        height: 60,
        backgroundColor: '#fff'
    },
    searchSection: {
        flexDirection: 'row',
        gap: 10,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    searchField: {
        flex: 1,
        backgroundColor: Colors.lightGray,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input:{
        padding: 10,
        color: Colors.meduimDark
    },
    searchIcon: {
        paddingLeft: 10
    },
    optionButton: {
        padding: 10,
        backgroundColor: 'transparent'
    },
})

export default CustomHeader