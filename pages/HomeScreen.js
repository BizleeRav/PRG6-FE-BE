import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AuthContext } from "./AuthContext";

export default function HomeScreen() {
  const { userData, logout } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Home</Text>

        <TouchableOpacity onPress={logout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.name}>{userData?.name}</Text>
      </View>

    </View>
  );
}

const styles = {
  header: {
    backgroundColor: "#007bff",
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  logoutText: {
    color: "#fff",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcome: {
    fontSize: 20,
    color: "#555",
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
  },
};