import React from "react";
import AuthBackground from "../components/AuthBackground";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";

export default function StartScreen({ navigation }) {
  return (
    <AuthBackground>
      <Logo />
      <Header>ANEMOS</Header>
      <Paragraph>Profit with Purpose, Thrive Sustainably</Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("LoginScreen")}
      >
        Log in
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate("RegisterScreen")}
      >
        Create an account
      </Button>
    </AuthBackground>
  );
}
