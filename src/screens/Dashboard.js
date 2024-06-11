import React, {useContext} from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import { AuthContext } from "../contexts/AuthContext";


const LogOut = () => {
    setUser("");
    navigation.reset({
    index: 0,
    routes: [{ name: "StartScreen" }]
  });
}

export default function Dashboard({ navigation }) {
  const {user, setUser} = useContext(AuthContext);

  const LogOut = () => {
    setUser("");
    navigation.reset({
    index: 0,
    routes: [{ name: "StartScreen" }]
  });
}

  return (
    <Background>
      <Logo />
      <Header>Welcome 💫</Header>
      <Paragraph>Congratulations {user}, you are logged in!</Paragraph>
      <Button
        mode="outlined"
        onPress={LogOut}
      >
        Sign out
      </Button>
    </Background>
  );
}
