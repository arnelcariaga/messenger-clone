import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import generateStore from "./components/Redux/store";
import IndexTabs from "./components/IndexTabs";
import Login from "./components/Login";

const ScreenStackNavigator = createStackNavigator();

export default function App() {
  const store = generateStore();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <ScreenStackNavigator.Navigator>
          <ScreenStackNavigator.Screen
            name="Login"
            component={Login}
            options={() => ({
              headerShown: false,
            })}
          />

          <ScreenStackNavigator.Screen
            name="IndexTabs"
            component={IndexTabs}
            options={() => ({
              headerShown: false,
            })}
          />
        </ScreenStackNavigator.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
