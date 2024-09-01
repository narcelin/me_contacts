// ContactCard.js
import { Link } from "expo-router";
import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

const MyContactCard = ({
  name,
  jobTitle,
  phoneNumbers,
  email,
  profilePic,
}: {
  name: string;
  jobTitle: string;
  phoneNumbers: string[];
  email: string;
  profilePic: string;
}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <Image source={{ uri: profilePic }} style={styles.cardAvatar} />
        <View style={styles.cardInfo}>
          <Text style={styles.cardName}>{name}</Text>
          <Text style={styles.cardJobTitle}>{jobTitle}</Text>
        </View>
      </View>
      <View style={styles.cardDetails}>
        <View style={styles.cardDetailItem}>
          {phoneNumbers.map((phoneNumber: string, index: number) => (
            <View key={index}>
              <Text style={styles.detailLabel}>Phone:</Text>
              <Text style={styles.detailValue}>{phoneNumber}</Text>
            </View>
          ))}
        </View>
        <View style={styles.cardDetailItem}>
          <Text style={styles.detailLabel}>Email:</Text>
          <Text style={styles.detailValue}>{email}</Text>
        </View>
        {/* Add more details as needed */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    maxWidth: 400,
    margin: 20,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  cardAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  cardInfo: {
    flex: 1,
  },
  cardName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardJobTitle: {
    fontSize: 14,
    color: "#666",
  },
  cardDetails: {
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingTop: 10,
  },
  cardDetailItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  detailLabel: {
    fontWeight: "bold",
  },
  detailValue: {
    color: "#555",
  },
});

export default MyContactCard;
