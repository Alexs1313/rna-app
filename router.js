import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import RegistrScreen from "./screens/authScreen/RegistrScreen";
import PostsScreen from "./screens/mainScreen/PostsScreen";
import CreateScreen from "./screens/mainScreen/CreateScreen";
import ProfileScreen from "./screens/mainScreen/ProfileScreen";
import LoginScreen from "./screens/authScreen/LoginScreen";

// -----icons----->
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

const AuthStack = createStackNavigator();
const MainTabNav = createBottomTabNavigator();

export const useRoute = (isLoggedIn) => {
  if (!isLoggedIn) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Registr"
          component={RegistrScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTabNav.Navigator tabBarShowLabel={false}>
      <MainTabNav.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name="postage-stamp"
              size={size}
              color={color}
            />
          ),

          tabBarShowLabel: false,
        }}
        name="Posts"
        component={PostsScreen}
      />
      <MainTabNav.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign name="pluscircleo" size={size} color={color} />
          ),
          tabBarShowLabel: false,
        }}
        name="Create"
        component={CreateScreen}
      />
      <MainTabNav.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name="face-man-profile"
              size={size}
              color={color}
            />
          ),
          tabBarShowLabel: false,
        }}
      />
    </MainTabNav.Navigator>
  );
};
