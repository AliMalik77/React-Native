import React from "react";
import { View, Text, StyleSheet } from "react-native";
import DropdownComponent from "../components/Dropdown";
import SearchBar from "../components/Search";

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dropdown}>
        <DropdownComponent />
      </View>
      <View style={styles.dropdown}>
        <SearchBar />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // bottom: 30,
  },
  dropdown: {
    marginBottom: 80,
    // marginTop: 30,
    // justifyContent: "center",
  },
  search: {
    // flex: 3,
  },
});
