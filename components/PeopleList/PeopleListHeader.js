import React from "react";
import { Header, Avatar, Text, Icon, Badge } from "react-native-elements";
import { useFonts, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ActivePeopleScreen from "./ActivePeople";
import PeopleListScreen from "./PeopleList";

const Tab = createBottomTabNavigator();

function PeopleListHeader() {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <Header
        leftComponent={() => {
          return (
            <Avatar
              rounded
              size={40}
              source={{
                uri: "https://source.unsplash.com/random",
              }}
            >
              <Badge
                status="error"
                value={2}
                containerStyle={{
                  position: "absolute",
                  top: -8,
                  right: -4,
                  backgroundColor: "#fff",
                  borderRadius: 25,
                  padding: 2.3,
                }}
                badgeStyle={{
                  backgroundColor: "#fb3c32",
                }}
                textStyle={{
                  fontWeight: "700",
                  lineHeight: 15,
                }}
              />
            </Avatar>
          );
        }}
        placement="left"
        centerComponent={() => (
          <Text style={{ fontFamily: "Roboto_700Bold", fontSize: 23 }}>
            People
          </Text>
        )}
        centerContainerStyle={{
          justifyContent: "center",
        }}
        rightComponent={() => (
          <Icon
            type="font-awesome"
            name="address-book"
            size={18}
            onPress={() => {}}
            iconStyle={{
              padding: 5,
            }}
            containerStyle={{
              backgroundColor: "#f5f5f5",
              padding: 3,
              borderRadius: 25,
            }}
          />
        )}
        rightContainerStyle={{
          justifyContent: "center",
        }}
        backgroundColor="#fff"
        barStyle="dark-content"
        containerStyle={{
          paddingHorizontal: 20,
          borderBottomWidth: 0,
        }}
      />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            position: "absolute",
            top: 0,
            elevation: 0,
            borderTopWidth: 0,
            paddingHorizontal: 0,
            height: 50,
            marginTop: 5,
          },
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            if (route.name === "PeopleList") {
              return (
                <Text
                  style={{
                    fontWeight: "bold",
                    color: focused ? "#000" : "gray",
                    width: 100,
                    textAlign: "center",
                  }}
                >
                  STORIES (27)
                </Text>
              );
            } else {
              return (
                <Text
                  style={{
                    fontWeight: "bold",
                    color: focused ? "#000" : "gray",
                    width: 100,
                    textAlign: "center",
                  }}
                >
                  ACTIVE (254)
                </Text>
              );
            }
          },
          tabBarActiveBackgroundColor: "#f5f5f5",
          tabBarItemStyle: {
            borderRadius: 50,
            marginHorizontal: 23,
            marginVertical: 10,
          },
        })}
      >
        <Tab.Screen
          name="PeopleList"
          component={PeopleListScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="ActivePeople"
          component={ActivePeopleScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </>
  );
}

export default PeopleListHeader;
