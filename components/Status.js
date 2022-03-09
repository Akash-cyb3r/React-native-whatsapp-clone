import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ViewStatus from "./ViewStatus";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

function Status(props) {
  let statusData = [
    {
      image: require("../assets/download.jpeg"),
      name: "Akash",
      time: "Today, 3:04 PM",
    },
    {
      image: require("../assets/image1.jpeg"),
      name: "Name1",
      time: "Yesterday, 4:44 AM",
    },
    {
      image: require("../assets/image2.jpeg"),
      name: "Akash2",
      time: "Today, 2:00 AM",
    },
    {
      image: require("../assets/image3.jpeg"),
      name: "alexa",
      time: "Yesterday, 3:83 PM",
    },
    {
      image: require("../assets/image4.jpeg"),
      name: "Siri",
      time: "Today, 9:34 AM",
    },
    {
      image: require("../assets/image5.jpeg"),
      name: "Cortana",
      time: "Today, 5:54 PM",
    },
    {
      image: require("../assets/image1.jpeg"),
      name: "Akash5",
      time: "Yesterday, 4:34 AM",
    },
  ];
  return (
    <>
      <ScrollView>
        <View style={styles.status}>
          <View style={styles.userStatusContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={require("../assets/download.jpeg")}
                style={styles.statusProfile}
              />
              <AntDesign
                name="pluscircle"
                size={18}
                color="#13a985"
                style={styles.plusIcon}
              />
            </View>
            <View style={styles.statusTextContent}>
              <Text style={styles.myStatusText}>My status</Text>
              <Text style={styles.subText}>Tap to add status update</Text>
            </View>
          </View>
          <View style={styles.viewStatus}>
            <Text style={styles.viewUpdatesText}>Viewed updates</Text>

            {statusData.map((statusData, index) => (
              <ViewStatus data={statusData} key={index} />
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.editIconContainer}>
        <View style={styles.editIcon}>
          <MaterialIcons name="edit" size={24} color="white" />
        </View>
        <View style={styles.camIcon}>
          <Entypo name="camera" size={24} color="#fff" />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  status: {
    backgroundColor: "#111b20",
    padding: 15,
    flex: 1,
    position: "relative",
  },
  statusProfile: {
    width: 55,
    height: 55,
    borderRadius: 50,
  },
  userStatusContainer: {
    flexDirection: "row",
  },
  imageContainer: {
    position: "relative",
  },
  plusIcon: {
    position: "absolute",
    left: 35,
    top: 36,
  },
  myStatusText: {
    color: "#b9b9b9",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 4,
    letterSpacing: 0.6,
  },
  statusTextContent: {
    marginLeft: 15,
    justifyContent: "center",
  },
  subText: {
    fontSize: 14,
    color: "#747474",
    letterSpacing: 0.2,
    fontWeight: "normal",
  },
  viewUpdatesText: {
    paddingTop: 20,
    paddingBottom: 10,
    color: "#747474",
    fontWeight: "600",
    letterSpacing: 0.2,
  },
  editIconContainer: {
    position: "absolute",
    bottom: 15,
    right: 15,
    alignItems: "center",
  },
  editIcon: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: "#212f35",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  camIcon: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: "#13a982",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Status;
