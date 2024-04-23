import React from "react";
import {
    View,
    Text,
    StyleSheet,
    useColorScheme
} from 'react-native'


function appPro(): JSX.Element{
    const isDarkMode = useColorScheme() === 'dark'
    return(
<View style={[styles.container, styles.viewColor]}>
    <Text style={isDarkMode ? styles.whiteText : styles.darkText  }> Hello World </Text>
</View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    whiteText: {
        color: '#ffffff'
    },
    darkText: {
        color: '#000000'
    },
    viewColor: {
        backgroundColor: '#4682B4'
    }
})


export default appPro