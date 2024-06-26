import React, { useContext } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import { SmallStatistic, BigStatistic } from "../components/Statistic";

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
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <StatusBar style="dark" />
      <Logo />
      <Header>Welcome 💫</Header>
      <Paragraph>Congratulations {user}, you are logged in!</Paragraph>
      <View style={styles.bigStat}>
        <BigStatistic bgColor="green" />
      </View>
      {smallStatistics.map((row, i) => (
        <View style={styles.row} key={i}>
          {row.map((stat) => (
            <SmallStatistic {...stat} key={stat.icon} />
          ))}
        </View>
      ))}
      <Button style={styles.signOut} mode="outlined" onPress={LogOut}>
        Sign out
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    paddingTop: 50,
    paddingBottom: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  bigStat: {
    marginBottom: 24,
    marginHorizontal: 16,
  },
  row: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 16,
  },
  signOut: {
    width: 280,
  },
});
