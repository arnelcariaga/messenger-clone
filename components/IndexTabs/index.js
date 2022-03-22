import React from "react";
import ChatsListHeader from "./../ChatsList/ChatsListHeader";
import ChatsListScreen from "../ChatsList/ChatsList";
import PeopleListHeaderScreen from "../PeopleList/PeopleListHeader";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon, Text } from "react-native-elements";

const Tab = createBottomTabNavigator();

function IndexTabs() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { borderTopWidth: 0 },
        tabBarIcon: ({ focused, size }) => {
          let iconName;

          if (route.name === "ChatsList") {
            iconName = "chatbubble";
          } else if (route.name === "PeopleListHeader") {
            iconName = "people-sharp";
          }
          return (
            <Icon
              type="ionicon"
              name={iconName}
              size={size}
              color={focused ? "#0b7cfd" : "#a3aab2"}
            />
          );
        },
        tabBarLabel: ({ focused, color }) => {
          if (route.name === "ChatsList") {
            return (
              <Text
                style={{
                  color: focused ? "#0b7cfd" : "#a3aab2",
                  fontSize: 13,
                  fontFamily: "Roboto_400Regular",
                }}
              >
                Chats
              </Text>
            );
          } else {
            return (
              <Text
                style={{
                  color: focused ? "#0b7cfd" : "#a3aab2",
                  fontSize: 13,
                  fontFamily: "Roboto_400Regular",
                }}
              >
                People
              </Text>
            );
          }
        },
        tabBarLabelPosition: "below-icon",
      })}
    >
      <Tab.Screen
        name="ChatsList"
        component={ChatsListScreen}
        options={{
          header: () => <ChatsListHeader />,
          tabBarBadge: 3,
          tabBarBadgeStyle: {
            fontWeight: "700",
            backgroundColor: "#fb3c32",
            borderWidth: 2.5,
            borderColor: "#fff",
            fontSize: 13,
          },
        }}
      />
      <Tab.Screen
        name="PeopleListHeader"
        component={PeopleListHeaderScreen}
        options={{
          headerShown: false,
          tabBarBadge: "99+",
          tabBarBadgeStyle: {
            color: "#30bc42",
            fontWeight: "700",
            backgroundColor: "#e6f8e8",
            fontSize: 13,
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default React.memo(IndexTabs);
