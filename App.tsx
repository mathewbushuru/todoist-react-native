import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import StartScreen from "./screens/StartScreen";
import HomeScreen from "./screens/HomeScreen";
import InboxScreen from "./screens/InboxScreen";

const Stack = createNativeStackNavigator();

export type stackParamsList = {
  start: undefined;
  home: undefined;
  inbox: { userId: string };
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="start">
          <Stack.Screen
            name="start"
            component={StartScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="home"
            component={HomeScreen}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen
            name="inbox"
            component={InboxScreen}
            options={{ title: "All tasks" }}
            initialParams={{ userId: "some_dummy_id_for_now" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
