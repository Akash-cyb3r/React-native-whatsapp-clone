import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";

function ChatCard({ data, isCall, navigation, onPressChat }) {
  return (
    <TouchableHighlight onPress={() => onPressChat()}>
      <View
        style={styles.chatCard}
        // onPress={() => navigation.navigate("ChatDetails")}
      >
        <Image source={data.image} style={styles.profileImage} />
        <View style={styles.messageContent}>
          <Text style={styles.name}>{data.name}</Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={isCall ? styles.callMessageText : styles.messageText}
          >
            {data.message}
          </Text>
        </View>
        {!isCall ? (
          <View style={styles.timeContent}>
            <Text style={styles.time}>{data.time}</Text>
          </View>
        ) : (
          <View style={styles.callIcon}>
            {data.isVideo ? (
              <FontAwesome name="video-camera" size={20} color="#13a982" />
            ) : (
              <Ionicons name="call" size={20} color="#13a982" />
            )}
          </View>
        )}
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  chatCard: {
    padding: 12,
    backgroundColor: "#111b20",
    flexDirection: "row",
  },
  profileImage: {
    width: 55,
    height: 55,
    borderRadius: 50,
  },
  messageContent: {
    marginLeft: 15,
    justifyContent: "center",
  },
  name: {
    color: "#b9b9b9",
    fontWeight: "700",
    fontSize: 18,
    marginBottom: 1,
  },
  messageText: {
    color: "#747474",
    fontSize: 16,
    fontWeight: "500",
    width: 210,
  },
  callMessageText: {
    color: "#747474",
    fontSize: 16,
    fontWeight: "500",
    width: 280,
  },
  timeContent: {
    alignItems: "flex-end",
    justifyContent: "flex-start",
    width: 100,
  },
  time: {
    color: "#747474",
    fontSize: 14,
    fontWeight: "700",
  },
  callIcon: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ChatCard;
