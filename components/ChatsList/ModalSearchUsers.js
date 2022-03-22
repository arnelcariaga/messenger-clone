import React from "react";
import {
  Modal,
  SafeAreaView,
  FlatList,
  useWindowDimensions,
} from "react-native";
import { SearchBar, Text, Icon } from "react-native-elements";
import { useFonts, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { useSelector, useDispatch } from "react-redux";
import { closeSearchChatsAction } from "../Redux/seachChatsDucks";

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
  const openSearchChats = useSelector((s) => s.seachChatsData.openSearchChats);
  const dispatch = useDispatch();

  const renderItemModal = React.useCallback(({ item }) => {
    return <Text>{item.name} klk</Text>;
  }, []);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Modal
      visible={openSearchChats}
      animationType="slide"
      onRequestClose={() => dispatch(closeSearchChatsAction())}
      style={{
        paddingTop: 25,
        backgroundColor: "#fff",
        alignItems: "flex-start",
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <SearchBar
          placeholder="Search"
          onChangeText={(v) => setSearchVal(v)}
          value={searchVal}
          round
          autoFocus
          showCancel={false}
          searchIcon={
            <Icon
              name="md-arrow-back"
              type="ionicon"
              iconStyle={{ marginRight: 13 }}
              size={28}
              onPress={() => dispatch(closeSearchChatsAction())}
            />
          }
          containerStyle={{
            backgroundColor: "#fff",
            borderBottomWidth: 0.2,
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
