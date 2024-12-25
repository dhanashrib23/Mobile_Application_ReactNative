import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/Login";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import UserContext from "./contexts/UserContext";

export default function App() {
  var Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <UserContext.Provider value="Guest">
        <Stack.Navigator>
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="about" component={About} />
          <Stack.Screen name="contact" component={Contact} />
        </Stack.Navigator>
      </UserContext.Provider>
    </NavigationContainer>
  );
}
