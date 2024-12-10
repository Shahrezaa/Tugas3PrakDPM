import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

const ButtonFollow = () => {
  return (
    <View>
      <TouchableOpacity style={styles.Tombol}>
        <Text style={styles.Ikut}>Ikuti</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonFollow;

const styles = StyleSheet.create({
  Tombol: {
    backgroundColor: "#5684CA",
    width: 210,
    height: 51,
    justifyContent: "center",
    marginLeft: 90,
    borderRadius: 10,
    marginTop: 30,
  },
  Ikut: {
    color: "white",
    fonstSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
