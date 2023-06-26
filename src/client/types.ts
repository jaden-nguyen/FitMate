import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Splash: undefined;
  SignUp: undefined;
  PassSignUp: undefined;
  PreLogin: undefined;
  Login: undefined;
  Tabs: undefined;
};
export type StackProps = {
  navigation?: StackNavigationProp<RootStackParamList>;
  pages?: 1 | 2;
};

export type TabParamList = {
  Dashboard: undefined;
  Chat: undefined;
  Account: undefined;
};
