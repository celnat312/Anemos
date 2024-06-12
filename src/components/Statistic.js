import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function ChangeIcon({ change }) {
  iconNames = ["arrow-up-thin", "arrow-down-thin", "minus"];
  index = ["up", "down", "none"].indexOf(change);

  return (
    <Icon
      name={iconNames[index]}
      style={styles.change}
      size={30}
      color="white"
    />
  );
}

function SmallStatistic({ bgColor, icon, value, units, change }) {
  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Icon name={icon} size={30} color="white" style={styles.icon} />
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.units}>{units}</Text>
      <ChangeIcon change={change} />
    </View>
  );
}

function BigStatistic() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    padding: 12,
    height: 130,
    width: 130,
    // shadow props for ios
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    // shadow props for android
    elevation: 0.4,
  },
  icon: {
    flex: 2,
    alignSelf: "flex-start",
  },
  value: {
    flex: 2,
    alignSelf: "center",
    fontSize: 40,
    fontWeight: "600",
    color: "white",
    paddingBottom: 15,
  },
  units: {
    flex: 1,
    alignSelf: "center",
    color: "white",
    fontSize: 12,
  },
  change: {
    flex: 2,
    alignSelf: "flex-end",
  },
});

export { SmallStatistic, BigStatistic };
