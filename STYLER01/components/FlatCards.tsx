import React from 'react'

import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

export default function FlatCards(){
  return(
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.textStyle}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.textStyle}>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.textStyle}>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardFour]}>
          <Text style={styles.textStyle}>Purple</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    textAlign:'center',
    marginBottom:10,
    fontWeight: 'bold',
  },
  container:{
    flex:1,
    flexDirection:'row',
  },
  card:{
    flex:1,
    justifyContent:'center',
    height:100,
    width:100,
    margin:8,
    borderRadius:5,

  },
  cardOne:{
    backgroundColor: '#F35408',
  },
  cardTwo:{
    backgroundColor: '#7FB035',
  },
  cardThree:{
    backgroundColor: '#368DEB',
  },
  cardFour:{
    backgroundColor: '#964ED9'
  },
  textStyle:{
    textAlign:'center'
  }
})