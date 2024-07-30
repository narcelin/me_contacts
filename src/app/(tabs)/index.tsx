import { StyleSheet, Image } from "react-native";
// import { Text, View } from "react-native"; //Using themed componenet for dark mode

import EditScreenInfo from "@/src/components/EditScreenInfo";
import { Text, View } from "@/src/components/Themed";
import Colors from "@/src/constants/Colors";

import products from "@/assets/data/products";
import contacts from "@/assets/data/contacts";

const product = products[0];
const contact = contacts[0];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text>Hello, World!</Text>
      <Image source={{ uri: contact.image }} style={styles.image}></Image>
      <Text style={styles.title}>{contact.name}</Text>
      <Text style={styles.price}>{contact.phone}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  container: {
    backgroundColor: "gray",
    padding: 10,
    borderRadius: 10,
    display: "flex",
  },
  // separator: {
  //   marginVertical: 30,
  //   height: 1,
  //   width: "80%",
  // },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.light.tint,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
