import Splash from "./screens/Splash";
import { NavigationContainer } from "@react-navigation/native";
import {
  StackNavigationProp,
  createStackNavigator,
} from "@react-navigation/stack";
import SignUp from "./screens/Signup";
import { StatusBar } from "expo-status-bar";
import PassSignUp from "./screens/PassSignUp";

export type TopNavigatorParamsList = {
  Splash: undefined;
  SignUp: undefined;
  PassSignUp: undefined;
};
export interface StackProps {
  navigation: StackNavigationProp<TopNavigatorParamsList, "Splash">;
  pages: 1 | 2;
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="PassSignUp">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PassSignUp"
          component={PassSignUp}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
