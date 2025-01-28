import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [isShowKeybord, setIsShowKeybord] = useState(false);

  const onKeybordHide = () => {
    setIsShowKeybord(false);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/stars.jpg")}
        style={styles.image}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View
            style={{ ...styles.form, marginBottom: isShowKeybord ? 20 : 100 }}
          >
            <View>
              <Text style={styles.inputTitle}>Email</Text>
              <TextInput
                style={styles.input}
                textAlign="center"
                onFocus={() => setIsShowKeybord(true)}
              />
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={styles.inputTitle}>Password</Text>
              <TextInput
                style={styles.input}
                textAlign="center"
                secureTextEntry
                onFocus={() => setIsShowKeybord(true)}
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btn}
              onPress={onKeybordHide}
            >
              <Text style={styles.btnTitle}>SIGN IN</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 35,
    color: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    // alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 6,
    height: 40,
    color: "#fff",
    fontSize: 16,
  },
  form: { marginHorizontal: 40, margiBottom: 100 },

  inputTitle: { fontSize: 18, color: "#fff", marginBottom: 10 },

  btn: {
    backgroundColor: "#ff7f50",
    height: 40,
    marginTop: 40,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  btnTitle: {
    color: "#fff",
    fontSize: 18,
  },
});
