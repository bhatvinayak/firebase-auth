import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BlogDetails from "../screens/blogDetails";
import Blogs from "../screens/blogs";
const Stack = createNativeStackNavigator();
const BlogStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Blogs"
        component={Blogs}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="BlogDetails"
        component={BlogDetails}
      />
    </Stack.Navigator>
  );
};

export default BlogStack;
