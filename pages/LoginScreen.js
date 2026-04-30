import React, { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import axios from "axios";
import { AuthContext } from "./AuthContext";

const BASE_URL = "http://10.1.9.133:9000/api/user";

export default function LoginScreen() {
  const { login } = useContext(AuthContext);

  const [nim, setNim] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!nim || !password) {
      Alert.alert("Error", "NIM dan Password harus diisi");
      return;
    }

    try {
      const res = await axios.post(
        BASE_URL + "/login",
        { nim, password },
        {
          headers: {
            authcode: "astratech123",
          },
        }
      );

      if (res.data.code === 200) {
        login(res.data.data);
      } else {
        Alert.alert("Login gagal", res.data.message);
      }
    } catch (err) {
      Alert.alert("Error", "Tidak bisa konek ke server");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="NIM"
        style={styles.input}
        onChangeText={setNim}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
};