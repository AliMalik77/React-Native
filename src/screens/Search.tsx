import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../components/Search";
import CardComponent from "../components/Cards";
import { setSearchQuery } from "../redux/actions/AuthAction";
import axios from "axios";
import LinearGradient from "react-native-linear-gradient";

type SearchScreenProps = {
  navigation: any;
};

const Search = ({ navigation }: SearchScreenProps) => {
  const searchData = useSelector((state: any) => state.auth.search);
  const typeSearch = useSelector((state: any) => state.auth.type);
  const [cards, setCards] = useState<any[]>([]);
  const dispatch: any = useDispatch();

  const handleSearchData = async () => {
    console.log("handleSearchData user is called");
    if (searchData !== null) {
      const queryStr = `https://api.github.com/search/users?q=${searchData}`;
      const getData = await axios.get(queryStr);
      console.log("data from axios in user is ", getData.data);
      setCards(getData.data.items);
    }
  };

  const handleBack = () => {
    console.log("handleBack user is called");
    setCards([]);
    dispatch(setSearchQuery(null));
  };
  return (
    <>
      {!cards.length ? (
        <View style={styles.container}>
          <View style={styles.header}>
            <Image
              source={require("../../assets/giti.png")}
              style={{ width: 150, height: 150 }}
              resizeMode="contain"
            ></Image>

            <Text style={styles.textSize}>GITHUB SEARCH</Text>
          </View>

          <View style={styles.dropdown}>
            <SearchBar />
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => handleSearchData()}>
              <LinearGradient
                colors={["#08d4c4", "#01ab9d"]}
                style={styles.back}
              >
                <Text style={styles.searchText}>Search</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View>
          <View>
            <FlatList
              data={cards}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return (
                  <CardComponent
                    data={item}
                    type={typeSearch}
                    setCards={setCards}
                  />
                );
              }}
              ListFooterComponent={() => (
                <View
                  style={{
                    flex: 1,
                    justifyContent: "flex-end",
                  }}
                >
                  <View style={styles.button}>
                    <TouchableOpacity onPress={handleBack}>
                      <LinearGradient
                        colors={["#08d4c4", "#01ab9d"]}
                        style={styles.back}
                      >
                        <Text style={styles.searchText}>Back</Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          </View>
          {/* {cards.map(
            (card, index) => (
              console.log("card data is ", card, typeSearch),
              (
                <CardComponent
                  data={card}
                  type={typeSearch}
                  key={index}
                  setCards={setCards}
                />
              )
            )
          )} */}
        </View>
      )}
    </>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  dropdown: {
    marginBottom: 80,
  },
  search: {
    // flex: 3,
  },
  header: {
    marginBottom: 50,
    // backgroundColor: "red",
    alignItems: "center",
  },
  textSize: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    marginTop: 50,
    bottom: 30,
  },
  back: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  searchText: {
    color: "#fff",
  },
});
