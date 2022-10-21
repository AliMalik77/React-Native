import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import DropdownComponent from "../components/Dropdown";
import SearchBar from "../components/Search";
import { getUserData } from "../redux/actions/AuthAction";
import axios from "axios";

const Search = () => {
  const searchData = useSelector((state: any) => state.auth.search);
  const typeSearch = useSelector((state: any) => state.auth.type);
  const dispatch: any = useDispatch();
  useEffect(() => {
    console.log("search and type data is available", searchData, typeSearch);
    // if (searchData && typeSearch) {
    //   console.log("data is available", searchData, typeSearch);
    //   // if (typeSearch === "user") {
    //   //   // getUserData(searchData).then().catch();
    //   // }
    // }
  }, [searchData, typeSearch]);

  const handleSearchData = async () => {
    console.log("handleSearchData is called");

    if (typeSearch === "user") {
      const queryStr = `https://api.github.com/search/users?q=${searchData}`;
      const getData = await axios.get(queryStr);
      console.log("data from axios is ", getData.data);
    }

    if (typeSearch === "repository") {
      const queryStr = `https://api.github.com/search/repositories?q=${searchData}`;
      const getData = await axios.get(queryStr);
      console.log("repositories with this name is  ", getData.data);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{}}>
        <Text>GITHUB SEARCH</Text>
      </View>

      <View style={styles.dropdown}>
        <SearchBar />
      </View>
      <View style={styles.dropdown}>
        <DropdownComponent />
      </View>

      <Button
        onPress={() => {
          handleSearchData();
        }}
        // onPress={() => dispatch(login())}
        title="Search"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
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
  header: {
    backgroundColor: "red",
    marginBottom: 50,
    alignItems: "center",
  },
});
