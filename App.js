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
                headerStyle: {
                  backgroundColor: theme.colors.primary,
                },
                headerTitleStyle: {
                  color: "white",
                },
                headerTintColor: "white",
              }}
            >
              <Stack.Screen name="StartScreen" component={StartScreen} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
              <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                  headerShown: true,
                  title: "Dashboard",
                }}
              />
              <Stack.Screen
                name="Chatbot"
                component={Chatbot}
                options={{
                  headerShown: true,
                  title: "ChatBot",
                }}
              />
              <Stack.Screen
                name="AirconForm"
                component={AirconForm}
                options={{
                  headerShown: true,
                  title: "Form",
                }}
              />
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
