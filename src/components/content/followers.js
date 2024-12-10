import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Pengikut = () => {
  return (
    <View>
      <Text style={styles.followers}>0 Pengikut</Text>
    </View>
  );
};

export default Pengikut;

const styles = StyleSheet.create({
  followers: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 280,
    fontWeight: "medium",
  },
});
