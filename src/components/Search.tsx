import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../redux/actions/AuthAction";

const SearchBar = () => {
  const dispatch: any = useDispatch();
  const [search, setSearch] = useState("");

  const handleChange = (data: any) => {
    console.log("data is ", data);
    setSearch(data);
  };

  const handleButton = () => {
    console.log("handle button is called");
    dispatch(setSearchQuery(search));
  };

  return (
    <Searchbar
      // style={styles.search}
      placeholder="Search"
      onChangeText={handleChange}
      // value={searchQuery}
      value={search}
      // onIconPress={() => handleButton()}
      onSubmitEditing={() => handleButton()}
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
