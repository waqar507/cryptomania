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
    Image,
    FlatList
} from 'react-native';
import CoinInfo from './coin-info';

//import Icon from 'react-native-vector-icons/MaterialIcons';

export default class CoinMain extends Component {
    render() {
        var items = [
            {
                'pair': 'trx',
                'pricebtc': 0.00042,
                'pricedollar': 0.003,
                'vol': 6331,
                'change': 24

            },
            {
                'pair': 'xlm',
                'pricebtc': 0.00048,
                'pricedollar': 0.045,
                'vol': 6381,
                'change': 15

            }
        ];

        // let coindetails = <FlatList data={items}
        //     renderItem={(item) =>
        //         <CoinInfo pair={item.pair} pricebtc={item.pricebtc} />
        //     } 
        //     keyExtractor={(item) => item.pair}
        //     ItemSeparatorComponent={() => 
        //     <View style={{height:0.5,backgroundColor:'black'}}/>
        //     } />

        let coindetails=items.map((item,i)=><CoinInfo key={i} pair={item.pair} pricebtc={item.pricebtc}/>)

        return (
            <View style={styles.container}>
                <View style={styles.navBar}>
                    <Text style={styles.navText}>Markets</Text>
                    <View style={styles.navItem}>
                        <Text style={styles.navText}>search bar</Text>
                    </View>
                </View>
                <View style={styles.coinstats}>
                    <Text style={styles.navText}>Pair/Vol</Text>
                    <Text style={styles.navText}>Last Price</Text>
                    <Text style={styles.navText}>24h Chg%</Text>
                </View>
                <View style={styles.body}>
                    {coindetails}
                </View>
                <View style={styles.tabBar}></View>
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
        backgroundColor: '#3c3c3c',
        alignItems: 'center',
        justifyContent: 'center'

    },
    navText: {
        color: 'white',

    },
    navItem: {
        flexDirection: 'row',
        position: 'absolute',
        right: 10
    },
    tabBar: {
        height: 50,
        backgroundColor: '#3c3c3c',

    },
    body: {
        flex: 1
    },
    coinstats: {
        height: 35,
        backgroundColor: '#3c3c3c',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10

    }
});