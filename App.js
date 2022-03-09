import { StyleSheet, Text, View, Image } from "react-native";
import Header from "./components/Header";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Chats from "./components/Chats";
import Status from "./components/Status";
import Calls from "./components/Calls";
import Camera from "./components/Camera";
import { Entypo } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatDetails from "./components/ChatDetails";

const Tab = createMaterialTopTabNavigator();

export function TabNavContainer() {
  return (
    <>
      {/* <NavigationContainer> */}
      <Header />
      <Tab.Navigator
        // screenOptions={{
        //   tabBarLabelStyle: {
        //     fontSize: 14,
        //     fontWeight: "700",
        //   },
        //   tabBarItemStyle: {},
        //   tabBarStyle: { backgroundColor: "#212f35" },
        // }}
        tabBarOptions={{
          activeTintColor: "#128C7E",
          inactiveTintColor: "#809099",
          // showIcon: true,
          // pressColor: "#9BC9E2",
          // scrollEnabled: false,
          indicatorStyle: {
            backgroundColor: "#128C7E",
            height: 3,
          },
          // tabStyle: {
          //   backgroundColor: "#212f35",
          // },
          style: {
            backgroundColor: "#212f35",
          },
          labelStyle: { fontSize: 14, fontWeight: "700" },
        }}
      >
        <Tab.Screen
          name="camera"
          options={{
            tabBarIcon: () => (
              <Entypo name="camera" size={24} color="#809099" />
            ),
            tabBarLabel: () => {
              return null;
            },
          }}
          component={Chats}
        />
        <Tab.Screen name="CHATS" component={Chats} />
        <Tab.Screen name="STATUS" component={Status} />
        <Tab.Screen name="CALLS" component={Calls} />
      </Tab.Navigator>
      {/* </NavigationContainer> */}
    </>
  );
}

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <View style={styles.container}>
        {/* <Tab.Screen
      name="camera"
      component={Camera}
      options={{
        tabBarIcon: () => (
          <Entypo name="camera" size={24} color="#809099" />
        ),
        tabBarLabel: () => {
          return null;
        },
      }}
      style={styles.camera}
    /> */}
        <NavigationContainer>
          <Stack.Navigator initialRouteName="chatList">
            <Stack.Screen
              options={{ headerShown: false }}
              name="TabNavContainer"
              component={TabNavContainer}
            />
            <Stack.Screen
              name="ChatDetails"
              component={ChatDetails}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212f35",
    paddingTop: 20,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#212f35",
  },
  Headertext: {
    fontWeight: "bold",
    padding: 16,
    fontSize: 22,
    color: "#809099",
    fontWeight: "600",
  },
  searchLogo: {
    width: 20,
    height: 20,
  },
  camera: {
    position: "absolute",
    top: 60,
  },
});
