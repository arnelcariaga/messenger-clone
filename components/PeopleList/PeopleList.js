import React from "react";
import { FlatList, View } from "react-native";
import UsersStoriesList from "./UsersStoriesList";

export default function PeopleList() {
  const data = React.useMemo(
    () => [
      {
        id: 1,
        name: "Arnel Cariaga Hiciano",
        avatar_url: "https://i.pravatar.cc/300",
        subtitle: "Sorry but i'm so bus...",
        haveMsg: true,
      },
      {
        id: 2,
        name: "Chris Jackson",
        avatar_url: "https://i.pravatar.cc/300",
        subtitle: "Hw r u doing ?",
        haveMsg: false,
      },
      {
        id: 3,
        name: "Carlos Henriquez Manzueta",
        avatar_url: "https://i.pravatar.cc/300",
        subtitle: "Hola mi hermano",
        haveMsg: true,
      },
      {
        id: 4,
        name: "Raymond Reyes",
        avatar_url: "https://i.pravatar.cc/300",
        subtitle: "Que haces ?",
        haveMsg: true,
      },
      {
        id: 5,
        name: "Ana Maria Hernandez",
        avatar_url: "https://i.pravatar.cc/300",
        subtitle: "No me dejes en visto",
        haveMsg: false,
      },
      {
        id: 6,
        name: "Pablito Gutierrez Suero",
        avatar_url: "https://i.pravatar.cc/300",
        subtitle: "Hello !!!",
        haveMsg: false,
      },
      {
        id: 7,
        name: "Mohamed Alab",
        avatar_url: "https://i.pravatar.cc/300",
        subtitle: "Sorry but i'm so bus...",
        haveMsg: true,
      },
      {
        id: 8,
        name: "Soto de nuñez",
        avatar_url: "https://i.pravatar.cc/300",
        subtitle: "Hw r u doing ?",
        haveMsg: true,
      },
      {
        id: 9,
        name: "Carla Hernando Brito",
        avatar_url: "https://i.pravatar.cc/300",
        subtitle: "Sorry but i'm so bus...",
        haveMsg: true,
      },
      {
        id: 10,
        name: "Abigail Manzueta",
        avatar_url: "https://i.pravatar.cc/300",
        subtitle: "Hw r u doing ?",
        haveMsg: true,
      },
      {
        id: 11,
        name: "Ronald Martinez Del monte",
        avatar_url: "https://i.pravatar.cc/300",
        subtitle: "Sorry but i'm so bus...",
        haveMsg: true,
      },
      {
        id: 12,
        name: "Daniel de la cruz",
        avatar_url: "https://i.pravatar.cc/300",
        subtitle: "Hw r u doing ?",
        haveMsg: true,
      },
      {
        id: 13,
        name: "Scarlet Yoana Petter",
        avatar_url: "https://i.pravatar.cc/300",
        subtitle: "Sorry but i'm so bus...",
        haveMsg: true,
      },
      {
        id: 14,
        name: "Robert Yacson Rick",
        avatar_url: "https://i.pravatar.cc/300",
        subtitle: "Hw r u doing ?",
        haveMsg: true,
      },
      {
        id: 15,
        name: "Yeimi Suich Darl",
        avatar_url: "https://i.pravatar.cc/300",
        subtitle: "Sorry but i'm so bus...",
        haveMsg: true,
      },
      {
        id: 16,
        name: "Christian Daniel Kens",
        avatar_url: "https://i.pravatar.cc/300",
        subtitle: "Hw r u doing ?",
        haveMsg: true,
      },
    ],
    []
  );

  const renderUsersStoriesList = React.useCallback(
    ({ item }) => <UsersStoriesList item={item} />,
    []
  );

  const keyExtractor = (item) => item.id.toString();

  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        paddingTop: 65,
      }}
    >
      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderUsersStoriesList}
        numColumns={2}
        contentContainerStyle={{
          marginHorizontal: 10,
        }}
      />
    </View>
  );
}
