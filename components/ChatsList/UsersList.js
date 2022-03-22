import React from "react";
import { ListItem, Avatar, Icon } from "react-native-elements";

function UsersList({ item }) {
  return (
    <ListItem
      containerStyle={{
        paddingTop: 0,
        paddingBottom: 15,
      }}
      onPress={() => {}}
    >
      <Avatar
        source={{ uri: item.avatar_url + "?img=" + item.name }}
        avatarStyle={{
          borderRadius: 50,
        }}
        containerStyle={{
          width: 60,
          height: 60,
        }}
      />
      <ListItem.Content>
        <ListItem.Title
          style={{
            color: item.haveMsg ? "#000" : "gray",
            fontWeight: item.haveMsg ? "bold" : "normal",
          }}
          numberOfLines={1}
        >
          {item.name}
        </ListItem.Title>
        {item.haveMsg ? (
          <ListItem.Subtitle style={{ fontWeight: "bold", color: "#000" }}>
            {item.subtitle}{" "}
            <Icon
              name="circle"
              size={2}
              color="gray"
              iconStyle={{ paddingBottom: 3 }}
            />{" "}
            Sat
          </ListItem.Subtitle>
        ) : (
          <ListItem.Subtitle>
            You: {item.subtitle}{" "}
            <Icon
              name="circle"
              size={2}
              color="gray"
              iconStyle={{ paddingBottom: 3 }}
            />{" "}
            Sat
          </ListItem.Subtitle>
        )}
      </ListItem.Content>

      {!item.haveMsg && (
        <Avatar
          source={{ uri: item.avatar_url + "?img=" + item.id }}
          avatarStyle={{
            borderRadius: 50,
          }}
          containerStyle={{
            width: 15,
            height: 15,
          }}
        />
      )}
    </ListItem>
  );
}

export default React.memo(UsersList);
