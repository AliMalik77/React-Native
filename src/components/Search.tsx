import React from "react";
import { StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";

const SearchBar = () => {
  return (
    <Searchbar
      // style={styles.search}
      placeholder="Search"
      //   onChangeText={onChangeSearch}
      // value={searchQuery}
      value=""
    />
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  // search: {
  //   borderRadius: 5,
  //   borderColor: "black",
  // },
});
