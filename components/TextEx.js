import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';

const TextExample = () => {
    const [titleText, setTitleText] = useState("텍스트 실습");
    const bodyText = "Text Practice";

    const onPressTitle = () => {
        setTitleText("Text 눌림");
    };

    return(
        <Text style={styles.baseText}>
            <Text style={styles.titleText} onPress={onPressTitle}>
                {titleText}
                {"\n"}
            </Text>
            <Text numberOfLines={5}>{bodyText}</Text>
        </Text>
    );
};

const styles = StyleSheet.create({
    baseText: {
        marginTop: 150,
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 50,
    }
});

export default TextExample;