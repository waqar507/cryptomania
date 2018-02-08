/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class CoinMain extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navBar}>

                    <View style={styles.navItem}>
                        <Text style={styles.navText}>Markets</Text>
                        <Text style={{}}>search bar</Text>

                    </View>

                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    navBar: {
        height: 60,
        elevation: 3,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    navText: {
        color: 'black',
        fontWeight: 'bold'
    },
    navItem:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginRight:10,
        paddingHorizontal:5
        
    }

});