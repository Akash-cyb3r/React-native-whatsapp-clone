import React from "react";
import { View, Text, ScrollView, StyleSheet, Alert } from "react-native";
import ChatCard from "./ChatCard";
import { MaterialIcons } from "@expo/vector-icons";

function Chats({ navigation }) {
  let data = [
    {
      image: require("../assets/download.jpeg"),
      name: "Akash",
      message: "enim ad minim veniam, quis",
      time: "3:04 PM",
    },
    {
      image: require("../assets/image1.jpeg"),
      name: "Name1",
      message: "nisi ut aliquip ex ea commodo ",
      time: "4:44 AM",
    },
    {
      image: require("../assets/image2.jpeg"),
      name: "Akash2",
      message: "dolore eu fugiat nulla pariatus",
      time: "2:00 AM",
    },
    {
      image: require("../assets/image3.jpeg"),
      name: "alexa",
      message: "ex ea commodo consequ",
      time: "3:83 PM",
    },
    {
      image: require("../assets/image4.jpeg"),
      name: "Siri",
      message: "occaecat cupidatat non proide",
      time: "9:34 AM",
    },
    {
      image: require("../assets/image5.jpeg"),
      name: "Cortana",
      message: " ipsum dolor sit amet, consectetur adipiscing ",
      time: "5:54 PM",
    },
    {
      image: require("../assets/image1.jpeg"),
      name: "Akash5",
      message: "unknown typesetter in the 15th century",
      time: "4:34 AM",
    },
    {
      image: require("../assets/image2.jpeg"),
      name: "Akash2",
      message: "dolore eu fugiat nulla pariatus",
      time: "2:00 AM",
    },
    {
      image: require("../assets/image3.jpeg"),
      name: "alexa",
      message: "ex ea commodo consequ",
      time: "3:83 PM",
    },
    {
      image: require("../assets/image4.jpeg"),
      name: "Siri",
      message: "occaecat cupidatat non proide",
      time: "9:34 AM",
    },
    {
      image: require("../assets/image5.jpeg"),
      name: "Cortana",
      message: " ipsum dolor sit amet, consectetur adipiscing ",
      time: "5:54 PM",
    },
    {
      image: require("../assets/image1.jpeg"),
      name: "Akash5",
      message: "unknown typesetter in the 15th century",
      time: "4:34 AM",
    },
  ];
  function onPressChat() {
    navigation.navigate("ChatDetails");
  }
  return (
    <>
      <View style={styles.chatContent}>
        <ScrollView>
          {data.map((data, index) => (
            <ChatCard data={data} key={index} onPressChat={onPressChat} />
          ))}
        </ScrollView>
      </View>
      <View style={styles.chatIcon}>
        <MaterialIcons
          name="chat"
          size={24}
          color="#fff"
          onPress={() => onPressChat()}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  chatContent: {
    paddingTop: 10,
    backgroundColor: "#111b20",
    flex: 1,
  },
  chatIcon: {
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

export default Chats;
