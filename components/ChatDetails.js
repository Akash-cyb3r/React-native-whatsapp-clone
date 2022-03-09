import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

function ChatDetails({ navigation }) {
  var width = Dimensions.get("window").width;
  var height = Dimensions.get("window").height;
  var contentWidth = width - 100;
  var chatField = width - 70;
  const styles = StyleSheet.create({
    chatDetails: {
      backgroundColor: "#000",
      flex: 1,
      flexDirection: "column",
      // justifyContent: "space-between",
    },
    chatDetailheader: {
      height: 70,
      backgroundColor: "#212f35",
      padding: 12,
      alignItems: "center",
      flexDirection: "row",
      width: width,
    },
    profileImage: {
      width: 40,
      height: 40,
      borderRadius: 50,
    },
    headerContent: {
      justifyContent: "space-between",
      backgroundColor: "#212f35",
      flexDirection: "row",
      width: contentWidth,
      alignItems: "center",
      marginLeft: 10,
    },
    name: {
      fontSize: 18,
      color: "#e7e7e7",
      fontWeight: "bold",
    },
    status: {
      fontSize: 14,
      color: "#e7e7e7",
      fontWeight: "normal",
    },
    iconContent: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: 120,
    },
    inputContainer: {
      width: width,
      padding: 10,
      flexDirection: "row",
      paddingLeft: 6,
      position: "absolute",
      bottom: 0,
    },
    chatField: {
      backgroundColor: "#212f35",
      height: 48,
      borderRadius: 26,
      paddingHorizontal: 15,
      alignItems: "center",
      flexDirection: "row",
      width: chatField,
      marginRight: 8,
    },
    input: {
      height: 30,
      color: "#b9b9b9",
      fontSize: 16,
      marginLeft: 15,
      width: 180,
    },
    textInput: {
      height: 30,
      color: "#b9b9b9",
      fontSize: 16,
      marginLeft: 15,
      width: 245,
    },
    chatIconContainer: {
      flexDirection: "row",
      width: 90,
      justifyContent: "space-between",
      alignItems: "center",
    },
    mic: {
      height: 48,
      width: 48,
      borderRadius: 100,
      backgroundColor: "#13a982",
      justifyContent: "center",
      alignItems: "center",
    },
    messageContent: {
      paddingVertical: 10,
      paddingHorizontal: 6,
      paddingBottom: 70,
    },
    messageSent: {
      backgroundColor: "#128C7E",
      marginVertical: 4,
      padding: 6,
      paddingHorizontal: 15,
      borderRadius: 8,
      borderTopRightRadius: 0,
      alignSelf: "flex-end",
    },
    messageRecived: {
      backgroundColor: "#212f35",
      marginVertical: 4,
      padding: 6,
      paddingHorizontal: 15,
      borderRadius: 8,
      borderTopLeftRadius: 0,
      alignSelf: "flex-start",
    },
    messageTime: {
      fontSize: 12,
      color: "#d7d7d7",
      fontWeight: "normal",
      textAlign: "right",
      marginTop: 4,
    },
  });

  const [isText, setText] = useState(false);
  const [message, setMessage] = useState([]);
  const [typedMessage, setTypedMessage] = useState("");
  const scrollViewRef = useRef();

  function messageText(e) {
    if (e.length > 0) {
      setText(true);
      setTypedMessage(e);
    } else {
      setText(false);
    }
  }
  useEffect(() => {
    fetch("http://192.168.0.103:5050/message")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message.message);
      });
  }, []);

  function sendMessage() {
    console.log(
      "data0",
      typedMessage,
      JSON.stringify({ message: typedMessage })
    );
    fetch("http://192.168.0.103:5050/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ message: typedMessage }),
    })
      .then(setTypedMessage(""))
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      });
  }

  return (
    <View style={styles.chatDetails}>
      <View style={styles.chatDetailheader}>
        <AntDesign
          name="arrowleft"
          size={24}
          color="#e7e7e7"
          onPress={() => navigation.goBack()}
        />
        <Image
          source={require("../assets/image1.jpeg")}
          style={styles.profileImage}
        />
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.name}>AKash</Text>
            <Text style={styles.status}>online</Text>
          </View>
          <View style={styles.iconContent}>
            <FontAwesome name="video-camera" size={22} color="#e7e7e7" />
            <FontAwesome name="phone" size={22} color="#e7e7e7" />
            <Entypo name="dots-three-vertical" size={22} color="#e7e7e7" />
          </View>
        </View>
      </View>
      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({ animated: true })
        }
      >
        <View style={styles.messageContent}>
          {message &&
            message.map((message) =>
              message.sent ? (
                <View style={[styles.messageSent, { alignItems: "flex-end" }]}>
                  <Text style={{ color: "#fff", fontSize: 16 }}>
                    {message.sent}
                  </Text>
                  <Text style={styles.messageTime}>2:30 PM</Text>
                </View>
              ) : (
                <View style={styles.messageRecived}>
                  <Text style={{ color: "#fff", fontSize: 16 }}>
                    {message.recive}
                  </Text>
                  <Text style={styles.messageTime}>2:30 PM</Text>
                </View>
              )
            )}
        </View>
      </ScrollView>
      <View style={styles.inputContainer}>
        <View style={styles.chatField}>
          <AntDesign name="smile-circle" size={22} color="#748991" />
          <TextInput
            style={isText ? styles.textInput : styles.input}
            underlineColorAndroid="transparent"
            placeholder="Message"
            placeholderTextColor="#748991"
            autoCapitalize="none"
            onChangeText={messageText}
            selectionColor="#13a982"
            value={typedMessage}
          ></TextInput>
          <View style={styles.chatIconContainer}>
            <FontAwesome name="paperclip" size={22} color="#748991" />
            {!isText && (
              <>
                <FontAwesome name="rupee" size={22} color="#748991" />
                <FontAwesome name="camera" size={18} color="#748991" />
              </>
            )}
          </View>
        </View>
        <TouchableOpacity
          style={styles.mic}
          onPress={() => (isText ? sendMessage() : "")}
        >
          {!isText ? (
            <FontAwesome name="microphone" size={20} color="#fff" />
          ) : (
            <Ionicons name="ios-send-sharp" size={20} color="#fff" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ChatDetails;
