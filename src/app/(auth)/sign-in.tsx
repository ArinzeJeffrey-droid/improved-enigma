import Button from "@/src/components/Button";
import Colors from "@/src/constants/Colors";
import { Link, Stack } from "expo-router";
import { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const onSubmit = () => {
    console.log("Submitting!!!");
  };
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Sign in" }} />
      <Text style={styles.label}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="jon@gmail.com"
        style={styles.input}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />

      <Button onPress={onSubmit} text="Sign in" />
      <Link href={"/(auth)/sign-up"} asChild>
        <Text style={styles.textButton}>Create an account</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
    flex: 1,
  },
  label: {
    color: "gray",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginTop: 5,
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 5,
  },
  textButton: {
    alignSelf: "center",
    fontWeight: "bold",
    color: Colors.light.tint,
    marginVertical: 10,
  },
});

export default SignInScreen;
