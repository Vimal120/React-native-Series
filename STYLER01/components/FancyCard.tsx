import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image 
        source={require('../Images/TajMahal.png')}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa Mahal</Text>
          <Text style={styles.cardLabel}>Pink City, jaipur</Text>
          <Text style={styles.cardDescription}>The Hawa Mahal is a palace in the pink city of Jaipur, india. Built from 
            red and pink sanstone, it is on the edge of the City palace.
          </Text>
          <Text style={styles.cardFooter}>12 K.M. Away</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
      textAlign:'center',
      margin:8,
      fontSize: 20,
      fontWeight:'bold'
    },
    card:{
      backgroundColor: '#DB1A5A',
      height:360,
      width:380,
      marginVertical:12,
      marginHorizontal:18,
      borderTopLeftRadius:5,
      borderTopRightRadius:5
    },
    cardElevated:{
      elevation:10,
      shadowOffset: {
        width:2,
        height:2
      }
    },
    cardImage:{
      height:200,
      width:380,
      marginBottom: 8,
      borderTopLeftRadius:5,
      borderTopRightRadius:5
    },
    cardBody:{
     flex:1,
     flexGrow:1,
     paddingHorizontal:12
    },
    cardTitle:{
      color:'#ffffff',
      fontSize:22,
      fontWeight:'bold',
      marginBottom:4
    },
    cardLabel:{
      color:'#ffffff',
      fontSize:16,
      marginBottom: 6
    },
    cardDescription:{
      color:'#2F363F',
      fontSize:13,
      marginBottom: 12,
      flexShrink:1,
    },
    cardFooter:{
      color:'#ffffff'
    },

})