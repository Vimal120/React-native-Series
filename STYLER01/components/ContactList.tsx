import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const ContactList = [
        {
            UID: 1,
            Name: "Vimal Raj",
            Status: "Active",
            ImgLocation: require("../Images/Vimal.jpg")
          },
          {
            UID: 2,
            Name: "Shweta P Waths",
            Status: "Inactive",
            ImgLocation: require("../Images/shweta.jpg")
          },
          {
            UID: 3,
            Name: "Kamal Raj",
            Status: "Busy",
            ImgLocation: require("../Images/kamal.jpg")
          },
          {
            UID: 4,
            Name: "Adarsh Kumar",
            Status: "Offline",
            ImgLocation: require("../Images/Adarsh.jpg")
          },
          {
            UID: 5,
            Name: "Anmol Kumar chandan",
            Status: "Available",
            ImgLocation: require("../Images/Anmol.jpg")
          }
    ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {ContactList.map(({UID,Name,Status,ImgLocation}) => (
            <View key={UID} style={styles.userCard}>
                <Image 
                source={ImgLocation}
                style={styles.userImage}
                />
                <Text style={styles.username}>{Name}</Text>
                <Text style={styles.userstatus}>{Status}</Text>
            </View>
        ))}
      </ScrollView>
    </View>
    
  )
}

const styles = StyleSheet.create({
    container:{},
    headingText:{},
    userCard:{},
    userImage:{
        height:100,
        width:100
    },
    username:{

    },
    userstatus:{}
})