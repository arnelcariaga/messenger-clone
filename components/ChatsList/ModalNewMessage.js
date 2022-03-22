import React from "react";
import {
  Modal,
  SafeAreaView,
  FlatList,
  useWindowDimensions,
  View,
} from "react-native";
import { SearchBar, Text, Icon, Header, Switch } from "react-native-elements";
import { useFonts, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { useSelector, useDispatch } from "react-redux";
import { closeNewMessageModalAction } from "../Redux/newMessageDucks";

const data = [
  {
    id: 1,
    name: "Amy Farha",
    avatar_url: "https://i.pravatar.cc/300",
    subtitle: "Vice President",
  },
  {
    id: 2,
    name: "Chris Jackson",
    avatar_url: "https://i.pravatar.cc/300",
    subtitle: "Vice Chairman",
  },
];

function ModalSearchUsers() {
  let [fontsLoaded] = useFonts({
    Roboto_500Medium,
  });
  const [searchVal, setSearchVal] = React.useState("");
  const { width } = useWindowDimensions();
  const openNewMessageModal = useSelector(
    (s) => s.newMessageData.openNewMessageModal
  );
  const dispatch = useDispatch();

  const renderItemModal = React.useCallback(({ item }) => {
    return <Text>{item.name} HAHAHAHAHA</Text>;
  }, []);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Modal
      visible={openNewMessageModal}
      animationType="slide"
      onRequestClose={() => dispatch(closeNewMessageModalAction())}
      style={{
        paddingTop: 25,
        backgroundColor: "#fff",
        alignItems: "flex-start",
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <Header
          backgroundColor="#fff"
          leftComponent={
            <Icon
              name="md-arrow-back"
              type="ionicon"
              size={28}
              onPress={() => dispatch(closeNewMessageModalAction())}
            />
          }
          centerComponent={{
            text: "New Message",
            style: { fontSize: 18, fontWeight: "bold" },
          }}
          centerContainerStyle={{
            justifyContent: "center",
          }}
          leftContainerStyle={{
            justifyContent: "center",
          }}
          placement="left"
          rightComponent={<Switch value={false} />}
          containerStyle={{ borderBottomColor: "#fff" }}
        />
        <SearchBar
          placeholder="Type a name"
          onChangeText={(v) => setSearchVal(v)}
          value={searchVal}
          round
          autoFocus
          showCancel={false}
          searchIcon={<Text style={{ color: "gray" }}>To:</Text>}
          containerStyle={{
            backgroundColor: "#fff",
            borderBottomWidth: 1,
            borderBottomColor: "lightgray",
            borderTopWidth: 0,
            width,
          }}
          inputContainerStyle={{
            backgroundColor: "#fff",
          }}
          placeholderTextColor="#939393"
          inputStyle={{
            fontFamily: "Roboto_500Medium",
            fontSize: 16,
          }}
        />
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItemModal}
        />
      </SafeAreaView>
    </Modal>
  );
}

export default React.memo(ModalSearchUsers);
