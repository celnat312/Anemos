import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import { SmallStatistic } from "../components/Statistic";

import { StatusBar } from "expo-status-bar";
import { AuthContext } from "../contexts/AuthContext";

const smallStatistics = [
  [
    {
      bgColor: "red",
      icon: "molecule-co2",
      value: "799",
      units: "tons/year",
      change: "up",
    },
    {
      bgColor: "orange",
      icon: "water",
      value: "900",
      units: "litres/year",
      change: "none",
    },
  ],
  [
    {
      bgColor: "green",
      icon: "trash-can",
      value: "2150",
      units: "tons/year",
      change: "down",
    },
    {
      bgColor: "darkred",
      icon: "lightning-bolt",
      value: "1071",
      units: "kWh/year",
      change: "up",
    },
  ],
];

export default function Dashboard({ navigation }) {
  const { user, setUser } = useContext(AuthContext);

  const LogOut = () => {
    setUser("");
    navigation.reset({
      index: 0,
      routes: [{ name: "StartScreen" }],
    });
  };

  return (
    <Background padding={12}>
      <StatusBar style="dark" />
      <Logo />
      <Header>Welcome 💫</Header>
      <Paragraph>Congratulations {user}, you are logged in!</Paragraph>
      {smallStatistics.map((row) => (
        <View style={styles.row}>
          {row.map((stat) => (
            <SmallStatistic {...stat} />
          ))}
        </View>
      ))}
      <Button style={styles.signOut} mode="outlined" onPress={LogOut}>
        Sign out
      </Button>
    </Background>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: 24,
    marginBottom: 24,
  },
  signOut: {
    width: 240,
  },
});
