import { StyleSheet, View, Text, Button } from "react-native";

function Contact(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Contact Us</Text>
      <Button
        onPress={() => {
          props.navigation.navigate("home");
        }}
        title="Home"
      ></Button>
      <Button
        onPress={() => {
          props.navigation.navigate("about");
        }}
        title="About Us"
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
});

export default Contact;
