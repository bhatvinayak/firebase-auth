import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "../firebase";
const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userInfo, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.replace("Home");
      }
    });
    return unsubscribe;
  }, []);

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        setUser(user);
        console.log("Registered: " + user.email);
      })
      .catch((error) => alert(error.message));
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        setUser(user);
        console.log("Logged in: " + user.email);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.appNameView}>
        <Text style={styles.appName}>Blog It!</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleSignup}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#dad8d9",
  },
  input: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  inputContainer: {
    width: "80%",
  },
  appName: {
    fontFamily: "nunito-ExtraBold",
    fontSize: 24,
  },
  appNameView: {
    margin: 20,
    padding: 10,
  },
  buttonContainer: {
    width: "80%",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#f4717f",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontFamily: "nunito-regular",
    fontSize: 16,
  },
  buttonOutline: {
    backgroundColor: "#fff",
    marginTop: 5,
    borderColor: "#f4717f",
    borderWidth: 2,
  },

  buttonOutlineText: {
    color: "#f4717f",
    fontWeight: "700",
    fontSize: 16,
  },
});
