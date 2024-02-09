import { Link } from 'expo-router'
import Colors from '../constants/Colors'
import { BottomSheetBackdrop, BottomSheetModal, useBottomSheet, useBottomSheetModal } from '@gorhom/bottom-sheet'
import React, { forwardRef, useCallback, useMemo } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'

const BottomSheet = forwardRef<BottomSheetModal>((props, ref)=> {
    const snapPoints = useMemo(()=> ['50%'], [])
    const renderBackdrop = useCallback( (props: any)=> <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props}/>, [])
    const {dismiss} = useBottomSheetModal();
  return (
    <BottomSheetModal
        backgroundStyle={styles.background}
        handleIndicatorStyle={{display: 'none'}}
        backdropComponent={renderBackdrop}
        overDragResistanceFactor={0}
        ref={ref}
        snapPoints={snapPoints}
    >
        <View style={styles.contentContainer}>
            <View style={styles.toggle}>
                <TouchableOpacity style={styles.toggleActive}>
                    <Text style={styles.activeText}>
                        Dilvery
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.toggleInActive}>
                    <Text style={styles.InActiveText}>
                        Pickup
                    </Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.subHeader}>Your Location</Text>
            <Link href={'/'} asChild>
                <View>
                    <TouchableOpacity>
                        <View style={styles.item}>
                            <Ionicons name='location-outline' size={20} color={Colors.meduim}/>
                            <Text style={{flex: 1}}>Current Location</Text>
                            <Ionicons name='chevron-forward' size={20} color={Colors.primary}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </Link>
            <Text style={styles.subHeader}>Arrival Time</Text>
            <TouchableOpacity>
                <View style={styles.item}>
                    <Ionicons name='stopwatch-outline' size={20} color={Colors.meduim}/>
                    <Text style={{flex: 1}}>Now</Text>
                    <Ionicons name='chevron-forward' size={20} color={Colors.primary}/>
                </View>
            </TouchableOpacity>
                    
            <TouchableOpacity onPress={()=>dismiss()} style={styles.button}>
                <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
        </View>
    </BottomSheetModal>
  )
})

const styles = StyleSheet.create({
    background: {
        backgroundColor: Colors.lightGray,
        borderRadius: 0
    },
    contentContainer: {

    },
    toggle: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        marginBottom: 30
    },
    toggleActive:{
        backgroundColor: Colors.primary,
        borderRadius: 30,
        paddingHorizontal: 30,
        paddingVertical: 4,
    },
    activeText: {
        color: '#fff'
    },
    toggleInActive:{
        paddingHorizontal: 20,
        paddingVertical: 4
    },
    InActiveText: {
        color: Colors.primary
    },

    subHeader:{
        fontWeight: '600',
        margin: 16,
        marginBottom: 6
    },
    item:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        padding: 16,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd'
    },
    button:{
        backgroundColor: Colors.primary,
        padding: 16,
        margin: 16,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold'
    }
})

export default BottomSheet