import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";

import { StatusBar } from "expo-status-bar";
import { AuthContext } from "../contexts/AuthContext";

export default function Forum({ navigation }) {
  return (
    <Background padding={12}>
      <StatusBar style="dark" />
    </Background>
  );
}

const styles = StyleSheet.create({
  bigStat: {
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    gap: 24,
    marginBottom: 24,
  },
  signOut: {
    width: 280,
  },
});
