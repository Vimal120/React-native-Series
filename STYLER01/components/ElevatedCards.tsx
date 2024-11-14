import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Horizonatal Scrolling Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.textStyle}>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.textStyle}>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.textStyle}>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.textStyle}>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.textStyle}>more....</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.textStyle}>😉</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        textAlign:'center',
        fontSize: 20,
        marginTop: 5,
        fontWeight: 'bold',
    },
    container:{
        flex:1,
        flexDirection:'row',
        padding:8
    },
    card:{
        justifyContent: 'center',
        width:100,
        height:100,
        margin: 8,
        borderRadius: 5
    },
    cardElevated:{
        backgroundColor: '#5A85A8',
    },
    textStyle:{
        textAlign:'center'
      }
})