import React, { useContext } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";

import { StatusBar } from "expo-status-bar";
import { theme } from "../core/theme";
import ForumCard from "../components/ForumCard";

const forumContent = [
  {
    title: "Optimizing Energy Efficiency in Air Conditioners",
    description:
      "Share your tips and tricks for improving the energy efficiency of your air conditioning unit. From setting the right temperature to regular maintenance practices, let's discuss how we can reduce our energy bills while staying cool.",
    byUser: "Yap Wei Jie",
    liked: true,
    voted: false,
    votes: 1432,
  },
  {
    title: "Comparing Different Aircon Technologies",
    description:
      "From inverter ACs to traditional models, let's compare different aircon technologies. Share your experiences with different types and brands, and discuss which technologies provide the best performance and efficiency.",
    byUser: "Tan Wei Ming",
    liked: true,
    voted: true,
    votes: 1043,
  },
  {
    title: "Aircon Usage During Extreme Heatwaves",
    description:
      "How do you manage your aircon usage during extreme heatwaves? Share tips for keeping cool without overloading your system and driving up energy costs.",
    byUser: "Crystal Ng",
    liked: false,
    voted: true,
    votes: 996,
  },
  {
    title: "Aircon Troubleshooting: Common Issues and Fixes",
    description:
      "Encountering problems with your air conditioner? Post your issues here and get advice from the community on common troubleshooting steps and fixes.",
    byUser: "Chew Kai En",
    liked: true,
    voted: false,
    votes: 803,
  },
];

export default function Forum({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Logo />
      <StatusBar style="dark" />
      <Text>See what other people are saying!</Text>
      {forumContent.map((content) => (
        <ForumCard {...content} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    container: {
      flex: 1,
      backgroundColor: theme.colors.backdrop,
    },
  },
  content: {
    paddingTop: 50,
    paddingBottom: 24,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});
