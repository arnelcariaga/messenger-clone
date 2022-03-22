import React from "react";
import { FlatList, TouchableOpacity, Animated } from "react-native";
import { Button, Icon, Text, ListItem, Avatar } from "react-native-elements";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import UsersStoriesListChat from "./UsersStoriesListChat";
import { useDispatch } from "react-redux";
import { openSearchChatsAction } from "../Redux/seachChatsDucks";

const data = [
  {
    id: 1,
    name: "Arnel Cariaga Hiciano Jr.",
    avatar_url: "https://i.pravatar.cc/300",
    subtitle: "Vice President",
    online: true,
  },
  {
    id: 2,
    name: "Raymond Reyes",
    avatar_url: "https://i.pravatar.cc/300",
    subtitle: "Vice Chairman",
    online: false,
  },
  {
    id: 3,
    name: "Carlos Henriquez Manzueta",
    avatar_url: "https://i.pravatar.cc/300",
    subtitle: "Vice President",
    online: true,
  },
  {
    id: 4,
    name: "Chris Jackson",
    avatar_url: "https://i.pravatar.cc/300",
    subtitle: "Vice Chairman",
    online: true,
  },
  {
    id: 5,
    name: "Amy Farha",
    avatar_url: "https://i.pravatar.cc/300",
    subtitle: "Vice President",
    online: false,
  },
  {
    id: 6,
    name: "Chris Jackson",
    avatar_url: "https://i.pravatar.cc/300",
    subtitle: "Vice Chairman",
    online: true,
  },

  {
    id: 7,
    name: "Arnel Cariaga Sr.",
    avatar_url: "https://i.pravatar.cc/300",
    subtitle: "Vice President",
    online: true,
  },
  {
    id: 8,
    name: "Chris Jackson Paterson Rick",
    avatar_url: "https://i.pravatar.cc/300",
    subtitle: "Vice Chairman",
    online: false,
  },
  {
    id: 9,
    name: "Eva Sanchez Tapia",
    avatar_url: "https://i.pravatar.cc/300",
    subtitle: "Vice President",
    online: true,
  },
  {
    id: 10,
    name: "Chris Jackson",
    avatar_url: "https://i.pravatar.cc/300",
    subtitle: "Vice Chairman",
    online: true,
  },
  {
    id: 11,
    name: "Amy Farha",
    avatar_url: "https://i.pravatar.cc/300",
    subtitle: "Vice President",
    online: false,
  },
  {
    id: 12,
    name: "Chris Jackson",
    avatar_url: "https://i.pravatar.cc/300",
    subtitle: "Vice Chairman",
    online: true,
  },
  {
    id: 13,
    name: "Chris Jackson",
    avatar_url: "https://i.pravatar.cc/300",
    subtitle: "Vice Chairman",
    online: true,
  },
  {
    id: 14,
    name: "Chris Jackson",
    avatar_url: "https://i.pravatar.cc/300",
    subtitle: "Vice Chairman",
    online: true,
  },
  {
    id: 15,
    name: "Chris Jackson",
    avatar_url: "https://i.pravatar.cc/300",
    subtitle: "Vice Chairman",
    online: true,
  },
  {
    id: 16,
    name: "Chris Jackson",
    avatar_url: "https://i.pravatar.cc/300",
    subtitle: "Vice Chairman",
    online: true,
  },
];

function UsersListHeader() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });
  const dispatch = useDispatch();

  const renderUsersStoriesListChat = React.useCallback(
    ({ item }) => <UsersStoriesListChat item={item} />,
    []
  );
  const keyExtractor = (item) => item.id.toString();
  const animationCreateVideoCall = new Animated.Value(0);
  const inputRangeCreateVideoCall = [0, 1];
  const outputRangeCreateVideoCall = [1, 0.8];
  const scaleCreateVideoCall = animationCreateVideoCall.interpolate({
    inputRange: inputRangeCreateVideoCall,
    outputRange: outputRangeCreateVideoCall,
  });

  const onPressInCreateVideoCall = () => {
    Animated.spring(animationCreateVideoCall, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  const onPressOutCreateVideoCall = () => {
    Animated.spring(animationCreateVideoCall, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  const renderUsersStoriesListHeader = () => (
    <Animated.View
      style={[
        {
          flex: 1,
          justifyContent: "center",
        },
        { transform: [{ scale: scaleCreateVideoCall }] },
      ]}
    >
      <ListItem
        containerStyle={{
          flexDirection: "column",
          width: 80,
          flex: 1,
        }}
        activeOpacity={1}
        Component={TouchableOpacity}
        onPressIn={onPressInCreateVideoCall}
        onPressOut={onPressOutCreateVideoCall}
      >
        <Icon
          name="video-call"
          iconStyle={{
            borderRadius: 50,
          }}
          size={30}
          containerStyle={{
            width: 60,
            height: 60,
            justifyContent: "center",
            backgroundColor: "#f5f5f5",
            marginBottom: 5,
          }}
        />
        <Text
          style={{
            textAlign: "center",
            width: 80,
          }}
          numberOfLines={2}
        >
          Create Video Call
        </Text>
      </ListItem>
    </Animated.View>
  );

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <Button
        buttonStyle={{
          backgroundColor: "#f5f5f5",
          justifyContent: "flex-start",
          borderRadius: 25,
        }}
        containerStyle={{
          borderRadius: 25,
          marginHorizontal: 20,
          marginTop: 10,
        }}
        titleStyle={{
          color: "#9a9a9a",
          marginLeft: 10,
          fontSize: 17,
          fontFamily: "Roboto_400Regular",
        }}
        title="Search"
        icon={() => (
          <Icon
            name="search"
            size={20}
            iconStyle={{ marginTop: 2, marginLeft: 5 }}
            color="#9a9a9a"
          />
        )}
        onPress={() => dispatch(openSearchChatsAction())}
      />
      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        ListHeaderComponent={renderUsersStoriesListHeader}
        renderItem={renderUsersStoriesListChat}
        contentContainerStyle={{
          paddingHorizontal: 5,
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </>
  );
}

export default React.memo(UsersListHeader);
