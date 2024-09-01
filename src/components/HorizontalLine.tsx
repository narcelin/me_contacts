// HorizontalLine.js
import React from "react";
import { View, StyleSheet } from "react-native";

const HorizontalLine = ({
  color = "#ddd",
  thickness = 1,
  marginVertical = 10,
}) => {
  return (
    <View
      style={[
        styles.line,
        { backgroundColor: color, height: thickness, marginVertical },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  line: {
    width: "100%",
  },
});

export default HorizontalLine;
