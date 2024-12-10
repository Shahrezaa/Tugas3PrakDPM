import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const Navbar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Feather name="search" size={20} />
      </TouchableOpacity>
      <Text style={styles.text}>Tugas P3</Text>
      <TouchableOpacity>
        <Feather name="menu" size={24} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "lightgray",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 35,
  },
  text: {
    fontSize: 24,
    color: "black",
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    marginHorizontal: 10,
  },
});

export default Navbar;
