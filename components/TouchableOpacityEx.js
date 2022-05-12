import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from "react-native";

const TouchableOpacityEx = () => {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.countContainer}>
                <Text>Count : {count}</Text>
            </View>
            <TouchableOpacity
            style={styles.button}
            onPress={onPress}>
                <Text>Press</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
    },
    countContainer: {
      alignItems: "center",
    }
  });
  
  export default TouchableOpacityEx;