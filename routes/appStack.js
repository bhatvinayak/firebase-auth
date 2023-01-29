import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Font from "expo-font";
import { useState } from "react";
import HomeDrawer from "./homeDrawer";
import Login from "../screens/login";
import AppLoading from "expo-app-loading";
const Stack = createNativeStackNavigator();
const getFont = () => {
  return Font.loadAsync({
    "nunito-regular": require("../assets/font/Nunito-Regular.ttf"),
    "nunito-ExtraBold": require("../assets/font/Nunito-ExtraBold.ttf"),
  });
};
export default function AppStack() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (fontLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{ headerBackVisible: false, headerShown: false }}
            name="Home"
            component={HomeDrawer}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFont}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
