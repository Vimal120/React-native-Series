import { StyleSheet, Text, View, Linking, Image, TouchableOpacity} from 'react-native'
import React from 'react'

export default function ActionCard() {
  function openWebsite(webSiteLink: string){
    Linking.openURL(webSiteLink)
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new on the channel- Filmi Bihari?
          </Text>
        </View>
        <Image 
        source={require('../Images/channels4_banner.jpg')}
        style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={4} style={styles.cardDescription}>
            Just like Everytime New video reaction on 
            channel is coming on new release movies.
            This channel also gives you the inside news or gossips,
            going on in Bollywood and between celebrities.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity 
          onPress={() => openWebsite('https://www.youtube.com/@FilmiBiharii')}>
            <Text style={styles.socialLink}>
              For more <Text style={{color:'#AE1438'}}>Click here..</Text>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => openWebsite('www.linkedin.com/in/vimal-raj-94aa7a223')}>
            <Text style={styles.socialLink}>Follow me!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText:{
    fontSize:24,
    textAlign:'center',
    fontWeight:'bold',
    // marginBottom:5,
  },
  card:{
    backgroundColor:'#01CBC6',
    margin:16,
    borderRadius:4,
    height:330

  },
  elevatedCard:{
    elevation:5,
    shadowOffset:{
      width:1,
      height:1,
    },
    shadowColor:'#E74292',
    shadowOpacity:0.4
  },
  headingContainer:{
    height:40,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  headerText:{
    fontWeight:600,
    color:'white',
    fontSize:17,
  },
  cardImage:{
    height:110,
    width:366,
    marginHorizontal:6,
    borderRadius:10,
  },
  bodyContainer:{
    padding:8
  },
  cardDescription:{
    color:'#fff',
    fontSize:16
  },
  footerContainer:{
    padding:8,
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    elevation:10,
    shadowOffset:{
      height:1,
      width:1
    },
    shadowColor:'#E83350'
  },
  socialLink:{
    fontSize:18,
    color:'#000',
    backgroundColor:'#fff',
    paddingHorizontal:20,
    paddingVertical:4,
    borderRadius:6
  }
})