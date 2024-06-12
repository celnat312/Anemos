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
      size={40}
      color="white"
    />
  );
}

function SmallStatistic({ bgColor, icon, value, units, change }) {
  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Icon name={icon} size={40} color="white" style={styles.icon} />
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.units}>{units}</Text>
      <ChangeIcon change={change} />
    </View>
  );
}

function BigStatistic({ bgColor }) {
  return (
    <View
      style={[styles.container, { backgroundColor: bgColor, width: "100%" }]}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <View style={{ flex: 2, alignSelf: "flex-start" }}>
          <Text
            style={{
              fontSize: 20,
              color: "white",
              verticalAlign: "bottom",
              padding: 10,
            }}
          >
            {"You've saved"}
          </Text>
        </View>
        <Icon
          name="dots-vertical"
          size={30}
          color="white"
          style={{ alignSelf: "flex-end" }}
        />
      </View>
      <Text
        style={{
          flex: 2,
          fontSize: 60,
          fontWeight: 600,
          color: "white",
          textAlign: "center",
        }}
      >
        $3,057.67
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <View style={{ flex: 1, alignSelf: "flex-start" }}>
          <Text
            style={{
              fontSize: 20,
              color: "white",
              verticalAlign: "bottom",
              padding: 10,
              paddingTop: 8,
            }}
          >
            {"this month!"}
          </Text>
        </View>
        <View style={{ flex: 1, alignSelf: "flex-end" }}>
          <Text
            style={{
              fontSize: 8,
              color: "lightgrey",
              verticalAlign: "middle",
              textAlign: "right",
              padding: 12,
            }}
          >
            {"Updated 2h ago"}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    padding: 12,
    height: 190,
    width: 190,
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
    fontSize: 60,
    fontWeight: "600",
    color: "white",
    paddingBottom: 15,
  },
  units: {
    flex: 1,
    alignSelf: "center",
    color: "white",
    fontSize: 20,
  },
  change: {
    flex: 2,
    alignSelf: "flex-end",
  },
});

export { SmallStatistic, BigStatistic };
