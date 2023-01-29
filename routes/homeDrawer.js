import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AddBlogStack from "./addBlogStack";
import Profile from "../screens/profile";
import About from "../screens/about";
import BlogStack from "./blogStack";
const Drawer = createDrawerNavigator();
const HomeDrawer = ({ navigation }) => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#dad8d9",
          fontFamily: "nunito-ExtraBold",
        },
      }}
    >
      <Drawer.Screen name="All Blogs" component={BlogStack} />
      <Drawer.Screen name="Add blog" component={AddBlogStack} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
};

export default HomeDrawer;
