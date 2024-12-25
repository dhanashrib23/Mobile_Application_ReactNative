import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button, ScrollView } from "react-native";
import axios from "axios";

function About(props) {
  var url = `http://192.168.135.89:5000/user/mobiles`;
  const [userName, setUserName] = useState("");
  const [mobiles, setMobiles] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("loggedInUser").then((value) => {
      if (value != null || value != undefined) {
        setUserName(value);
      }
    });
    axios.get(url).then((reply) => {
      setMobiles(reply.data.data);
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>About Us | Welcome {userName}</Text>
      </View>

      <View style={styles.mobilesContainer}>
        {mobiles.map((mob) => (
          <View key={mob.id} style={styles.mobileCard}>
            <Text style={styles.mobileName}>{mob.mname}</Text>
            <Text style={styles.mobileDetail}>RAM: {mob.ram}</Text>
            <Text style={styles.mobileDetail}>Storage: {mob.storage}</Text>
            <Text style={styles.mobileDetail}>Company: {mob.Company}</Text>
            <Text style={styles.mobileDetail}>Price: {mob.price}</Text>
          </View>
        ))}
      </View>

      <View style={styles.buttonGroup}>
        <Button
          onPress={() => props.navigation.navigate("home")}
          title="Home"
          color="#1E90FF"
        />
        <Button
          onPress={() => props.navigation.navigate("contact")}
          title="Contact Us"
          color="#1E90FF"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 20,
  },
  headerContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  mobilesContainer: {
    marginBottom: 20,
  },
  mobileCard: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 3,
  },
  mobileName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#000",
  },
  mobileDetail: {
    fontSize: 14,
    color: "#555",
    marginBottom: 3,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});

export default About;
