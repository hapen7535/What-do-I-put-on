import react from 'react';
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import reactnative from '../Images/reactnative.png';

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        width: 66,
        height: 58,
    },
});

const DisplayImage = () => {
    return(
        <View style={styles.container}>
        <Image
        style={styles.tinyLogo}
        source={reactnative}
        />
        <Image
        style={styles.logo}
        source={{
        uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}/>
        </View>
    );
}

export default DisplayImage;