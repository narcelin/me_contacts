import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
  ScrollView,
  SafeAreaView,
  Animated,
  TouchableWithoutFeedback,
  Keyboard,
  Easing,
} from "react-native";
// import SvgAvatarPerson1 from "../icons/AvatarPerson1";

// import { addFirstName } from "../../redux/addContact";
// import { useDispatch } from "react-redux";

export default function NewContact({ setModalVisible, modalVisible }: any) {
  const [deleteT, setDeleteT] = useState("");

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");

  const inputAnim = useRef(new Animated.Value(0)).current;
  const buttonAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const slideLeft = useRef(new Animated.Value(0)).current;
  const scaleClose = useRef(new Animated.Value(0)).current;

  const upCome = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.timing(inputAnim, {
          toValue: 15,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(buttonAnim, {
          toValue: 15,
          duration: 200,
          useNativeDriver: true,
        }),
      ]),

      Animated.timing(scaleClose, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const slideL = () => {
    Animated.timing(slideLeft, {
      toValue: -80,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const closeD = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(buttonAnim, {
          toValue: 5,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(scaleClose, {
          toValue: 100,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(slideLeft, {
          toValue: 0,
          duration: 50,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(inputAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(scaleClose, {
        toValue: 0,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(slideLeft, {
        toValue: 0,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(scaleClose, {
        toValue: 0,
        duration: 50,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const SELECTITEMS = [
    { name: "email" },
    { name: "url" },
    { name: "adress" },
    { name: "birthday" },
    { name: "date" },
    { name: "related name" },
    { name: "social profile" },
    { name: "instant message" },
  ];

  // const dispatch = useDispatch();

  function uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <SafeAreaView style={styles.container}>
        <View>
          {/* Header */}
          <View style={styles.headerContainer}>
            <Pressable
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={{ color: "#0a84ff", fontSize: 16 }}>Cancel</Text>
            </Pressable>
            <Text style={{ color: "#fff", fontSize: 18, paddingRight: 8 }}>
              New Contact
            </Text>
            <Pressable
              onPress={() => {
                setModalVisible(!modalVisible);
                console.log("Pressed");
                // dispatch(
                //   addFirstName({
                //     isim: name,
                //     soyisim: surname,
                //     key: uuidv4(),
                //     phone: phone,
                //   })
                // );
              }}
            >
              {name === "" ? (
                <Text style={{ color: "#45484a", fontSize: 16 }}>Done</Text>
              ) : (
                <Text style={{ color: "#0a84ff", fontSize: 16 }}>Done</Text>
              )}
            </Pressable>
          </View>
          {/* Picture */}
          <View
            style={{
              height: 220,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={styles.svgContainer}>
              {name === "" ? (
                <Text>Some sort of avatar person here</Text>
              ) : (
                // <SvgAvatarPerson1
                //   width="160px"
                //   height="160px"
                //   fill="#fff"
                //   stroke="#fff"
                // />
                <Text style={{ color: "white", fontSize: 64 }}>
                  {name.substring(0, 1).toUpperCase()}
                  {surname.substring(0, 1).toUpperCase()}
                </Text>
              )}
            </View>
            <TouchableOpacity>
              <Text style={{ color: "#0a84ff", fontSize: 16, paddingTop: 12 }}>
                Add Photo
              </Text>
            </TouchableOpacity>
          </View>

          {/* First Inputs */}
          <View style={styles.FirstInputsContainer}>
            <TextInput
              style={styles.FirstInputs}
              placeholder="First Name"
              placeholderTextColor="#8e8e93"
              onChangeText={(word) => {
                setName(word);
              }}
            />
            <TextInput
              style={styles.FirstInputs}
              placeholder="Last Name"
              placeholderTextColor="#8e8e93"
              onChangeText={(word) => {
                setSurname(word);
              }}
            />
            <TextInput
              style={{
                color: "#fff",
                height: 42,
                fontSize: 16,
                fontWeight: "500",
              }}
              placeholder="Company"
              placeholderTextColor="#8e8e93"
            />
          </View>
          {/* Add Other Data */}
          <View>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 26,
                }}
              >
                <Animated.View
                  style={[
                    styles.selectContainer,
                    {
                      borderBottomWidth: 0.7,
                      borderBottomColor: "#3a3a3c",
                      opacity: inputAnim,
                      flexDirection: "row",
                      alignItems: "center",
                      transform: [
                        { scaleY: scaleAnim },
                        { translateY: inputAnim },
                        { translateX: slideLeft },
                      ],
                    },
                  ]}
                >
                  <Pressable onPress={() => slideL()}>
                    <View
                      style={[
                        styles.selectIconContainer,
                        { backgroundColor: "#ff3b30", marginLeft: 24 },
                      ]}
                    >
                      <Text
                        style={{
                          fontSize: 18,
                          color: "white",
                          fontWeight: "500",
                        }}
                      >
                        -
                      </Text>
                    </View>
                  </Pressable>
                  <Text style={[styles.selectIconTitle, { color: "#0a84ff" }]}>
                    mobile
                  </Text>
                  <TextInput
                    placeholder="Phone"
                    placeholderTextColor="#8e8e93"
                    style={styles.inputStyle}
                    keyboardType="numeric"
                    onChangeText={(word) => {
                      setPhone(word);
                    }}
                  />
                </Animated.View>
                <Animated.View
                  style={{
                    backgroundColor: "#ff3b30",
                    opacity: inputAnim,
                    transform: [
                      { scaleY: scaleAnim },
                      { scaleX: scaleClose },
                      { translateY: inputAnim },
                      { translateX: slideLeft },
                    ],
                  }}
                >
                  <Pressable
                    onPress={() => {
                      closeD();
                      setDeleteT("");
                    }}
                  >
                    <View
                      style={{
                        paddingVertical: 13,
                        paddingHorizontal: 16,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 16,
                          color: "white",
                          fontWeight: "500",
                        }}
                      >
                        {deleteT}
                      </Text>
                    </View>
                  </Pressable>
                </Animated.View>
              </View>
              <Animated.View
                style={{ transform: [{ translateY: buttonAnim }] }}
              >
                <TouchableHighlight
                  style={[styles.selectContainer]}
                  underlayColor="#3a3a3c"
                  onPress={() => {
                    upCome();
                    setDeleteT("Delete");
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      paddingLeft: 24,
                      alignItems: "center",
                    }}
                  >
                    <View style={styles.selectIconContainer}>
                      <Text style={styles.selectIcon}>+</Text>
                    </View>
                    <Text style={styles.selectIconTitle}>add phone</Text>
                  </View>
                </TouchableHighlight>
              </Animated.View>
            </View>
            {/* {SELECTITEMS.map((items) => {
                            return (<TouchableHighlight key={items.name} style={[styles.selectContainer, { marginTop: 42 }]} underlayColor='#3a3a3c' onPress={() => null}>
                                <View style={{ flexDirection: 'row', paddingLeft: 24, alignItems: 'center' }}>
                                    <View style={styles.selectIconContainer}>
                                        <Text style={styles.selectIcon}>+</Text>
                                    </View>
                                    <Text style={styles.selectIconTitle}>add {items.name}</Text>
                                </View>
                            </TouchableHighlight>)
                        })} */}
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1e",
    height: 850,
    width: 370,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: 50,
  },
  headerContainer: {
    flexDirection: "row",
    height: 40,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  svgContainer: {
    backgroundColor: "#8e8e93",
    width: 148,
    height: 148,
    borderRadius: 74,
    alignItems: "center",
    justifyContent: "center",
  },
  FirstInputsContainer: {
    backgroundColor: "#2c2c2e",
    paddingHorizontal: 24,
  },
  FirstInputs: {
    color: "#fff",
    height: 48,
    fontSize: 16,
    fontWeight: "500",
    borderBottomWidth: 0.7,
    borderBottomColor: "#3a3a3c",
  },
  selectContainer: {
    backgroundColor: "#2c2c2e",
    paddingVertical: 10,
  },
  selectIconContainer: {
    backgroundColor: "#30d158",
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: "center",
  },
  selectIcon: {
    color: "white",
    fontWeight: "500",
    fontSize: 18,
  },
  selectIconTitle: {
    fontSize: 16,
    color: "white",
    marginLeft: 16,
  },
  inputStyle: {
    backgroundColor: "transparent",
    flex: 1,
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    paddingLeft: 24,
  },
});
