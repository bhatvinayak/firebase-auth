import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
const BlogDetails = ({ route, navigation }) => {
  const { title, body, author, createdAt, views } = route.params;
  const formatDate = (obj) => {
    const fireBaseTime = new Date(
      obj.seconds * 1000 + obj.nanoseconds / 1000000
    );
    const date = fireBaseTime.toDateString();
    const atTime = fireBaseTime.toLocaleTimeString();
    return date + " " + atTime;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
      <Text style={styles.author}>Author: {author}</Text>
      <Text style={styles.view}>Views: {views}</Text>
      <Text style={styles.timestamp}>{formatDate(createdAt)}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e9e3e3",
    height: "100%",
    width: "100%",
  },
  button: {
    backgroundColor: "#f4717f",
    width: "90%",
    marginLeft: "5%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 10,
    width: "100%",
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

  title: {
    fontSize: 17,
    margin: 10,
    alignSelf: "center",
    fontFamily: "nunito-ExtraBold",
  },
  body: {
    padding: 10,
    fontFamily: "nunito-regular",
    fontSize: 15,
  },

  author: {
    padding: 10,
    fontFamily: "nunito-regular",
    fontSize: 15,
  },
  view: {
    padding: 10,
    fontFamily: "nunito-regular",
    fontSize: 15,
  },
  timestamp: {
    padding: 10,
    fontFamily: "nunito-regular",
    fontSize: 15,
  },
});
export default BlogDetails;
