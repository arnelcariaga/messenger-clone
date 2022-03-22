import React from "react";
import { View, ImageBackground, TouchableOpacity } from "react-native";
import { Avatar, Button, Icon, Badge, Text } from "react-native-elements";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";

function UsersStoriesList({ item }) {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View
      style={{
        flex: 1,
        padding: 6,
      }}
    >
      <TouchableOpacity activeOpacity={0.5}>
        <ImageBackground
          source={{
            uri: item.avatar_url + "?img=" + item.name,
          }}
          style={{
            height: 215,
          }}
          borderRadius={15}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(0,0,0,0.4)",
              borderRadius: 15,
              padding: 8,
            }}
          >
            {item.id === 1 ? (
              <View style={{ flex: 1, justifyContent: "space-between" }}>
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderTopEndRadius: 25,
                    borderBottomEndRadius: 25,
                    borderTopLeftRadius: 25,
                    borderBottomLeftRadius: 25,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#fff",
                  }}
                >
                  <Icon
                    type="ionicon"
                    name="add-sharp"
                    size={30}
                    color="#000"
                  />
                </View>

                <Text
                  style={{ color: "#fff", fontFamily: "Roboto_400Regular" }}
                  numberOfLines={3}
                >
                  Add to Story
                </Text>
              </View>
            ) : (
              <View
                style={{
                  justifyContent: "space-between",
                  flex: 1,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Avatar
                    source={{
                      uri: item.avatar_url + "?img=" + item.name + item.id,
                    }}
                    avatarStyle={{
                      borderRadius: 50,
                      margin: 4,
                    }}
                    containerStyle={{
                      width: 45,
                      height: 45,
                      borderWidth: 2,
                      borderRadius: 25,
                      borderColor: "#137eee",
                    }}
                  />
                  <Badge
                    status="error"
                    value={Math.floor(Math.random(2, 49) * 10)}
                    containerStyle={{
                      backgroundColor: "rgba(0,0,0,0.4)",
                      width: 18,
                      height: 18,
                      borderRadius: 50,
                    }}
                    badgeStyle={{
                      backgroundColor: "transparent",
                      borderWidth: 0,
                    }}
                    textStyle={{
                      lineHeight: 15,
                      fontFamily: "Roboto_400Regular",
                    }}
                  />
                </View>
                <Text
                  style={{ color: "#fff", fontFamily: "Roboto_400Regular" }}
                  numberOfLines={3}
                >
                  {item.name}
                </Text>
              </View>
            )}
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}

export default React.memo(UsersStoriesList);
