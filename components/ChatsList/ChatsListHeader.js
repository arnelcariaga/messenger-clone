import React from "react";
import { View } from "react-native";
import { Header, Avatar, Text, Icon, Badge } from "react-native-elements";
import { useFonts, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useDispatch } from "react-redux";
import { openNewMessageModalAction } from "../Redux/newMessageDucks";

export default function ChatsListHeader() {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
  });

  const dispatch = useDispatch();

  if (!fontsLoaded) {
    return null;
  }
  return (
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
          Chats
        </Text>
      )}
      centerContainerStyle={{
        justifyContent: "center",
      }}
      rightComponent={() => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Icon
            type="material"
            name="camera-alt"
            size={20}
            onPress={() => {}}
            iconStyle={{
              padding: 3,
            }}
            containerStyle={{
              backgroundColor: "#f5f5f5",
              padding: 5,
              borderRadius: 25,
              marginRight: 18,
            }}
          />

          <Icon
            type="ionicon"
            name="pencil-sharp"
            size={20}
            onPress={() => dispatch(openNewMessageModalAction())}
            iconStyle={{
              padding: 5,
            }}
            containerStyle={{
              backgroundColor: "#f5f5f5",
              padding: 3,
              borderRadius: 25,
            }}
          />
        </View>
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
  );
}
