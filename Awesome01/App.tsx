import React from 'react'

import {
  View,
  Text,
  Image, ScrollView, TextInput
} from 'react-native'

const getFullName =(
  firstName: String,
  lastName: String,
 ) => {
  return firstName+ ' ' + lastName+'' ;
};


const Cat =() =>{
  return <Text>Hi! there I am {getFullName('Vim','kamal')}! </Text>

};

// export default Cat;

const Yakuja = () => {
  return (
    <View>
      <Text 
      style={{
        textAlign:'center',
      }}
      >Spring</Text>
      <TextInput 
      style ={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'red',
        margin: 10,
    }}
    defaultValue="Please write Something here!"
    />
    </View>
  );
};


const Sof =() => {
  return (
    <Text>Hello g mai bhi idher</Text>
  )
}

type DogProps = {
  name: String;
};

const Dog = (props: DogProps)=>{
  return (
    <View>
    <Text>Hi! there are you looking for {props.name}.</Text>
  </View>
  )
}
const balle =() => {
  return (
    <View>
      <Text> Hello i am calling</Text>
      <Sof />
      <Sof />
      <Sof />
      <Yakuja />
      <Dog name="dilli" />
    </View>
  );
};




const CatProp =()=>{
  return (
    <View>
      <Image
      source={{
        uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
      }}
      style = {{ height: 100, width: 100

      }}
       />
       <Dog name='billi' />
    </View>
  )
}

export default CatProp;