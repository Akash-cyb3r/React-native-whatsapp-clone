import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import ChatCard from "./ChatCard";
import { MaterialIcons } from "@expo/vector-icons";

function Calls(props) {
  let callData = [
    {
      image: require("../assets/download.jpeg"),
      name: "Akash",
      message: "January 28, 4:40 PM",
      isVideo: true,
    },
    {
      image: require("../assets/image1.jpeg"),
      name: "Name1",
      message: "January 27, 8:40 AM",
      isVideo: true,
    },
    {
      image: require("../assets/image2.jpeg"),
      name: "Akash2",
      message: "January 24, 12:40 PM",
      isVideo: false,
    },
    {
      image: require("../assets/image3.jpeg"),
      name: "alexa",
      message: "January 20, 6:40 AM",
      isVideo: true,
    },
    {
      image: require("../assets/image4.jpeg"),
      name: "Siri",
      message: "January 18, 2:42 PM",
      isVideo: false,
    },
    {
      image: require("../assets/image5.jpeg"),
      name: "Cortana",
      message: "January 14, 11:52 AM",
      isVideo: false,
    },
    {
      image: require("../assets/image1.jpeg"),
      name: "Akash5",
      message: "January 14, 10:22 PM",
      isVideo: true,
    },
    {
      image: require("../assets/image2.jpeg"),
      name: "Akash2",
      message: "January 10, 9:23 PM",
      isVideo: false,
    },
    {
      image: require("../assets/image3.jpeg"),
      name: "alexa",
      message: "January 10, 2:23 AM",
      isVideo: false,
    },
    {
      image: require("../assets/image4.jpeg"),
      name: "Siri",
      message: "January 9, 12:33 PM",
      isVideo: false,
    },
    {
      image: require("../assets/image5.jpeg"),
      name: "Cortana",
      message: "January 3, 2:56 PM",
      isVideo: true,
    },
    {
      image: require("../assets/image1.jpeg"),
      name: "Akash5",
      message: "January 1, 8:40 AM",
      isVideo: false,
    },
  ];
  return (
    <>
      <ScrollView>
        <View style={styles.callsContainer}>
          {callData.map((data, index) => (
            <ChatCard data={data} key={index} isCall={true} />
          ))}
        </View>
      </ScrollView>
      <View style={styles.addCallIcon}>
        <MaterialIcons name="add-call" size={24} color="#fff" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  callsContainer: {
    backgroundColor: "#111b20",
    padding: 5,
    position: "relative",
  },
  addCallIcon: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: "#13a982",
    justifyContent: "center",
    position: "absolute",
    bottom: 15,
    right: 15,
    alignItems: "center",
  },
});

export default Calls;
