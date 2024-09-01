import React from "react";
import { useEffect, useState } from "react";

import { StyleSheet, Text, View, SectionList, Pressable } from "react-native";

import * as Contacts from "expo-contacts";
import { Link } from "expo-router";

// Sample data for contacts
const sampleContacts = [
  {
    id: "1",
    name: "Alice Johnson",
    jobTitle: "Software Engineer",
    phoneNumbers: ["+123 456 7890", "+098 765 4321"],
    email: "alice.johnson@example.com",
    profilePic: "https://example.com/profile-pic.jpg",
  },
  {
    id: "2",
    name: "Bob Smith",
    jobTitle: "Product Manager",
    phoneNumbers: ["+987 654 3210", "+654 321 0987"],
    email: "bob.smith@example.com",
    profilePic: "https://example.com/profile-pic2.jpg",
  },
  {
    id: "3",
    name: "Charlie Brown",
    jobTitle: "Graphic Designer",
    phoneNumbers: ["+456 123 7890", "+321 654 9870"],
    email: "charlie.brown@example.com",
    profilePic: "https://example.com/profile-pic3.jpg",
  },
  {
    id: "4",
    name: "Diana Prince",
    jobTitle: "Data Scientist",
    phoneNumbers: ["+159 753 4862", "+753 159 2468"],
    email: "diana.prince@example.com",
    profilePic: "https://example.com/profile-pic4.jpg",
  },
  {
    id: "5",
    name: "Eve Adams",
    jobTitle: "Marketing Specialist",
    phoneNumbers: ["+951 357 2468", "+357 951 8642"],
    email: "eve.adams@example.com",
    profilePic: "https://example.com/profile-pic5.jpg",
  },
  // Add more sample contacts here
];

const groupContactsByAlphabet = (
  contacts: {
    id: string;
    name: string;
  }[]
) => {
  type GroupedContacts = {
    [key: string]: {
      id: string;
      name: string;
    };
  };
  const grouped = contacts.reduce((acc: GroupedContacts, contact) => {
    const firstLetter = contact.name[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(contact);
    return acc;
  }, {});

  const sortedKeys = Object.keys(grouped).sort();
  return sortedKeys.map((key) => ({
    title: key,
    data: grouped[key].sort((a, b) => a.name.localeCompare(b.name)),
  }));
};

const ContactsSectionList = () => {
  {
    // Access iphones contacts
    //Pulls contacts from storage
    // const [contacts, setContacts] = useState([]);
    // useEffect(() => {
    //   (async () => {
    //     const { status } = await Contacts.requestPermissionsAsync();
    //     if (status === "granted") {
    //       const { data } = await Contacts.getContactsAsync({
    //         fields: [Contacts.Fields.Name],
    //       });
    //       if (data.length > 0) {
    //         setContacts(data);
    //       }
    //     }
    //   })();
    // }, []);
  }
  const sections = groupContactsByAlphabet(sampleContacts);

  const myCard = {
    name: "John Doe",
    jobTitle: "Software Engineer",
    phoneNumbers: ["+123 456 7890", "+098 765 4321"],
    email: "john.doe@example.com",
    profilePic: "https://example.com/profile-pic.jpg",
  };

  return (
    <SectionList
      sections={sections}
      keyExtractor={(item, index) => item.id + index}
      renderItem={({ item }) => (
        <Link
          href={{
            pathname: "/contactCardModal",
            params: { data: JSON.stringify(item) },
          }}
          asChild
        >
          <Pressable>
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>{item.name}</Text>
            </View>
          </Pressable>
        </Link>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>{title}</Text>
        </View>
      )}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: "#F5F5F7",
  },
  sectionHeader: {
    backgroundColor: "#F7F7F7",
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  sectionHeaderText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#8E8E93",
  },
  itemContainer: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#C8C7CC",
  },
  itemText: {
    fontSize: 17,
    color: "#1C1C1E",
  },
});

export default ContactsSectionList;
