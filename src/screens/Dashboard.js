import React from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import { CommonActions } from "@react-navigation/native";

export default function Dashboard({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Welcome 💫</Header>
      <Paragraph>Congratulations you are logged in.</Paragraph>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.dispatch(CommonActions.navigate({ name: "AirconForm" }))
        }
      >
        Aircon Form
      </Button>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.dispatch(CommonActions.navigate({ name: "Chatbot" }))
        }
      >
        ChatBot
      </Button>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: "StartScreen" }],
          })
        }
      >
        Sign out
      </Button>
    </Background>
  );
}
