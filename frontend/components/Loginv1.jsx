import { useContext, useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

function Loginv1(props) {
  var userName = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  var url = `http://192.168.135.89:5000/user/login`;

  return (
    <View style={obj.container}>
      <Text style={obj.header}> Welcome, {userName} !</Text>
      <View style={obj.inputGrp}>
        <Text style={obj.field}> Enter your email</Text>
        <TextInput
          style={obj.inputSmall}
          value={email}
          onChangeText={(value) => {
            setEmail(value);
          }}
        />
        <View style={obj.inputGrp}>
          <Text style={obj.field}></Text>
        </View>
      </View>
    </View>
  );
}

const obj = StyleSheet.create({
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

  inputGrp: {
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
export default Loginv1;
