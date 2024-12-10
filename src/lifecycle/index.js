import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFollowing: false,
      followers: 0,
    };
  }

  componentDidMount() {
    console.log("Lifecycle Component Mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isFollowing !== this.state.isFollowing) {
      console.log(
        `Status berubah: ${prevState.isFollowing} -> ${this.state.isFollowing}`
      );
    }
    if (prevState.followers !== this.state.followers) {
      console.log(
        `Jumlah pengikut berubah: ${prevState.followers} -> ${this.state.followers}`
      );
    }
  }

  componentWillUnmount() {
    console.log("Lifecycle Component Will Unmount");
  }

  handleFollow = () => {
    this.setState((prevState) => ({
      isFollowing: !prevState.isFollowing,
      followers: prevState.isFollowing ? 0 : 1,
    }));
  };

  render() {
    const { isFollowing, followers } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.followers}>{followers} Pengikut</Text>
        <TouchableOpacity style={styles.Tombol} onPress={this.handleFollow}>
          <Text style={styles.Ikut}>
            {isFollowing ? "Batal Ikuti" : "Ikuti"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Lifecycle;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
    marginTop: 260,
  },
  followers: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "500",
    color: "black",
  },
  Tombol: {
    backgroundColor: "#5684CA",
    width: 210,
    height: 51,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  Ikut: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
