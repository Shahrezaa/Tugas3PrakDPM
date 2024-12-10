import React from "react";
import { View } from "react-native";
import Navbar from "./src/components/Navbar";
import Photo from "./src/components/content/image";
import Lifecycle from "./src/lifecycle/index";

const App = () => {
  return (
    <View>
      <Navbar />
      <Photo />
      <Lifecycle />
    </View>
  );
};

export default App;
