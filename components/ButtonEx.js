import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const Separator = () => (
    <View style={styles.separator}/>
); 

const ButtonExample = () => (
    <SafeAreaView style={styles.container}>
        <View>
            <Text style={styles.title}>
                button
            </Text>
            <Button
            title="Press"
            onPress={()=>Alert.alert('Button pressed')}/>
        </View>
        <Separator/>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
    }
});

export default ButtonExample;