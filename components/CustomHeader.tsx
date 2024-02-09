import { Text, View, StyleSheet, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors'


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
    }

})

export default CustomHeader