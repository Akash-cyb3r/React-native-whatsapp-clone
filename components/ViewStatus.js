import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

function ViewStatus({ data }) {
  return (
    <View style={styles.viewStatus}>
      <Image source={data.image} style={styles.statusPreview} />
      <View style={styles.nameContent}>
        <Text style={styles.statusName}>{data.name}</Text>
        <Text style={styles.subText}>{data.time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  statusPreview: {
    width: 55,
    height: 55,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#747474",
  },
  viewStatus: {
    flexDirection: "row",
    marginVertical: 10,
  },
  statusName: {
    color: "#b9b9b9",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 4,
    letterSpacing: 0.6,
  },
  nameContent: {
    marginLeft: 15,
    justifyContent: "center",
  },
  subText: {
    fontSize: 14,
    color: "#747474",
    letterSpacing: 0.2,
    fontWeight: "normal",
  },
});

export default ViewStatus;
