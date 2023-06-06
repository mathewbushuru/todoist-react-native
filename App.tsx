import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import StartScreen from "./screens/StartScreen";
import HomeScreen from "./screens/HomeScreen";
import InboxScreen from "./screens/InboxScreen";
import EmailScreen from "./screens/signup/EmailScreen";

import { Colors } from "./constants/colors";

export type stackParamsList = {
  start: undefined;
  home: undefined;
  inbox: { userId: string };
  signupEmail: undefined;
};

const Stack = createNativeStackNavigator<stackParamsList>();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="start"
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primaryBackground },
            headerTintColor: Colors.primaryForeground,
            headerTitleStyle: { fontWeight: "bold" },
          }}
        >
          <Stack.Screen
            name="start"
            component={StartScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="home"
            component={HomeScreen}
            options={{
              title: "Welcome",
              headerRight: ({ tintColor }) => {
                return (
                  <>
                    <Pressable
                      onPress={() => {
                        console.log("TODO: open settings");
                      }}
                    >
                      <Ionicons
                        name="settings-outline"
                        color={tintColor}
                        size={22}
                      />
                    </Pressable>
                  </>
                );
              },
            }}
          />
          <Stack.Screen
            name="inbox"
            component={InboxScreen}
            options={{ title: "All tasks" }}
            initialParams={{ userId: "some_dummy_id_for_now" }}
          />
          {/* Sign up screens  */}
          <Stack.Screen
            name="signupEmail"
            component={EmailScreen}
            options={{ headerShown: false, presentation: "modal" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
