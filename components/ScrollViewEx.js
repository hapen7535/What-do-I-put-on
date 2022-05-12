import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';

const ScrollViewEx = () => {
    return(
        <SafeAreaView style={StyleSheet.container}>
            <ScrollView>
            <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{"\n"}
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad{"\n"}
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut{"\n"}
          aliquip ex ea commodo consequat. Duis aute irure dolor in{"\n"}
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla{"\n"}
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in{"\n"}
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    text: {
        fontSize: 50,
    },
});

export default ScrollViewEx;