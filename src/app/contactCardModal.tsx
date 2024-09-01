import { StatusBar } from "expo-status-bar";
import { Platform, Pressable, ScrollView, StyleSheet } from "react-native";

import EditScreenInfo from "@/src/components/EditScreenInfo";
import { Text, View } from "@/src/components/Themed";

import { useLocalSearchParams } from "expo-router";

import * as SQLite from "expo-sqlite";
import { useEffect } from "react";

export default function ContactCardModal() {
  const { data } = useLocalSearchParams();
  const jsonData = data as string;
  const parsedData = JSON.parse(jsonData);
  // console.log(parsedData.name);

  // const database = async () => {
  //   const db = await SQLite.openDatabaseAsync("meContacts.db");

  //   console.log("Creating Table");
  //   const createTable = async () => {
  //     await db.execAsync(
  //       `CREATE TABLE IF NOT EXISTS meContacts (id INTEGER PRIMARY KEY NOT NULL, firstName TEXT, lastName TEXT, middleName TEXT, nickname TEXT, company TEXT, jobTitle TEXT, department TEXT);`
  //     );
  //   };
  //   createTable();
  //   const inputDummyData = async () => {
  //     await db.execAsync(
  //       `INSERT INTO meContacts (firstName, lastName) VALUES ('John', 'Doe')`
  //     );
  //   };
  //   inputDummyData();
  // };
  // useEffect(() => {
  //   database();
  // }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Image source={{ uri: contact.avatar }} style={styles.avatar} /> */}
        <Text style={styles.name}>{parsedData.name}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Phone Numbers</Text>
        {parsedData.phoneNumbers.map((number: string, index: number) => (
          <Text key={index} style={styles.value}>
            {number}
          </Text>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{parsedData.email}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Address</Text>
        <Text style={styles.value}>{parsedData.address}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Notes</Text>
        <Text style={styles.value}>{parsedData.notes}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  section: {
    marginBottom: 16,
  },
  value: {
    fontSize: 16,
    color: "#555",
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
  },
});
