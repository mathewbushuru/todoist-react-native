// Third party library imports
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

// General screens imports
import StartScreen from "./screens/StartScreen";
import HomeScreen from "./screens/HomeScreen";
import InboxScreen from "./screens/InboxScreen";
// Signup screens imports
import SignupEmailScreen from "./screens/signup/EmailScreen";
import SignupPasswordScreen from "./screens/signup/PasswordScreen";
import SignupSelectUseScreen from "./screens/signup/SelectUseScreen";
import SignupSelectExperienceScreen from "./screens/signup/SelectExperience";
import SignupProfileScreen from "./screens/signup/ProfileScreen";
// Login screens imports
import LoginEmailScreen from "./screens/login/EmailScreen";
import LoginPasswordScreen from "./screens/login/PasswordScreen";

// project imports
import SettingsIcon from "./components/SettingsIcon";
import { Colors } from "./constants/colors";

export type stackParamsList = {
  start: undefined;
  home: undefined;
  inbox: { userId: string };
  signupModal: undefined;
  loginModal: undefined;
};

export type signupModalParamsList = {
  signupEmail: undefined;
  signupPassword: undefined;
  signupSelectUse: undefined;
  signupSelectExperience: undefined;
  signupProfile: undefined;
};

export type loginModalParamsList = {
  loginEmail: undefined;
  loginPassword: undefined;
};

const Stack = createNativeStackNavigator<stackParamsList>();
const SignupModalStack = createNativeStackNavigator<signupModalParamsList>();
const LoginModalStack = createNativeStackNavigator<loginModalParamsList>();

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
          <Stack.Screen
            name="loginModal"
            component={LoginModalScreens}
            options={{ headerShown: false, presentation: "modal" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

function SignupModalScreens() {
  return (
    <SignupModalStack.Navigator screenOptions={{ headerShown: false }}>
      <SignupModalStack.Screen
        name="signupEmail"
        component={SignupEmailScreen}
      />
      <SignupModalStack.Screen
        name="signupPassword"
        component={SignupPasswordScreen}
      />
      <SignupModalStack.Screen
        name="signupSelectUse"
        component={SignupSelectUseScreen}
      />
      <SignupModalStack.Screen
        name="signupSelectExperience"
        component={SignupSelectExperienceScreen}
      />
      <SignupModalStack.Screen
        name="signupProfile"
        component={SignupProfileScreen}
      />
    </SignupModalStack.Navigator>
  );
}

function LoginModalScreens() {
  return (
    <LoginModalStack.Navigator screenOptions={{ headerShown: false }}>
      <LoginModalStack.Screen
        name="loginEmail"
        component={LoginEmailScreen}
      />
      <LoginModalStack.Screen
        name="loginPassword"
        component={LoginPasswordScreen}
      /> 
    </LoginModalStack.Navigator>
  );
}
