import React, { useContext, useState } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import AuthBackground from "../components/AuthBackground";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { theme } from "../core/theme";
import { nameValidator } from "../helpers/nameValidator";
import { passwordValidator } from "../helpers/passwordValidator";
import { AuthContext } from "../contexts/AuthContext";

export default function LoginScreen({ navigation }) {
  const { user, setUser } = useContext(AuthContext);
  const [nameInput, setNameInput] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const onLoginPressed = () => {
    const nameError = nameValidator(nameInput.value);
    const passwordError = passwordValidator(password.value);
    if (nameError || passwordError) {
      setNameInput({ ...nameInput, error: nameError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    else{setUser(nameInput.value);}
    navigation.reset({
      index: 0,
      routes: [{ name: "Dashboard" }],
    });
  };

  return (
    <AuthBackground style={{ padding: 24 }}>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Login to continue</Header>
      <TextInput
        label="Name"
        returnKeyType="next"
        value={nameInput.value}
        onChangeText={(text) => setNameInput({ value: text, error: "" })}
        error={!!nameInput.error}
        errorText={nameInput.error}
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ResetPasswordScreen")}
        >
          <Text style={styles.forgot}>Forgot your password ?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onLoginPressed}>
        Log in
      </Button>
      <View style={styles.row}>
        <Text>Don't have an account yet ?</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.replace("RegisterScreen")}>
          <Text style={styles.link}>Create an account</Text>
        </TouchableOpacity>
      </View>
    </AuthBackground>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});
