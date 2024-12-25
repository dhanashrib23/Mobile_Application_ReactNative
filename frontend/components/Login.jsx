import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext, useState } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import UserContext from "../contexts/UserContext";
import axios from "axios";

function Login(props) {
  var userName = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  var url = `http://192.168.135.89:5000/user/login`;

  const Login = () => {
    axios.post(url, { email, password }).then(async (reply) => {
      if (reply.data.data != undefined || reply.data.data != null) {
        await AsyncStorage.setItem("loggedInUser", reply.data.data.uname);
        props.navigation.navigate("home");
      } else {
        alert("Invalid User");
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome, {userName} !</Text>
      <View style={styles.inputGroup}>
        <Text style={styles.field}>Enter your email</Text>
        <TextInput
          style={styles.inputSmall}
          value={email}
          onChangeText={(value) => {
            setEmail(value);
          }}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.field}>Enter your Password</Text>
        <TextInput
          style={styles.inputSmall}
          value={password}
          secureTextEntry={true}
          onChangeText={(value) => {
            setPassword(value);
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={Login} color="#4CAF50"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e8f5e9",
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#2e7d32",
  },
  inputGroup: {
    width: "80%",
    marginBottom: 20,
  },
  field: {
    fontSize: 16,
    color: "#4a4a4a",
    marginBottom: 5,
  },
  inputSmall: {
    height: 50,
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingHorizontal: 15,
    borderColor: "#c8e6c9",
    borderWidth: 1,
    fontSize: 16,
  },
  buttonContainer: {
    width: "80%",
    marginTop: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
});

export default Login;
