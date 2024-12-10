import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Photo = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: "https://s3-alpha.figma.com/checkpoints/RXS/oRY/4OAtgwzcnb5vmtY0/52767_23934.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWCRBMIFMVJ%2F20241208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241208T120000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=487e97d032bd41f6b2f2e4127e5003d6bf3ec5125b0318434f720ca320211044",
          }}
        />
      </View>
    </View>
  );
};

export default Photo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  image: {
    width: 250,
    height: 250,
  },
});
