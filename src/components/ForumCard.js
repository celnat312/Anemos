import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../core/theme";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function ForumCard({
  title,
  description,
  byUser,
  liked,
  votes,
  voted,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.heartContainer}>
          <Icon
            name={liked ? "cards-heart" : "cards-heart-outline"}
            size={30}
            color={liked ? "red" : theme.colors.primary}
          />
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.byUserContainer}>
        <View style={styles.upvotesContainer}>
          <Icon
            name={voted ? "arrow-up-circle" : "arrow-up-circle-outline"}
            size={16}
            color={theme.colors.primary}
          />
          <Text style={styles.byUser}>{votes} Votes</Text>
        </View>
        <Text style={styles.byUser}>by {byUser}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    borderColor: "grey",
    borderStyle: "solid",
    borderWidth: 1,
    margin: 16,
    width: "100%",
  },
  title: {
    flex: 1,
    fontSize: 20,
    color: theme.colors.text,
    padding: 16,
    paddingBottom: 0,
    fontWeight: "bold",
  },
  titleContainer: {
    flex: 1,
    flexDirection: "row",
  },
  heartContainer: {
    paddingRight: 12,
    paddingTop: 12,
  },
  description: {
    fontSize: 12,
  },
  descriptionContainer: {
    flex: 3,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    borderStyle: "solid",
    padding: 16,
  },
  byUser: {
    fontSize: 12,
    alignSelf: "flex-end",
    marginLeft: 4,
  },
  byUserContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    padding: 16,
  },
  upvotesContainer: {
    flexDirection: "row",
  },
});
