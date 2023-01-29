import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddBlog from "../screens/addBlog";
import HomeDrawer from "./homeDrawer";
const Stack = createNativeStackNavigator();
const AddBlogStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Add Blog"
        component={AddBlog}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomeDrawer}
      />
    </Stack.Navigator>
  );
};

export default AddBlogStack;
