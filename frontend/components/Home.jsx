import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import UserContext from "../contexts/UserContext";

function Home(props) {
  var userNameFromContext = useContext(UserContext);
  useEffect(() => {
    AsyncStorage.getItem("loggedInUser").then((value) => {
      if (value != null || value != undefined) {
        setUserName(value);
      } else {
        setUserName(userNameFromContext);
      }
    });
  }, []);

  const [userName, setUserName] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.content}>Welcome Home {userName}</Text>
      <Button
        onPress={() => {
          props.navigation.navigate("about");
        }}
        title="About Us"
      ></Button>
      <Button
        onPress={() => {
          props.navigation.navigate("contact");
        }}
        title="Contact Us"
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 60,
    backgroundColor: "skyblue",
    height: 300,
  },

  content: {
    height: 40,
    margin: 10,
    backgroundColor: "black",
    color: "white",
    fontWeight: "bold",
    padding: 10,
  },

  button: {
    height: 40,
    width: 100,
    margin: 10,
    backgroundColor: "red",
    color: "white",
    fontWeight: "bold",
  },
  TextInput: {
    margin: 10,
    padding: 10,
    borderColor: "blue",
    borderWidth: 2,
  },
});

export default Home;
