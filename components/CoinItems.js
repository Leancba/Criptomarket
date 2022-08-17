import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const CoinItems = ({coin}) => {
  return (
    <View style = {styles.ContainerItem}>
        <View style = {styles.coinName} >
            <Image style = {styles.image} source = {{uri : coin.image}} />
            <View style = {styles.containerName}>
            <Text style = {styles.text} > {coin.name} </Text>
            <Text style = {styles.textSymbol}> {coin.symbol} </Text>
            </View>
        </View>
      <View>
      <Text style = {styles.text}>$ {coin.current_price} </Text>
      <Text style = {[styles.pricePercentage, coin.price_change_percentage_24h > 0 ? styles.priceUp : styles.priceDown]} > {coin.price_change_percentage_24h} </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    ContainerItem: {
        backgroundColor: '#121212',
        paddingTop: 15,
        flexDirection : 'row',
        justifyContent: 'space-between',
        flex: 1
    },
    coinName: {
        flexDirection : 'row'
    },
    image : {
        width: 30,
        height: 30
    },
    text: {
        color: '#FFFFFF'
    },
    textSymbol: {
        color: '#434343',
        textTransform: 'uppercase'
    },
    containerName: {
        marginLeft: 10
    },
    pricePercentage: {
        textAlign: 'right'
    },
    priceUp: {
        color : 'green'
    },
    priceDown: {
        color : 'red'
    },
    textPrice : {
        color : 'FFF',
        textAlign: "right"
    }

})

export default CoinItems