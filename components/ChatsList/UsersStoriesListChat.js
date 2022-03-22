import React from "react";
import { Animated, TouchableOpacity } from "react-native";
import { ListItem, Avatar, Text } from "react-native-elements";

function UsersStoriesListChat({ item }) {
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

  return (
    <Animated.View style={[{ transform: [{ scale: scaleCreateVideoCall }] }]}>
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
        <Avatar
          source={{ uri: item.avatar_url + "?img=" + item.name }}
          avatarStyle={{
            borderRadius: 50,
          }}
          containerStyle={{
            width: 60,
            height: 60,
            marginBottom: 5,
          }}
        >
          {item.online && (
            <Avatar.Accessory
              name="circle"
              color="#52c735"
              size={18}
              style={{
                backgroundColor: "#fff",
              }}
            />
          )}
        </Avatar>
        <Text
          style={{
            textAlign: "center",
            width: 80,
          }}
          numberOfLines={2}
        >
          {item.name}
        </Text>
      </ListItem>
    </Animated.View>
  );
}

export default React.memo(UsersStoriesListChat);
