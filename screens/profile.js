import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { signOut, auth } from "../firebase";

const Profile = ({ navigation }) => {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("logged out");
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <View>
      <Text>Logged in as: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={handleLogout}
        style={[styles.button, styles.buttonOutline]}
      >
        <Text style={styles.buttonOutlineText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "80%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "#fff",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
});
