import React from "react";
import { View, StyleSheet } from "react-native";

import { CommonActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, BottomNavigation, useTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { AirconForm, Dashboard, Chatbot, Forum } from ".";
import { theme } from "../core/theme";

const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          style={{
            backgroundColor: "#5D8D66E5",
          }}
          activeIndicatorStyle={{
            backgroundColor: theme.colors.primary,
          }}
          activeColor="white"
          inactiveColor="white"
          navigationState={state}
          safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24 });
            }

            return null;
          }}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                  ? options.title
                  : route.title;

            return label;
          }}
        />
      )}
    >
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chatbot}
        options={{
          tabBarLabel: "Chat",
          tabBarIcon: ({ color, size }) => {
            return <Icon name="chat" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Form"
        component={AirconForm}
        options={{
          tabBarLabel: "Form",
          tabBarIcon: ({ color, size }) => {
            return <Icon name="form-textbox" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Forum"
        component={Forum}
        options={{
          tabBarLabel: "Forum",
          tabBarIcon: ({ color, size }) => {
            return <Icon name="forum" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
