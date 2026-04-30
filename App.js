import React, { useContext } from "react";
import { Text } from "react-native";
import { AuthProvider, AuthContext } from "./pages/AuthContext";
import LoginScreen from "./pages/LoginScreen";
import HomeScreen from "./pages/HomeScreen";

function MainApp() {
  const { userData, loading } = useContext(AuthContext);

  if (loading) return <Text style={{ textAlign: "center", marginTop: 50 }}>Loading...</Text>;
  return userData ? <HomeScreen /> : <LoginScreen />;
}

export default function App() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}