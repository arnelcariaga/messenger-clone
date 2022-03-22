import React from "react";
import { View, ImageBackground, TouchableOpacity } from "react-native";
import { Avatar, ListItem, Icon, Badge, Text } from "react-native-elements";
import { useFonts, Roboto_500Medium } from "@expo-google-fonts/roboto";

function ActivePeopleList({ item }) {
  let [fontsLoaded] = useFonts({
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <ListItem key={item.id.toString()} containerStyle={{ paddingTop: 5 }}>
      <View>
        <Avatar
          source={{ uri: item.avatar_url + "?img=" + item.name }}
          rounded
        />
        <Badge
          status="success"
          containerStyle={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: -4,
            justifyContent: "flex-end",
          }}
          badgeStyle={{
            borderWidth: 2,
            width: 12,
            height: 12,
            borderRadius: 25,
          }}
        />
      </View>
      <ListItem.Content>
        <ListItem.Title style={{ fontFamily: "Roboto_500Medium" }}>
          {item.name}
        </ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );
}

export default React.memo(ActivePeopleList);
