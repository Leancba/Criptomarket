import { View, Text, FlatList, StyleSheet, TextInput, StatusBar } from 'react-native'
import React, {useEffect, useState, } from 'react'

import CoinItems from './components/CoinItems'

const App = () => {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  const [refresh, setRefresh] = useState(false)

  const loadData = async () => {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      const data = await res.json()
      setCoins(data)
      
  }

  useEffect(() => {
    loadData()
  }, [] )

  return (
    <View style = {styles.container}>
      <StatusBar backgroundColor='#141414' />
      <View style = {styles.header}>
        <Text style = {styles.title} >Cripto - Market</Text>
        <TextInput style = {styles.searchInput} 
        placeholder= "Search a coin"
        placeholderTextColor={'#858585'}
        onChangeText={text => setSearch(text)}
        
        />
      </View>
      <FlatList
        style= {styles.list}
        data={coins.filter(
          (coin) => 
              coin.name.includes(search)
              )}
        renderItem= {({item}) => {
          return <CoinItems coin = {item} />
        }}
        
        showsVerticalScrollIndicator= {false}
        refreshing = {refresh}
        onRefresh= { async () =>{
          setRefresh(true)
          await loadData()
          setRefresh(false)
        } }
      /> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#141414',
    alignItems: 'center',
    flex: 1
  },
  title : {
    color: '#fff',
    marginTop: 10,
    fontSize: 20
  },
  list: {
    width : '90%'

  },
  header : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',

  },
  searchInput: {
    color : '#FFF',
    borderBottomColor: '#4657CE',
    borderBottomWidth: 1,
    width: '40%',
    textAlign: 'center'
  }
})

export default App