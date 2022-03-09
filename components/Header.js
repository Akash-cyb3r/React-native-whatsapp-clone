import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Dimensions,
  TextInput,
} from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Header(props) {
  let modalTextData = [
    "New group",
    "New broadcast",
    "Linked devices",
    "Started messages",
    "Payments",
    "Settings",
  ];
  let iconData = [
    {
      iconText: "Photos",
      iconElement: (
        <MaterialIcons name="insert-photo" size={18} color="#748991" />
      ),
    },
    {
      iconText: "Videos",
      iconElement: (
        <FontAwesome name="video-camera" size={18} color="#748991" />
      ),
    },
    {
      iconText: "Links",
      iconElement: <Feather name="link-2" size={18} color="#748991" />,
    },
    {
      iconText: "GIFs",
      iconElement: <MaterialIcons name="gif" size={20} color="#748991" />,
    },
    {
      iconText: "Audio",
      iconElement: (
        <MaterialCommunityIcons name="headphones" size={18} color="#748991" />
      ),
    },
    {
      iconText: "Documents",
      iconElement: <Ionicons name="document-text" size={18} color="#748991" />,
    },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  var width = Dimensions.get("window").width;
  var height = Dimensions.get("window").height;

  const styles = StyleSheet.create({
    header: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 16,
      backgroundColor: "#212f35",
      alignItems: "center",
    },
    headerText: {
      fontSize: 22,
      color: "#748991",
      fontWeight: "700",
    },
    headerIconContainer: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
      width: 70,
    },
    modal: {
      backgroundColor: "#212f35",
      width: 170,
      padding: 10,
      position: "absolute",
      top: 0,
      right: 0,
      elevation: 10,
    },
    modalText: {
      color: "#b9b9b9",
      marginVertical: 10,
    },
    modalOverlay: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "transparent",
    },
    threeDots: {
      width: 40,
      height: 40,
      borderRadius: 50,
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 16,
    },
    modalSearch: {
      backgroundColor: "#212f35",
      padding: 10,
      position: "absolute",
      top: 0,
      width: width,
      padding: 12,
    },
    searchIcon: {
      width: 24,
      height: 24,
      borderRadius: 50,
      alignItems: "center",
      justifyContent: "center",
    },
    input: {
      height: 30,
      color: "#b9b9b9",
      fontSize: 16,
      marginLeft: 20,
      width: width,
    },
    searchContent: {
      flexDirection: "row",
      alignItems: "center",
    },
    arrowIcon: {
      width: 40,
      height: 40,
      borderRadius: 50,
      alignItems: "center",
      justifyContent: "center",
    },
    mediaContainer: {
      padding: 12,
      marginTop: 15,
      flexDirection: "row",
      flexWrap: "wrap",
    },
    mediaIconsOverlay: {
      backgroundColor: "#28343d",
      alignSelf: "flex-start",
      padding: 6,
      borderRadius: 16,
      flexDirection: "row",
      alignItems: "center",
      paddingLeft: 10,
      paddingRight: 10,
      marginRight: 10,
      marginBottom: 10,
    },
    mediaIconText: {
      color: "#fff",
      marginLeft: 6,
    },
  });

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>WhatsApp</Text>
        <View style={styles.headerIconContainer}>
          <TouchableHighlight
            onPress={() => setSearchOpen(true)}
            underlayColor="#7c7c7c8c"
            style={styles.searchIcon}
          >
            <Ionicons
              name="search-sharp"
              size={24}
              color="#748991"
              style={styles.searchIcon}
            />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => setModalVisible(true)}
            underlayColor="#7c7c7c8c"
            style={styles.threeDots}
          >
            <Entypo name="dots-three-vertical" size={20} color="#748991" />
          </TouchableHighlight>
        </View>
      </View>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
        <View style={styles.modal}>
          {modalTextData.map((text, index) => (
            <Text style={styles.modalText} key={index}>
              {text}
            </Text>
          ))}
        </View>
      </Modal>
      <Modal
        animationType="none"
        transparent={true}
        visible={isSearchOpen}
        onRequestClose={() => {
          setSearchOpen(false);
        }}
      >
        <View style={styles.modalSearch}>
          <View style={styles.searchContent}>
            <TouchableHighlight
              onPress={() => setSearchOpen(false)}
              underlayColor="#7c7c7c8c"
              style={styles.arrowIcon}
            >
              <AntDesign name="arrowleft" size={24} color="#748991" />
            </TouchableHighlight>

            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Search..."
              placeholderTextColor="#748991"
              autoCapitalize="none"
              // onChangeText={this.handleEmail}
              selectionColor="#13a982"
            />
          </View>
          <View style={styles.mediaContainer}>
            {iconData.map((iconData, index) => (
              <TouchableHighlight
                // onPress={() => setSearchOpen(false)}
                underlayColor="#fff"
                key={index}
                // style={styles.arrowIcon}
              >
                <View style={styles.mediaIconsOverlay}>
                  {iconData.iconElement}
                  <Text style={styles.mediaIconText}>{iconData.iconText}</Text>
                </View>
              </TouchableHighlight>
            ))}
          </View>
        </View>
      </Modal>
    </>
  );
}

export default Header;
