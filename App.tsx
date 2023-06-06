import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import StartScreen from "./screens/StartScreen";
import HomeScreen from "./screens/HomeScreen";
import InboxScreen from "./screens/InboxScreen";
import SignupEmailScreen from "./screens/signup/EmailScreen";
import SignupPasswordScreen from "./screens/signup/PasswordScreen";

import SettingsIcon from "./components/SettingsIcon";
import { Colors } from "./constants/colors";

export type stackParamsList = {
  start: undefined;
  home: undefined;
  inbox: { userId: string };
  signupModal: undefined;
};

export type signupModalParamsList = {
  signupEmail: undefined;
  signupPassword: undefined;
};

const Stack = createNativeStackNavigator<stackParamsList>();
const SignupModalStack = createNativeStackNavigator<signupModalParamsList>();

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
                return <SettingsIcon tintColor={tintColor} />;
              },
            }}
          />
          <Stack.Screen
            name="inbox"
            component={InboxScreen}
            options={{ title: "All tasks" }}
            initialParams={{ userId: "some_dummy_id_for_now" }}
          />
          <Stack.Screen
            name="signupModal"
            component={SignupModalScreens}
            options={{ headerShown: false, presentation: "modal" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

function SignupModalScreens() {
  return (
    <SignupModalStack.Navigator>
      <SignupModalStack.Screen
        name="signupEmail"
        component={SignupEmailScreen}
        options={{ headerShown: false }}
      />
      <SignupModalStack.Screen
        name="signupPassword"
        component={SignupPasswordScreen}
        options={{ headerShown: false }}
      />
    </SignupModalStack.Navigator>
  );
}
