import React from "react";
import { View, Text } from "react-native";

const ViewBoxes = () => {
  return (
    <View
      style={{
        flexDirection: "column",
        height: 100,
        marginTop: 50
      }}
    >
      <View style={{ backgroundColor: "blue", flex: 1 }} />
      <View style={{ backgroundColor: "red", flex: 0.3 }} />
      <Text>View 실습</Text>
    </View>
  );
};

export default ViewBoxes;