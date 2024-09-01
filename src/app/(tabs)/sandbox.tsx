import { Pressable, StyleSheet } from "react-native";

import EditScreenInfo from "@/src/components/EditScreenInfo";
import { Text, View } from "@/src/components/Themed";
import CreateDatabase from "@/src/services/CreateDatabase";

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <CreateDatabase />
      <Text style={styles.title}>SANDBOX</Text>
      <Pressable onPress={() => console.log("Pressed")}>
        <Text style={styles.title}>BUTTON</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    padding: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
