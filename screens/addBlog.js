import { db, addDoc, auth, Timestamp, collection } from "../firebase";
import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const AddBlog = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleAddBlog = () => {
    addDoc(collection(db, "blogs"), {
      author: auth.currentUser?.email || "Author",
      title: title,
      body: body,
      views: 0,
      createdAt: new Timestamp.now(),
    })
      .then((doc) => {
        console.log("added data with id: ", doc.id);
        setTitle("");
        setBody("");
        navigation.goBack();
      })
      .catch((error) => alert(error.message));
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setTitle(text)}
        value={title}
        placeholder="Blog Title"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setBody(text)}
        value={body}
        placeholder="Blog Body"
        multiline={true}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleAddBlog} style={styles.button}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default AddBlog;

const styles = StyleSheet.create({
  container: {
    height: "100%",
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
});
