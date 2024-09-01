import { Pressable, StyleSheet } from "react-native";

// import { Text, View } from "react-native"; //Using themed componenet for dark mode
import { Text, View } from "@/src/components/Themed";

import EditScreenInfo from "@/src/components/EditScreenInfo";
import Colors from "@/src/constants/Colors";
import ContactList from "@/src/components/ContactList";

import products from "@/assets/data/products";
import contacts from "@/assets/data/contacts";
import { useState } from "react";

import Contacts from "@/src/components/clonedComponents/Contacts";
import MyContactCard from "@/src/components/MyContactCard";
import HorizontalLine from "@/src/components/HorizontalLine";
import SearchBar from "@/src/components/SearchBar";
import { Link } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function TabOneScreen() {
  const [modalVisible, setModalVisible] = useState(true);
  const [searchText, setSearchText] = useState("");

  const myCard = {
    name: "John Doe",
    jobTitle: "Software Engineer",
    phoneNumbers: ["+123 456 7890", "+098 765 4321"],
    email: "john.doe@example.com",
    profilePic: "https://example.com/profile-pic.jpg",
  };

  return (
    // <Contacts />
    <View style={styles.container}>
      <SearchBar
        value={searchText}
        onChangeText={setSearchText}
        placeholder="Search Contacts"
      />
      <Link
        href={{
          pathname: "/contactCardModal",
          params: { data: JSON.stringify(myCard) },
        }}
        asChild
      >
        <Pressable>
          <MyContactCard
            name={myCard.name}
            jobTitle={myCard.jobTitle}
            phoneNumbers={myCard.phoneNumbers}
            email={myCard.email}
            profilePic={myCard.profilePic}
          />
        </Pressable>
      </Link>
      <HorizontalLine />
      <ContactList />
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
