import React from "react";
import { Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "./src/core/theme";
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
  Chatbot,
  AirconForm,
} from "./src/screens";
import { AuthContextProvider } from "./src/contexts/AuthContext";

import { FormDataProvider } from "./src/helpers/FormDataContext";
import Main from "./src/screens/Main";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider theme={theme}>
      <AuthContextProvider>
        <FormDataProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="StartScreen"
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="StartScreen" component={StartScreen} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
              <Stack.Screen name="Main" component={Main} />
              <Stack.Screen
                name="ResetPasswordScreen"
                component={ResetPasswordScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </FormDataProvider>
      </AuthContextProvider>
    </Provider>
  );
}
