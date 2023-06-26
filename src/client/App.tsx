import Splash from "./screens/Splash";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "./screens/Signup";
import PassSignUp from "./screens/PassSignUp";
import PreLogin from "./screens/PreLogin";
import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard";
import Account from "./screens/Account";
import Chat from "./screens/Chat";
import { TabParamList } from "./types";
import Icon from "react-native-vector-icons/Ionicons";
import { colors } from "./colors";

const Tab = createBottomTabNavigator<TabParamList>();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="PassSignUp" component={PassSignUp} />
        <Stack.Screen name="PreLogin" component={PreLogin} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Tabs" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let icon = "";

          if (route.name === "Dashboard") {
            icon = focused ? "home" : "home-outline";
          } else if (route.name === "Chat") {
            icon = focused ? "chatbox-sharp" : "chatbox-outline";
          } else if (route.name === "Account") {
            icon = focused ? "person-circle" : "person-circle-outline";
          }

          const iconColor = focused ? colors.primary_green : color;

          return <Icon name={icon} size={25} color={iconColor} />;
        },
      })}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ tabBarLabel: "", headerShown: false }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{ tabBarLabel: "", headerShown: false }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{ tabBarLabel: "", headerShown: false }}
      />
    </Tab.Navigator>
  );
}
