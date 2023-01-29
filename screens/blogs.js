import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import { db, getDocs, collection } from "../firebase";

const Blogs = ({ navigation }) => {
  const [blogList, setBlogList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const Blog = ({ title, body, author, createdAt, views }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("BlogDetails", {
          title,
          body,
          author,
          createdAt,
          views,
        })
      }
    >
      <View style={styles.item}>
        <Text style={styles.title}>
          {title} {views}
        </Text>
        <Text>{body}</Text>
      </View>
    </TouchableOpacity>
  );
  useEffect(() => {
    getDocs(collection(db, "blogs"))
      .then((querySnapshot) => {
        let temp = [];
        querySnapshot.forEach((res) => {
          const { title, body, author, createdAt, views } = res.data();
          temp.push({
            key: res.id,
            title,
            body,
            author,
            createdAt,
            views,
          });
        });
        setBlogList(temp);
        setIsLoading(false);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, [navigation]);
  if (isLoading) {
    return (
      <View>
        <Text>Loading!!!!</Text>
      </View>
    );
  } else if (blogList.length === 0) {
    return (
      <View>
        <Text>No blogs added yet!</Text>
      </View>
    );
  } else {
    return (
      <View>
        <FlatList
          data={blogList}
          renderItem={({ item }) => (
            <Blog
              title={item.title}
              body={item.body}
              author={item.author}
              createdAt={item.createdAt}
              views={item.views}
            />
          )}
          keyExtractor={(item) => item.key}
        />
      </View>
    );
  }
};
const styles = StyleSheet.create({
  item: {
    borderRadius: 5,
    padding: 30,
    margin: 20,
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "#f4717f",
    backgroundColor: "#e9e3e3",
    shadowColor: "red",
    shadowOpacity: 20,
  },
  title: {
    fontWeight: "700",
    fontSize: 18,
    paddingBottom: 10,
  },
});
export default Blogs;
