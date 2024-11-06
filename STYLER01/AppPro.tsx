import React from 'react'

import {

    View,
    Text,
    StyleSheet,
    useColorScheme,
} from 'react-native'

function AppPro(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark'
    return(
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.blackText : styles.whiteText}>
                Hello Bro!
            </Text>
        </View>
    )
}

//Css practise
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    whiteText:{
        color: '#D62229',
        fontSize: 50,
        borderWidth: 5,
        borderColor: 'blue',
        padding:20,
        borderRadius: 5
    },
    blackText: {
        color: '#000000'
    }


})

export default AppPro;