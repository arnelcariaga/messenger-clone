import React from "react";
import { View, useWindowDimensions } from "react-native";
import {
  Text,
  Input,
  Icon,
  Divider,
  Button,
  Image,
} from "react-native-elements";
import Constants from "expo-constants";
import { io } from "socket.io-client";
import { useDispatch } from "react-redux";
import { setSocketAction } from "../Redux/socketDucks";

export default function Login({ navigation }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const { width, height } = useWindowDimensions();
  const [orientation, setOrientation] = React.useState("LANDSCAPE");
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (width < height) {
      setOrientation("PORTRAIT");
    } else {
      setOrientation("LANDSCAPE");
    }
  }, [width, height]);

  const login = () => {
    const socket = io("http://10.0.0.48:8000");
    dispatch(setSocketAction(socket));

    socket.emit("login", { username, password });

    socket.on("userExist", (data) => {
      if (data) {
        navigation.push("IndexTabs");
      }
    });
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          width: "90%",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {orientation === "PORTRAIT" && (
          <Image
            source={require("./../../assets/Messenger-Facebook-Logo.png")}
            style={{ width: 100, height: 100 }}
          />
        )}
      </View>
      <View
        style={{
          width: "90%",
        }}
      >
        <Input
          placeholder="Phone Number or Email"
          inputContainerStyle={{
            borderBottomWidth: 0,
          }}
          onChangeText={setUsername}
        />
        <Divider />
        <Input
          placeholder="Password"
          secureTextEntry={secureTextEntry}
          rightIcon={() =>
            password !== "" ? (
              <>
                {secureTextEntry ? (
                  <Icon
                    type="material-community"
                    name="eye"
                    color="gray"
                    onPress={() => setSecureTextEntry(!secureTextEntry)}
                  />
                ) : (
                  <Icon
                    type="material-community"
                    name="eye-off"
                    color="gray"
                    onPress={() => setSecureTextEntry(!secureTextEntry)}
                  />
                )}
              </>
            ) : null
          }
          inputContainerStyle={{
            borderBottomWidth: 0,
          }}
          containerStyle={{
            marginTop: 15,
          }}
          onChangeText={setPassword}
        />
        {/* <Text style={{ color: "red", marginBottom: 30 }}>
          Invalid username or email address
        </Text> */}
      </View>
      <View
        style={{
          width: "90%",
          paddingBottom: 20,
        }}
      >
        <Button
          title="LOG IN"
          disabled={username === "" || password === ""}
          buttonStyle={{
            borderRadius: 8,
            padding: 20,
            backgroundColor: "#0a7cff",
          }}
          disabledStyle={{
            backgroundColor: "#f5f5f5",
          }}
          disabledTitleStyle={{ color: "#dadada" }}
          onPress={login}
        />
        <Button
          title="CREATE NEW ACCOUNT"
          buttonStyle={{
            borderRadius: 8,
            padding: 20,
            backgroundColor: "#f5f5f5",
          }}
          titleStyle={{ color: "#000" }}
          containerStyle={{
            marginTop: 10,
          }}
        />
        <Button
          title="NEED HELP LOGGING IN?"
          buttonStyle={{ backgroundColor: "transparent" }}
          titleStyle={{
            color: "#147cf7",
          }}
        />
      </View>
    </View>
  );
}
