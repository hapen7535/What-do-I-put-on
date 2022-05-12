import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LotsOfStyles = () => {

    return(
        <View style={styles.container}>
            <Text style={styles.bigGreen}>Big Green</Text>
            <Text style={styles.bigBlue}>Big Blue</Text>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        marginTop: 150,
        alignItems: 'center'
    },
    bigGreen: {
        color: '#86E57F',
        fontWeight: 'normal',
        fontSize: 50,
    },
    bigBlue: {
        color: 'blue',
        fontSize: 50,
        fontWeight: 'bold'
    },
});

export default LotsOfStyles;